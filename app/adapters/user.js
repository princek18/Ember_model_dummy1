import RESTAdapter from '@ember-data/adapter/rest';

export default class UserAdapter extends RESTAdapter {
  host = 'https://jsonplaceholder.typicode.com';

  pathForType() {
    return 'users';
  }
}
