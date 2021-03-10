import 'backbone';
var Backbone = require('backbone');
var Post = Backbone.Model.extend({
  defaults:{
      subject: 'HH',
      body: 'BB',
      by: 'NN',
      like: 'Like'
  }
});
var Posts = Backbone.Collection.extend({});
var posts = new Posts();
export default Post;
export {posts};