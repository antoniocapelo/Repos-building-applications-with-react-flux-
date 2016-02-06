'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if(!confirm('Are you sure?')) {
                transition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component) {
            if(!confirm('Are you sure you want to leave????')) {
                transition.abort();
            }
        }
    },
  render: function() {
    return (
        <div>
            <h1 className="">About</h1>
            <p>
            This app uses this techs:
                <ul>
                    <li>React</li>
                    <li>React router</li>
                    <li>Node</li>
                    <li>Flux</li>
                    <li>Flux</li>
                    <li>Browserify</li>
                </ul>
            </p>
        </div>
    );
  }

});

module.exports = About;
