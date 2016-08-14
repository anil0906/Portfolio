//React imports
var React = require('react');

// React Router imports
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

// Components import
var Container = require('./pages/Container.jsx');
var BlogListPage = require('./pages/BlogListPage.jsx');
var SingleBlogPage = require('./pages/SingleBlogPage.jsx');
var ProfilePage = require('./pages/ProfilePage.jsx');
var NotFound = require('./components/NotFound.jsx');
var Error = require('./components/Error.jsx');
var routes = <Route path="/" component={Container}>
               <IndexRoute component={BlogListPage} />
               <Route path="blog" component={BlogListPage} />
               <Route path="home" component={BlogListPage} />
               <Route path="blog/:id" component={SingleBlogPage} />
               <Route path="profile" component={ProfilePage} />
               <Route path="error" component={Error} />
               <Route path="*" component={NotFound} />
            </Route>;
module.exports = routes;
