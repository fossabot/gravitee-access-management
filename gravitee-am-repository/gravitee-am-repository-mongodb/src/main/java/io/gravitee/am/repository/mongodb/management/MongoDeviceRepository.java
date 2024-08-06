/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.am.repository.mongodb.management;

import com.mongodb.client.model.IndexOptions;
import com.mongodb.reactivestreams.client.MongoCollection;
import io.gravitee.am.common.utils.RandomString;
import io.gravitee.am.model.Device;
import io.gravitee.am.model.ReferenceType;
import io.gravitee.am.model.UserId;
import io.gravitee.am.repository.management.api.DeviceRepository;
import io.gravitee.am.repository.mongodb.management.internal.model.DeviceMongo;
import io.reactivex.rxjava3.core.Completable;
import io.reactivex.rxjava3.core.Flowable;
import io.reactivex.rxjava3.core.Maybe;
import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.core.Single;
import jakarta.annotation.PostConstruct;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.gte;
import static com.mongodb.client.model.Filters.or;
import static java.util.Optional.ofNullable;

/**
 * @author Rémi SULTAN (remi.sultan at graviteesource.com)
 * @author GraviteeSource Team
 */
@Component
public class MongoDeviceRepository extends AbstractManagementMongoRepository implements DeviceRepository {

    private static final String COLLECTION_NAME = "devices";
    private static final String FIELD_EXPIRES_AT = "expires_at";
    public static final String DEVICE_IDENTIFIER_ID = "deviceIdentifierId";
    public static final String DEVICE_ID = "deviceId";
    private static final String FIELD_USER_EXTERNAL_ID = "userExternalId";
    public static final String FIELD_USER_SOURCE = "userSource";
    private MongoCollection<DeviceMongo> rememberDeviceMongoCollection;


    @PostConstruct
    public void init() {
        rememberDeviceMongoCollection = mongoOperations.getCollection(COLLECTION_NAME, DeviceMongo.class);
        super.init(rememberDeviceMongoCollection);

        final var indexes = new HashMap<Document, IndexOptions>();
        indexes.put(new Document(FIELD_REFERENCE_ID, 1).append(FIELD_REFERENCE_TYPE, 1), new IndexOptions().name("ri1rt1"));
        indexes.put(new Document(FIELD_EXPIRES_AT, 1), new IndexOptions().expireAfter(0L, TimeUnit.SECONDS).name("e1"));

        super.createIndex(rememberDeviceMongoCollection, indexes);
    }

    @Override
    public Flowable<Device> findByReferenceAndUser(ReferenceType referenceType, String referenceId, UserId user) {
        var query = and(eq(FIELD_REFERENCE_ID, referenceId), eq(FIELD_REFERENCE_TYPE, referenceType.name()), userIdMatches(user), gte(FIELD_EXPIRES_AT, new Date()));
        var devicePublisher = rememberDeviceMongoCollection.find(query);
        return Flowable.fromPublisher(devicePublisher).map(this::convert);

    }

    private Bson userIdMatches(UserId user) {
        return or(eq(FIELD_USER_ID, user.id()), and(eq(FIELD_USER_EXTERNAL_ID, user.externalId()), eq(FIELD_USER_SOURCE, user.source())));
    }

    @Override
    public Maybe<Device> findByReferenceAndClientAndUserAndDeviceIdentifierAndDeviceId(
            ReferenceType referenceType, String referenceId, String client, UserId user, String deviceIdentifierId, String deviceId) {
        var query = and(
                eq(FIELD_REFERENCE_ID, referenceId), eq(FIELD_REFERENCE_TYPE, referenceType.name()),
                eq(FIELD_CLIENT, client), userIdMatches(user), eq(DEVICE_IDENTIFIER_ID, deviceIdentifierId), eq(DEVICE_ID, deviceId), gte(FIELD_EXPIRES_AT, new Date()));
        return Observable.fromPublisher(rememberDeviceMongoCollection.find(query).first()).firstElement().map(this::convert);
    }

    @Override
    public Maybe<Device> findById(String deviceId) {
        return Observable.fromPublisher(rememberDeviceMongoCollection.find(and(eq(FIELD_ID, deviceId), gte(FIELD_EXPIRES_AT, new Date()))).first()).firstElement().map(this::convert);
    }

    @Override
    public Single<Device> create(Device item) {
        DeviceMongo entity = convert(item);
        entity.setId(entity.getId() == null ? RandomString.generate() : entity.getId());
        return Single.fromPublisher(rememberDeviceMongoCollection.insertOne(entity)).flatMap(success -> {
            item.setId(entity.getId());
            return Single.just(item);
        });
    }

    @Override
    public Single<Device> update(Device item) {
        DeviceMongo entity = convert(item);
        return Single.fromPublisher(rememberDeviceMongoCollection.replaceOne(eq(FIELD_ID, entity.getId()), entity)).flatMap(updateResult -> Single.just(item));
    }

    @Override
    public Completable delete(String id) {
        return Completable.fromPublisher(rememberDeviceMongoCollection.deleteOne(eq(FIELD_ID, id)));
    }

    private Device convert(DeviceMongo entity) {
        return ofNullable(entity).map(device -> new Device().setId(device.getId())
                .setType(device.getType())
                .setReferenceId(device.getReferenceId())
                .setReferenceType(ReferenceType.valueOf(device.getReferenceType()))
                .setClient(device.getClient())
                .setUserId(new UserId(device.getUserId(), device.getUserExternalId(), device.getUserSource()))
                .setDeviceIdentifierId(device.getDeviceIdentifierId())
                .setDeviceId(device.getDeviceId())
                .setCreatedAt(device.getCreatedAt())
                .setExpiresAt(device.getExpiresAt())
        ).orElse(null);
    }

    private DeviceMongo convert(Device bean) {
        return ofNullable(bean).map(device -> new DeviceMongo()
                .setId(device.getId())
                .setType(device.getType())
                .setReferenceType(device.getReferenceType().name())
                .setReferenceId(device.getReferenceId())
                .setClient(device.getClient())
                .setUserId(device.getUserId().id())
                .setUserExternalId(device.getUserId().externalId())
                .setUserSource(device.getUserId().source())
                .setDeviceIdentifierId(device.getDeviceIdentifierId())
                .setDeviceId(device.getDeviceId())
                .setCreatedAt(device.getCreatedAt())
                .setExpiresAt(device.getExpiresAt())
        ).orElse(null);
    }
}
