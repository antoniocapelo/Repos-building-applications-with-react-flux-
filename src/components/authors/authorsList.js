'use strict';

/**
 * @jsx React.DOM
 */

var React = require('react');

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td>
                        <a href={"/#authors/" + author.id}>{author.id}</a>
                    </td>
                    <td>
                    {author.firstName} {author.lasName}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
                </thead>
            </table>
        );
    }

});

module.exports = AuthorList;

