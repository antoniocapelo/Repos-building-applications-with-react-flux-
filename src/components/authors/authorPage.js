'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorsList');

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },
    componentWillMount: function() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    },

    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }

});

module.exports = Authors;
