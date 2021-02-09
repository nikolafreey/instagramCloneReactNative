import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => console.log("result", result))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          title="Sign In"
          onPress={() => {
            this.onSignIn();
          }}
        />
      </View>
    );
  }
}

export default Login;
