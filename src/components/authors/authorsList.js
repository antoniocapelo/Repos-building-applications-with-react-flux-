'use strict';

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var AuthorActions = require('../../actions/authorActions');

var AuthorList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    deleteAuthor: function(id, ev) {
        ev.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author deleted');
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td>
                        <a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a>
                    </td>
                    <td>
                        <Link to="manageAuthor" params={{ id: author.id }}>{author.id}</Link>
                    </td>
                    <td>
                    {author.firstName} {author.lasName}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                <thead>
                    <th></th>
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

