'use strict';
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});



// for history location api (IE10+):
//Router.run(routes, Router.HistoryLocation, function(Handler) {

