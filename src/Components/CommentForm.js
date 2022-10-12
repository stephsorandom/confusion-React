import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val)); //checking to make sure it is a number
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
//REGEX rule to check if it meets the critria for a valid email

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModOpen: false,
    };
    this.toggleMod = this.toggleMod.bind(this);
  }

  toggleMod() {
    this.setState({
      isModOpen: !this.state.isModOpen,
    });
  }

  handleLogin(event) {
    this.toggleMod();
    alert(
      'Username: ' +
        this.username.value +
        ' Password: ' +
        this.password.value +
        ' Remember: ' +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div>
          <Button outline onClick={this.toggleMod}>
            <span className='fa fa-pencil fa-lg'></span> Submit Comment
          </Button>
        </div>

        <Modal isOpen={this.state.isModOpen} toggle={this.toggleMod}>
          <ModalHeader toggle={this.toggleMod}>
            <b>Submit Comment</b>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor='rating'>
                  <b>Rating</b>
                </Label>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'></div>
                  <select class='custom-select' id='inputGroupSelect01'>
                    <option selected value='1'>
                      1
                    </option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                </div>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='name'>
                  <b>Your Name</b>
                </Label>
                <Input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your Name'
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='comment'>
                  <b>Comment</b>
                </Label>
                <div class='input-group'>
                  <textarea
                    class='form-control'
                    rows='6'
                    aria-label='Comment'></textarea>
                </div>
              </FormGroup>
              <Button type='submit' value='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Comment;
