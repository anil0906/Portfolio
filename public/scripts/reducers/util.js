var FETCH_START = require('../actions/actionCreater').FETCH_START;
var FETCH_END = require('../actions/actionCreater').FETCH_END;
var STRETCH_HEADER = require('../actions/actionCreater').STRETCH_HEADER;
var COLLAPSE_HEADER = require('../actions/actionCreater').COLLAPSE_HEADER;
function util (state, action) {
  if(!state){
    state = {isLoading:false, isScroll: false};
  }
  switch (action.type) {
    case FETCH_START:
    var newState = {isLoading:true,isScroll: state.isScroll};
    return newState;
    case FETCH_END:
    var newState = {isLoading:false,error:action.error,isScroll: state.isScroll};
    return newState;
    case STRETCH_HEADER:
    var newState = {isScroll: false};
    return newState;
    case COLLAPSE_HEADER:
    var newState = {isScroll: true};
    return newState;
  }
return state;
}
module.exports =  util;
