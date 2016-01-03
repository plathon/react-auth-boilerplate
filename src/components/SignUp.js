import React from 'react';

class SignUpComponent extends React.Component {
  render(){
    return(
      <div>
        <h2>Formulário de Cadastro</h2>
        <form>
          <div>
            <label>Name:</label>
            <input name="name" value="" />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" value="" />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" value="" />
          </div>
          <div>
            <button>Save!</button>
          </div>
        </form>
      </div>
    )
  }
}

SignUpComponent.defaultProps = {

}

export default SignUpComponent;
