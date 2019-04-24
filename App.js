import React from 'react';
import {createAppContainer,createStackNavigator} from "react-navigation"

import Signin from "./src/screens/Signin"
import Signup from "./src/screens/Signup"

export default () => <Container />

const navigation = createStackNavigator({
    Signin : {
        screen: Signin,
        navigationOptions : {
            header:null
        }
    },
    Signup : {
        screen: Signup,
        navigationOptions : {
            header:null
        }
    }
});

const Container = createAppContainer(navigation)