import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function bottomTabs (){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarLabel:"Home",
                headerShown:false,
                tabBarLabelStyle:{color:"white"},
                tabBarIcon:({focused})=>
                focused ? (
                    <AntDesign name="home" size={24} color="black" />
                ) : (
                    <Entypo name="home" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    )
}
