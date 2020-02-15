import React, {Component} from 'react';
import {StyleSheet,Text,ToastAndroid, View, Button, TextInput,ScrollView,KeyboardAvoidingView,TouchableOpacity} from 'react-native';


import firebase from 'firebase';
export default class Register extends Component {
	componentDidMount(){
		var config = {
			apiKey: "AIzaSyClB2uV5vfPZmjU6Up2Ab3kYstBDpo_pmQ",
			authDomain: "newsapplication-d0b3a.firebaseapp.com",
			databaseURL: "https://newsapplication-d0b3a.firebaseio.com",
			projectId: "newsapplication-d0b3a",
			storageBucket: "newsapplication-d0b3a.appspot.com",
			messagingSenderId: "857390795609",
	  };
	  firebase.initializeApp(config);
	  }
	  constructor(props) {
		super(props);
		this.state = {
		  email: "",
		  password: ""
		};
	  }
	  signupNow = () => {
		if (this.state.email && this.state.password) {
		  firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => this.props.navigation.navigate('Login'))
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
							<Text style={styles.loginAreaTitle}>Kayıt Ol</Text>
							<Text style={styles.loginAreaDescription}>
							 Bilgilerinizi giriniz.
							</Text>

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
			 title="Kayıt Ol"
			 color="blue"
			
				backgroundColor="#0065e0"
				
				onPress={() => this.signupNow()}
			/>
		</View>
						</View>
					</ScrollView>
                    <View style={styles.signUpArea}>
					
						<TouchableOpacity>
							<Text style={styles.signUpText}  onPress={() => this.props.navigation.navigate('Login')}>Kayıtlı Hesap Var mı ?</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
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