var combineReducers = require('redux').combineReducers;
var routerReducer = require('react-router-redux').routerReducer;
var blogList = require('./blogList');
var blog = require('./blog');
var util = require('./util');
var profile = require('./profile');
var rootReducer = combineReducers({
  profile:profile,
  blog:blog,
  blogList:blogList,
  util:util,
  routing:routerReducer});
module.exports = rootReducer;
