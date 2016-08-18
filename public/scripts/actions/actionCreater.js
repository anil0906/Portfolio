require('whatwg-fetch');
var FETCH_BLOG_LIST = "FETCH_BLOG_LIST",
FETCH_BLOG = "FETCH_BLOG",
FETCH_PROFILE = "FETCH_PROFILE",
FETCH_START = "FETCH_START",
FETCH_END = "FETCH_END",
VALID_DATA = "VALID_DATA",
DATA_ERROR = "DATA_ERROR",
STRETCH_HEADER = "STRETCH_HEADER",
COLLAPSE_HEADER = "COLLAPSE_HEADER",
NOT_FOUND = "NOT_FOUND";

function stretchHeader(dispatch) {
  dispatch({type: STRETCH_HEADER});
}

function collapseHeader(dispatch) {
  dispatch({type: COLLAPSE_HEADER});
}

function fetchBlogs(dispatch){
    dispatch({type: FETCH_START});
    return new Promise( function ( resolve, reject) {
      fetch('/api/bloglist')
      .then(function(response){
        if(response.ok){
          console.log("data recieved successfully");
          return response.json();
        } else {
          console.error("Network error while processing response in /api/bloglist ");
          dispatch({
            type: FETCH_END,
            error: "Network error, Please try again later."
          });
          reject(DATA_ERROR);
        }
      })
    .then(function(data){
      console.log("data parsed succesfully");
      dispatch({type: FETCH_END});
      if( data.notfound ){
        reject(NOT_FOUND);
      } else {
        dispatch({
          type: FETCH_BLOG_LIST,
          blogList: data
        });
        resolve(VALID_DATA);
      }

    })
    .catch(function(ex){
      console.error("parsing error while processing response in /api/bloglist with exception :  "+ex);
      dispatch({
        type: FETCH_END,
        error: "Data error, We are looking into it"
      });
      reject(NOT_FOUND);
    })
});
}
function fetchSingleBlog(dispatch,id) {
  dispatch({type: FETCH_START});
  console.log("id : "+id);
  return new Promise(function (resolve,reject) {
    fetch('/api/blog/'+id)
    .then(function(response){
      if(response.ok){
        console.log("data recieved successfully");
        return response.json();
      } else {
        console.error("Network error while processing response in /api/singleblog ");
        dispatch({
          type: FETCH_END,
          error: "Network error, Please try again later."
        });
        reject(DATA_ERROR);
      }
    })
    .then(function(data){
      console.log("data parsed succesfully::"+history);
      dispatch({type: FETCH_END});
      if(data.notfound) {
        reject(NOT_FOUND);
      } else {
        dispatch({
          type: FETCH_BLOG,
          blog: data
        });
        resolve(VALID_DATA);
      }

    })
    .catch(function(ex){
    console.error("parsing error while processing response in /api/singleblog with exception :  "+ex);
    dispatch({
      type: FETCH_END,
      error: "Data error, We are looking into it"
    });
    reject(DATA_ERROR);
  })
});
}

function fetchProfile(dispatch){
  dispatch({type: FETCH_START});
  return new Promise( function( resolve, reject) {
  fetch('/api/profile')
  .then(function(response){
    if(response.ok){
      console.log("data recieved successfully");
      return response.json();
    } else {
      console.error("Network error while processing response in /api/profile ");
      dispatch({
        type: FETCH_END,
        error: "Network error, Please try again later."
      });
      reject(DATA_ERROR);
    }

  })
  .then(function(data){
    console.log("data parsed succesfully");

      dispatch({type: FETCH_END});
      if(data.notfound) {
          reject(NOT_FOUND);
      } else {
        dispatch({
          type: FETCH_PROFILE,
          profile: data
        });
        resolve(VALID_DATA);
      }
  })
  .catch(function(ex){
    console.error("parsing error while processing response in /api/profile with exception :  "+ex);
    dispatch({
      type: FETCH_END,
      error: "Data error, We are looking into it"
    });
    reject(DATA_ERROR);
  })
});
}

var exportObject = {
  FETCH_BLOG_LIST:FETCH_BLOG_LIST,
  FETCH_BLOG:FETCH_BLOG,
  FETCH_PROFILE:FETCH_PROFILE,
  FETCH_START:FETCH_START,
  FETCH_END:FETCH_END,
  "fetchBlogs":fetchBlogs,
  "fetchProfile":fetchProfile,
  "fetchSingleBlog":fetchSingleBlog,
  "collapseHeader": collapseHeader,
  "stretchHeader": stretchHeader,
  VALID_DATA:VALID_DATA,
  DATA_ERROR: DATA_ERROR,
  NOT_FOUND: NOT_FOUND,
  STRETCH_HEADER: STRETCH_HEADER,
  COLLAPSE_HEADER: COLLAPSE_HEADER
};
module.exports = exportObject;
