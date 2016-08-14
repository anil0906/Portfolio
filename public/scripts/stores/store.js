var Redux = require('redux');
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
var browserHistory = require('react-router').browserHistory;
var rootReducer = require('../reducers/index');
var defaultState = {
  blogList: [],
  blog: {},
  util:{isLoading:false},
  profile: {}
};

var BlogStore = Redux.createStore( rootReducer, defaultState );
//var FinalBlogStore = Redux.compose(window.devToolsExtension ? window.devToolsExtension : undefined)(Redux.createStore);
//var BlogStore = FinalBlogStore( rootReducer, defaultState );
var history = syncHistoryWithStore( browserHistory, BlogStore);
module.exports =  { "store" : BlogStore, "history" : history };
