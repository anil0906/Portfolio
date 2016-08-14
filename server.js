var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var DATA_DIR = path.join(__dirname, 'data');
var BLOGS_FILE = path.join(DATA_DIR, 'blogList.json');
var PROFILE_FILE = path.join(DATA_DIR, 'profile.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
//res.setHeader('Cache-Control', 'no-cache');
next();
});

app.get('/api/blogList', function(req, res) {
  fs.readFile(BLOGS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/blog/:id', function(req, res) {
  var id = req.params.id;
//  console.log("id : "+id);
  fs.readFile(DATA_DIR+"/"+id+".json", function(err, data) {
    if (err) {
      //console.error(err);
        // fs.readFile(DATA_DIR+"/notfound.json", function(err, data1) {
        //   console.log("data1 : "+data1);
        //   console.log("JSON.parse(data1) :: "+JSON.parse(data1));
        //   res.json(JSON.parse(data1));
        // });
    //  var data1 = {"notfound": true};
res.json({"notfound":1});
    }
    else{
    res.json(JSON.parse(data));
  }
  });
});

app.get('/api/profile', function(req, res) {
  fs.readFile(PROFILE_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

/*app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});
*/
app.get('/*',function (req, res) {
  console.log("url hit");
  res.status(200).sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500);
//   res.render('error', { error: err });
// }

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
