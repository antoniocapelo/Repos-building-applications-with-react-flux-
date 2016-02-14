'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');
var Router = require('react-router');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Link = Router.Link;
var AuthorList = require('./authorsList');

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillUnmount: function() {
      AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    componentWillMount: function() {
      AuthorStore.addChangeListener(this._onChange);
        //this.setState({
            //authors: AuthorStore.getAllAuthors()
        //});
    },

    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }

});

module.exports = Authors;
