var FETCH_PROFILE = require('../actions/actionCreater').FETCH_PROFILE;

function profile (state, action) {
  if(!state){
    state = {};
  }
  switch (action.type) {
    case FETCH_PROFILE:
    console.log("action.profile : "+ action.profile);
    return JSON.parse(JSON.stringify(action.profile));
  }
return state;
}
module.exports =  profile;
