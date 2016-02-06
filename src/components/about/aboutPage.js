'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');

var About = React.createClass({

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
