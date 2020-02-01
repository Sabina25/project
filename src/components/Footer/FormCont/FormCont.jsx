import React, { Component } from 'react';

/* Import Components */
import Input from './formCompon/Input';
import TextArea from './formCompon/TextArea';
import Button from './formCompon/Button';
import '../FormCont/FormCont';
import './FormCont.css';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        mail: "",
        about: ""
      },

    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleMail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          mail: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        mail: "",
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Ваше имя"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Введите свое имя"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"Почта"}
          name={"mail"}
          title={"Почта"}
          value={this.state.newUser.mail}
          placeholder={"Введите свою почту"}
          handleChange={this.handleMail}
        />{" "}
        {/* Mail */}
       
        <TextArea
          title={""}
          rows={8}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Введите Ваш вопрос или предложение."}
        />
        {/* */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Отправить"}
          style={buttonStyle}
        
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Очистить"}
          className="form-button"
        />{" "}
        {/* Clear */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;