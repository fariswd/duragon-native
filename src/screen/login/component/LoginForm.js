import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Content, Form, Item, Input, Label, Button } from 'native-base';

import InputTextField from '../../../component/InputTextField'

class LoginForm extends React.Component {
  render() {
    return (
      <Content>
        <Form>
          <Item fixedLabel>
            <Field
              name="username"
              placeholder="username"
              component={InputTextField}
            />
          </Item>
          <Item>
            <Field
              name="password"
              placeholder="password"
              component={InputTextField}
            />
          </Item>
          <Button
            block
            onPress={() => this.props.handleSubmit()}
            style={[{
              marginTop: 5,
            },this.props.buttonStyle]}
            >
            <Label>Submit</Label>
          </Button>
        </Form>
      </Content>
    )
  }
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
