'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT;
var _authors = [];

// BASIC IMPLEMENTATION OF FLUX STORE
var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function() {
        return _authors;
    },
    getAuthorById: function(id) {
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE: 
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
        break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
        break;
        case ActionTypes.UPDATE_AUTHOR:
            var author = _.find(_authors, {id: action.author.id});
            var idx = _.indexOf(_authors, author);
            _authors.splice(idx, 1, action.author);
            AuthorStore.emitChange();
        break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(auth) {
                return action.id === auth.id;
            });
            AuthorStore.emitChange();
            break;
              
        default: 
            // no op
    }
});

module.exports = AuthorStore;
