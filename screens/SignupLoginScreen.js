import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class SignupLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: "",
      name: "",
      contact: "",
      address: "",
      confirmPassword: "",
      isModalVisible: false,
    };
  }

  userSignUp = (username, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((response) => {
        alert("User Added Successfully!");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        alert("Successfully Logged In!");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.header}>Barter</Text>
          <Text style={styles.subheader}>A Trading Method</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.inputLabel}>USERNAME</Text>
          <TextInput
            style={styles.loginBox}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <Text style={styles.inputLabel}>PASSWORD</Text>
          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 10 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fde1af",
  },
  topContainer: {
    width: "100%",
    alignItems: "center",
  },
  header: {
    fontSize: 50,
    color: "#ff9800",
    marginTop: 225,
    fontWeight: "500",
  },
  subheader: {
    fontSize: 20,
    color: "#ff8a65",
  },
  bottomContainer: {
    width: "75%",
    marginTop: 30,
  },
  inputLabel: {
    color: "#ff5722",
    fontWeight: "700",
  },
  loginBox: {
    height: 25,
    borderBottomWidth: 1.5,
    borderColor: "#ffab91",
    marginBottom: 15,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
  },
  buttonText: {
    color: "#ff5722",
    fontWeight: "600",
  },
});
