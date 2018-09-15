import {Header, Card, CardSection, MyButton, Input, Spinner} from '../common';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';

class Login extends Component  {
    state = {email :'duyhuytdh@gmail.com', password:'1235678', error:'', isLoading:false, LoggedIn:false};
    
    componentWillMount(){
        // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBBacf0j3ByMt1lR3TokoB-g5o3tvUnCPk",
        authDomain: "albumapp-8886f.firebaseapp.com",
        databaseURL: "https://albumapp-8886f.firebaseio.com",
        projectId: "albumapp-8886f",
        storageBucket: "albumapp-8886f.appspot.com",
        messagingSenderId: "736523004797"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((User) =>{
        if(User){
            this.setState({LoggedIn:true});
        }
        else{
            this.setState({LoggedIn:false});
        }
    })
    }

    onLogin() {
        const {email, password} = this.state;
        console.log(email, password);

        this.setState({isLoading:true, error:''});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSucess.bind(this))
            .catch(() =>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSucess.bind(this))
                .catch(this.onLoginFail.bind(this));
            })
    }

    renderLoginButton(){
        if(this.state.isLoading){
            return(<Spinner size={'small'}></Spinner>)
        }

        if(this.state.LoggedIn)
        {
            return(
                <MyButton onPress={() =>{firebase.auth().signOut()}}>Log out</MyButton>
            )
        }

        return(
            <MyButton onPress={this.onLogin.bind(this)}>Log in</MyButton>
        )
    }

    onLoginSucess(){
        console.log('login sucess')
        this.setState({
            email:'duyhuytdh@gmail.com',
            password:'1235678',
            error:'',
            isLoading:false
        })
    }

    onLoginFail(){
        this.setState({
            error:'Authentication Failed.',
            isLoading:false
        })
    }

    render(){
        return(
            <View>
                <Header headerText='Login'/>
                <Card>
                    <CardSection>
                        <Input 
                            label='Email'
                            placeholder='User@gmail.com'
                            value={this.state.email}
                            onChangeText={email => this.setState({email:email})}
                        ></Input>
                    </CardSection>
                    <CardSection>
                        <Input
                            label='Password'
                            placeholder='password'
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({password:password})}
                        ></Input>
                    </CardSection>

                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                    <CardSection>
                        {this.renderLoginButton()}
                    </CardSection>
                </Card>
            </View>
        )
    }
}  

const styles ={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default Login;