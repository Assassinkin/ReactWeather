var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//its the same as var Route = require('react-router').Route; ....(object destructuring)
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundations
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" components={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component = {Weather}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
