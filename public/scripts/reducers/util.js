var FETCH_START = require('../actions/actionCreater').FETCH_START;
var FETCH_END = require('../actions/actionCreater').FETCH_END;
function util (state, action) {
  if(!state){
    state = {isLoading:false};
  }
  switch (action.type) {
    case FETCH_START:
    var newState = {isLoading:true};
    return newState;
    case FETCH_END:
    var newState = {isLoading:false,error:action.error};
    return newState;
  }
return state;
}
module.exports =  util;
