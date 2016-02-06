/*eslint-disable strict*/

var React = require('react');
var Header = require('./common/header.js');
var RouteHandler = require('react-router').RouteHandler;
// using $ globally as it's required to be global on bootstrap
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="fluid-container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;
