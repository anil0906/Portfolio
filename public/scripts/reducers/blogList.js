var FETCH_BLOG_LIST = require('../actions/actionCreater').FETCH_BLOG_LIST;
function blogList (state, action) {

  if(!state){
    state = [];
  }
  switch(action.type) {
    case FETCH_BLOG_LIST:
    return action.blogList;

 }

 return state;
}
module.exports =  blogList;
