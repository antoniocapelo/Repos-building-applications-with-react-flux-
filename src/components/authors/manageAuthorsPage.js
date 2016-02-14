'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthorsPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave withou saving?')) {
                transition.abort();
            }
        }
    },
    componentWillMount: function() { // calling set state here, it doesnt create a re-render (and in componentDidMount, it does...!
        var authorId = this.props.params.id; // from the path '/author/:id'
        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },
    getInitialState: function() {
      return {
          errors: {
          },
          author: {
              id: '', 
              firstName: '',
              lastName: ''
          },
          dirty: false
      };
    },
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        var author = this.state.author;
        author[field] = value;
        return this.setState({author: author, dirty: true});
    },
    authorFormIsValid: function() {
        var isValid = true;
        var errors = {}; // clear any previous errors
        if (this.state.author.firstName.length < 3) {
            errors.firstName = 'First name must be at least 3 characters.';
            isValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            errors.lastName = 'Last name must be at least 3 characters.';
            isValid = false;
        }
        this.setState({errors: errors});
        return isValid;
    },
    saveAuthor: function(event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }
        this.setState({dirty: false});
        toastr.success('Author saved. :)');
        this.transitionTo('authors');
    },
    render: function() {
        return (
            <AuthorForm 
                author={this.state.author}
                errors={this.state.errors}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
            />
        );
    }

});

module.exports = ManageAuthorsPage;
