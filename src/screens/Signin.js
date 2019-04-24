import React,{useState} from "react"
import {View,Text,ImageBackground,StatusBar,TextInput,TouchableNativeFeedback} from "react-native"
import Icon from "react-native-vector-icons/Ionicons";


const Signin = props => {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    const emailHandle = (text) => {
        setEmail(text)
    }

    const passwordHandle = (text) => {
        setPassword(text)
    }


    const onSignup = ()=>{
        props.navigation.navigate("Signup")
    }

    const onSubmit = () => {
        alert("Email: "+email+"\nPassword: "+password)
        setEmail("")
        setPassword("")
    }

    return (
        <View style={{flex:1,backgroundColor:"#FEFCF9"}}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
            <View style={{width: '100%', height: 375}}>
            <ImageBackground source={require("../assets/signin-bg.png")} resizeMode="stretch" style={{flex:1,width: '100%', height: '100%'}}>
                <Icon
                    onPress={()=>props.navigation.prop(1)}
                    name="ios-arrow-back"
                    size={32}
                    color="#FEFCF9"
                    style={{marginTop:45,marginLeft:25,fontWeight:"bold"}}
                />
                <View style={{marginTop:70,marginLeft:35}}>
                    <Text style={{color:"#FEFCF9",fontSize:35,fontWeight:"bold"}}>Welcome</Text>
                    <Text style={{color:"#FEFCF9",fontSize:35,fontWeight:"bold"}}>Back</Text>
                </View>
            </ImageBackground>
            </View>
            <View style={{flex:1, width:"100%",alignItems:"center"}}>
                <View style={{flex:1, width:"80%"}}>
                    <View>
                        <TextInput style={{
                            height: 50, 
                            width:"100%", 
                            borderBottomColor:"silver",
                            borderBottomWidth: 1,
                            borderRadius:5,
                            marginTop:10,
                            fontWeight:"bold",
                        }} 
                        value={email}
                        onChangeText={text=>emailHandle(text)}
                        placeholder="Email"/>
                        <TextInput style={{
                            height: 50, 
                            width:"100%", 
                            borderBottomColor:"silver",
                            borderBottomWidth: 0.7,
                            borderRadius:5,
                            marginTop:15,
                            fontWeight:"bold"
                        }} 
                        value={password}
                        onChangeText={text=>passwordHandle(text)}
                        placeholder="Password" value={password} secureTextEntry={true}/>
                    </View>
                    <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:30}}>
                        <Text style={{color:"#000",fontSize:25,fontWeight:"bold"}}>Sign in</Text>
                        <TouchableNativeFeedback onPress={onSubmit}>
                            <View style={{width:60,height:60,backgroundColor:"#353941",borderRadius:50,justifyContent:"center",alignItems:"center"}}>
                                <Icon
                                    name="ios-arrow-round-forward"
                                    size={30}
                                    color="#FEFCF9"
                                />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{marginTop:50,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <TouchableNativeFeedback onPress={onSignup}>
                            <Text style={{fontSize:16,textDecorationLine:"underline", fontWeight:"bold"}}>Sign up</Text>                        
                        </TouchableNativeFeedback>
                        <Text style={{fontSize:16,textDecorationLine:"underline", fontWeight:"bold"}}>Forgot Password?</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Signin