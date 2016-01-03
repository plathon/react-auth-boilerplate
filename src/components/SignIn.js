import React from 'react';

class SignInComponent extends React.Component {
  render(){
    return(
      <div>
        <h2>Formulário de Cadastro</h2>
        <form>
          <div>
            <label>Email:</label>
            <input name="email" value="" />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" value="" />
          </div>
          <div>
            <button>Enter Now!</button>
          </div>
        </form>
      </div>
    )
  }
}

SignInComponent.defaultProps = {

}

export default SignInComponent;
