import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import api from '../api.js';

export default {

  signup(user) {
    //call api
    api.post( 'user/signup', user, (err, res) => {
      //dispatch action with the server response
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.SIGNUP,
        error: err,
        data: res
      });

    });
  },

  signin(user) {
    //call api
    api.post( 'user/signin', user, (err, res) => {
      //dispatch action with the server response
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.SIGNIN,
        error: err,
        data: res
      });

    });
  },

  find_user(){
    //call api
    api.post( 'user/signin', user, (err, res) => {
      //dispatch action with the server response
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.FIND_USER,
        error: err,
        data: res
      });

    });
  },

  update_user(user){
    //call api
    api.put( 'user', user, (err, res) => {
      //dispatch action with the server response
      Dispatcher.handleViewAction({
        type: Constants.ActionTypes.UPDATE_USER,
        error: err,
        data: res
      });

    });
  }

};
