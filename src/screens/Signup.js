import React, {useState} from "react"
import {View,Text,ImageBackground,StatusBar,TextInput, TouchableNativeFeedback} from "react-native"
import Icon from "react-native-vector-icons/Ionicons";

const Signup = props => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const nameHandle = (text) => {
        setName(text)
    }

    const emailHandle = (text) => {
        setEmail(text)
    }

    const passwordHandle = (text) => {
        setPassword(text)
    }

    const onSignin = () => {
        props.navigation.navigate("Signin")
    }

    const onSubmit = () => {
        alert("Name: "+name+"\nEmail: "+email+"\nPassword: "+password)
        setEmail("")
        setName("")
        setPassword("")
    }

    return (
        <View style={{flex:1,backgroundColor:"#FEFCF9"}}>
            <StatusBar backgroundColor="#353941" barStyle="light-content" />
            <View style={{width: '100%', flex:1}}>
                <ImageBackground source={require("../assets/signup-bg.png")} resizeMode="stretch" style={{flex:1,width: '100%', height: '100%'}}>
                    <View>
                        <Icon
                            name="ios-arrow-back"
                            size={32}
                            color="#FEFCF9"
                            style={{marginTop:45,marginLeft:25,fontWeight:"bold"}}
                        />
                        <View style={{marginTop:70,marginLeft:35}}>
                            <Text style={{color:"#FEFCF9",fontSize:35,fontWeight:"bold"}}>Create</Text>
                            <Text style={{color:"#FEFCF9",fontSize:35,fontWeight:"bold"}}>Account</Text>
                        </View>
                    </View>
                    <View style={{flex:1, width:"100%",alignItems:"center",marginTop:20}}>
                        <View style={{flex:1, width:"80%"}}>
                            <View>
                                <TextInput style={{
                                    height: 50, 
                                    width:"100%", 
                                    borderBottomColor:"#f5f5f5",
                                    borderBottomWidth: .8,
                                    borderRadius:5,
                                    marginTop:10,
                                    fontWeight:"bold",
                                    color:"#FEFCF9" ,
                                    
                                }} 
                                value={name}
                                placeholder="Name" placeholderTextColor="#FEFCF9" textContentType="none" onChangeText={text=>nameHandle(text)}/>
                                <TextInput style={{
                                    height: 50, 
                                    width:"100%", 
                                    borderBottomColor:"#dcdcdc",
                                    borderBottomWidth: 1,
                                    borderRadius:5,
                                    marginTop:20,
                                    fontWeight:"bold",
                                    color:"#FEFCF9"
                                }} 
                                value={email}
                                onChangeText={text=>emailHandle(text)}
                                placeholder="Email" placeholderTextColor="#FEFCF9" textContentType="none"/>
                                <TextInput style={{
                                    height: 50, 
                                    width:"100%", 
                                    borderBottomColor:"#dcdcdc",
                                    borderBottomWidth: 0.7,
                                    borderRadius:5,
                                    marginTop:20,
                                    fontWeight:"bold",
                                    color:"#FEFCF9"
                                }}
                                secureTextEntry
                                value={password}
                                onChangeText={text=>passwordHandle(text)}
                                placeholder="Password" placeholderTextColor="#FEFCF9"/>
                            </View>
                            <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:80}}>
                                <Text style={{color:"#FEFCF9",fontSize:25,fontWeight:"bold"}}>Sign up</Text>
                                <TouchableNativeFeedback  onPress={onSubmit}>
                                <View style={{width:60,height:60,backgroundColor:"#353941",borderRadius:50,justifyContent:"center",alignItems:"center"}}>
                                    <Icon
                                        name="ios-arrow-round-forward"
                                        size={30}
                                        color="#FEFCF9"
                                    />
                                </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{marginTop:50}}>
                                <TouchableNativeFeedback onPress={onSignin}>
                                    <Text style={{fontSize:16,textDecorationLine:"underline", fontWeight:"bold",color:"#FEFCF9"}}>Sign in</Text>                                
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Signup