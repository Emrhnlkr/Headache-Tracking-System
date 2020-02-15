import React, { Component } from 'react';
import {StyleSheet,Text,ToastAndroid, View, Button, TextInput,ScrollView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
export default class Login extends Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    if (this.state.email && this.state.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      ToastAndroid.show('Please fill all the fields!', ToastAndroid.LONG);
    }
  };
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.headBackground} />
				<KeyboardAvoidingView behavior={"position"}>
					
                    <ScrollView>
						<View style={styles.loginArea}>
							<Text style={styles.loginAreaTitle}>Giriş Yap</Text>
							<Text style={styles.loginAreaDescription}>
							 Bilgilerinizi giriniz.
							</Text>

							<View>
			

      <View>
		

				<TextInput
          placeholder="Email"
		  autoCapitalize="none"
		  returnKeyType={"go"}
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
		  secureTextEntry
		  returnKeyType={"go"}
          placeholder="Şifre"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => {
            this.setState({password});
          }}
          value={this.state.password}
        />
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}



			<Button
			 title="Giriş Yap"
			 color="blue"
			
				backgroundColor="#0065e0"
				
				onPress={() => this.handleLogin()}
			/>
		</View>
    </View>
						</View>
					</ScrollView>
                    
				</KeyboardAvoidingView>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	signInText: {
		marginVertical: 10,
		fontSize: 14,
		color: '#333'
  },
  container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		paddingVertical: 80
	},
	headBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 250,
        width: '100%',
		backgroundColor: '#1572de'
	},
	logo: {
		textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#f2f2f2'
	},
	logoDescription: {
		textAlign: 'center',
		color: '#f2f2f2'
	},
	loginArea: {
		marginHorizontal: 40,
		marginVertical: 40,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 5,

		shadowColor: 'black',
		shadowOpacity: .2,
		shadowRadius: 3,
		shadowOffset: {
			width:0,
			height: 2
		}
	},
	loginAreaTitle: {
		fontSize: 20,
		textAlign: 'center'
	},
	loginAreaDescription: {
		fontSize: 11,
		color: '#7e868f',
		marginVertical: 10,
		textAlign: 'center'
    },
    signUpArea: {
		alignItems: 'center'
	},

	signUpText: {
        color: '#666'
	},
	signInText: {
		marginVertical: 10,
		fontSize: 14,
		color: '#333'
	},
	textInput: {
		height: 40,
		fontSize: 20,
		width: '90%',
		borderColor: '#9b9b9b',
		borderBottomWidth: 1,
		marginTop: 8,
		marginVertical: 15,
	  },
});