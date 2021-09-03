import RESTSerializer from '@ember-data/serializer/rest';

// export default class UserSerializer extends RESTSerializer {
export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { users: payload };
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});
