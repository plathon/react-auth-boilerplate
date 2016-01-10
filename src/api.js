import request from 'superagent';
import Store from 'local-store';
//initialize store
var store = Store();

const TIMEOUT  = 10000;
const BASE_URL = 'http://localhost:3000/';
const SIGNIN_URL = 'http://localhost:8000/webpack-dev-server/#/signin';

var getJwt = () => {
  return store.get('_token');
}

export default {

  post(url, data, _callback){
    request
    .post(BASE_URL + url)
    .set( 'Authorization', 'Bearer ' + getJwt() )
    .send(data)
    .end((err, res) => {
      if (err) {
        //validate Unauthorized
        if ( res.statusCode == '401' ) {
          if ( store.get('_token') ) {
            store.delete( '_token' );
          }
          window.location = SIGNIN_URL;
        }
        return _callback(err, res);
      }

      return _callback(null, res);

    });
  },

  get(url, query, _callback){
    request
    .get(BASE_URL + url)
    .set( 'Authorization', 'Bearer ' + getJwt() )
    .query(query)
    .end((err, res) => {
      if (err) {
        //validate Unauthorized
        if ( res.statusCode == '401' ) {
          if ( store.get('_token') ) {
            store.delete( '_token' );
          }
          window.location = SIGNIN_URL;
        }
        return _callback(err, res);
      }

      return _callback(null, res);

    });
  },

  put(url, data, _callback){
    request
    .put(BASE_URL + url)
    .set( 'Authorization', 'Bearer ' + getJwt() )
    .send(data)
    .end((err, res) => {
      if (err) {
        //validate Unauthorized
        if ( res.statusCode == '401' ) {
          if ( store.get('_token') ) {
            store.delete( '_token' );
          }
          window.location = SIGNIN_URL;
        }
        return _callback(err, res);
      }
      return _callback(null, res);
    });
  },

  delete(url, data, _callback){
    request
    .del(BASE_URL + url)
    .set( 'Authorization', 'Bearer ' + getJwt() )
    .send(data)
    .end((err, res) => {
      if (err) {
        //validate Unauthorized
        if ( res.statusCode == '401' ) {
          if ( store.get('_token') ) {
            store.delete( '_token' );
          }
          window.location = SIGNIN_URL;
        }
        return _callback(err, res);
      }
      return _callback(null, res);
    });
  }

}
