import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class PostsModel extends Model {
  @belongsTo('user') userId;
  @attr('string') title;
  @attr('string') body;
}
