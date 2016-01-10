import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import Store from 'local-store';
import jwtDecode from 'jwt-decode';

//initialize store
var store = Store();

// data storage
let _userData = {
  name: "",
  email: ""
}
//errors
let _error = "";

const UserStore = assign({}, BaseStore, {

  isAuthenticated(){
    if (store.get('_token'))
      return true;
    else
      return false;
  },

  getUserData(){
    if (store.get('_token'))
      return jwtDecode(store.get('_token'));
    else
      return _userData;
  },

  getError(){
    return _error;
  },

  authenticate(token){
    store.set('_token', token);
  },

  dispatcherIndex: Dispatcher.register((payload) => {
    let action = payload.action;
    switch(action.type) {

      case Constants.ActionTypes.SIGNUP:

        //handle errors
        if (action.error) {
          _error = action.error.response.text;
          UserStore.emitChange();
          break;
        }
        //persist token/auth user
        var token = action.data.body.token;
        UserStore.authenticate(token);
        _error = '';
        UserStore.emitChange();
        break;

      case Constants.ActionTypes.SIGNIN:

        //handle errors
        if (action.error) {
          _error = action.error.response.text;
          UserStore.emitChange();
          break;
        }
        //persist token/auth user
        var token = action.data.body.token;
        UserStore.authenticate(token);
        _error = '';
        UserStore.emitChange();
        break;

      case Constants.ActionTypes.UPDATE_USER:

        //handle errors
        if (action.error) {
          _error = action.error.response.text;
          UserStore.emitChange();
          break;
        }
        //set user data
        var token = action.data.body.token;
        UserStore.authenticate(token);
        _error = '';
        UserStore.emitChange();
        break;
    }
  })

});

export default UserStore;
