import React from 'react';  
import { View, Text, Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator }from 'react-navigation-stack';
  
class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text style={{ fontSize:50}}>Home Screen</Text>  
                <Button  
                    title="Go to Profile"  
                    onPress={() => this.props.navigation.navigate('Profile')}  
                />  
            </View>  
        );  
    }  
}  

class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ fontSize:50}}>Profile Screen</Text>  
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                  />
            </View>  
    );  
    }  
}  
class LoginScreen extends React.Component{

  render(){
    return(
      <View style={{ flex:1, alignItems:"center",justifyContent:"center"}}>
        <Text style={{ fontSize:50}}>LoginScreen</Text>
        <Button
            title="Go to Cart"
            onPress={() => this.props.navigation.navigate('Cart')}
          />
      </View>
    )
  }
}  

class CartScreen extends React.Component{

  render(){
    return(
      <View style={{ flex:1, alignItems:"center",justifyContent:"center"}}>
        <Text style={{ fontSize:50}}>CartScreen</Text>
        <Button
          title="Go To Order"
          onPress={() => this.props.navigation.navigate('Order')}
        />
      </View>
    )
  }
}
class OrderScreen extends React.Component{

  render(){
    return(
      <View style={{ flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text style={{ fontSize:50}}>OrderScreen</Text>
        <Button
            title="Go to Addcart"
            onPress={() => this.props.navigation.navigate('Cart')}
          />

      </View>
    )
  }
}
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,
        Login: LoginScreen,
        Cart: CartScreen,
        Order: OrderScreen,
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  

    render() {  
        return <AppContainer />;  
    }  
}  