import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RecoverScreen from "../screens/RecoverScreen";
import MusicScreen from "../screens/MusicScreen";
import PlaylistScreen from "../screens/PlaylistScreen";

const Stack = createNativeStackNavigator ();

function StackNavigator () {
    return (
        <Stack.Navigator initialRouteName="Login">       
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RecuperarSenha" component={RecoverScreen} />
            <Stack.Screen name="Music" component={MusicScreen} /> 
            <Stack.Screen name="Playlist" component={PlaylistScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;