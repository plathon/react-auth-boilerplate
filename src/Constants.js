import keyMirror from 'keyMirror';

export default {

  CHANGE_EVENT: 'change',

  ActionTypes: keyMirror({
    //user
    SIGNUP: null,
    SIGNIN: null,
    FIND_USER: null,
    UPDATE_USER: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
