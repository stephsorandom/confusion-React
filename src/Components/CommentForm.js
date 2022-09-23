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
    this.toggleModal();
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
            <span className='fa fa-pencil fa-lg'></span> Sumbit Comment
          </Button>
        </div>

        <Modal isOpen={this.state.isModOpen} toggle={this.toggleMod}>
          <ModalHeader toggle={this.toggleMod}>
            Submit Comment
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'></button>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label select htmlFor='rating'>
                  Rating
                </Label>
                <Input type='select' name='pick'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Your Name</Label>
                <Input
                  type='text'
                  id='password'
                  name='password'
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Comment</Label>
                <Input
                  type='text'
                  id='password'
                  name='password'
                  innerRef={(input) => (this.password = input)}
                />
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
