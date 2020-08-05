import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-google-app-auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 30
  },
  image: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 120
  }
})

class LoginGoogle extends Component {

  constructor(props) {
      super(props)
      this.state = {
        loggedIn: false,
        photoUrl: "",
        name: ""
      }
    }

    // CLient ID: 645821795167-0cfsqes51eglpl6d6rp8cm29l7guv8j1.apps.googleusercontent.com
    // Client Secret: ISlVwEKL73JzKnWAXSJBrQXg
  signingIn = async () => {
      try {
          const result = await AuthSession.startAsync({
            authUrl:
              `https://accounts.google.com/o/oauth2/v2/auth?` +
              `&client_id=${'645821795167-0cfsqes51eglpl6d6rp8cm29l7guv8j1.apps.googleusercontent.com'}` +
              `&redirect_uri=${encodeURIComponent('http://localhost:3000/auth/google/redirect')}` +
              `&response_type=code` +
              `&access_type=offline` +
              `&scope=profile`,
          });
      
          if (result.type === 'success') {
              this.setState({
                  loggedIn: true,
                  name: result.user.name,
                  photoUrl: result.user.photoUrl
                })
          } else {
            console.log("It's so cancelled.")
          }
        } catch (e) {
          console.log("error", e)
        }
  }

  render() {
      return (
          // <View>
          //     <View style={styles.loginButton}>
          //         <Button onPress={() => props.signingIn()} title="LOGIN WITH GMAIL" />
          //     </View>
          // </View>
          <View style={styles.container}>
            {this.state.loggedIn ? (
              <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
            ) : (
              <LoginPage signingIn={this.signingIn} />
            )}
          </View>
      )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Button title="Sign in with Google" onPress={() => props.signingIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Text style={styles.header}>Howdy {props.name}!</Text>
    </View>
  )
}

export default LoginGoogle;
