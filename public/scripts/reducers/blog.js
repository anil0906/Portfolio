var FETCH_BLOG = require('../actions/actionCreater').FETCH_BLOG;

function blog (state, action) {
  if(!state){
    state = {};
  }
  switch (action.type) {
    case FETCH_BLOG:
    return JSON.parse(JSON.stringify(action.blog));
  }
return state;
}
module.exports =  blog;
