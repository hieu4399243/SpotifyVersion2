import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileSceen from './screens/ProfileSceen';


const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                backgroundColor:"green",
                position:"absolute",
                bottom:0,
                left:0,
                right:0,
                shadowOpacity:4,
                shadowRadius:4,
                elevation:4,
                shadowOffset: {
                    width:0,
                    height:-4
                },
                borderTopWidth:0
            }
        }}>
            <Tab.Screen name='Home'
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="black" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                }} />
            <Tab.Screen name='Profile' component={ProfileSceen} options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarLabelStyle: { color: "white" },
                tabBarIcon: ({ focused }) =>
                    focused ? (
                        <Ionicons name="person" size={24} color="black" />
                    ) : (
                        <Ionicons name="person-outline" size={24} color="black" />)
            }} />
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Main' 
                    component={BottomTabs} 
                    options={{ headerShown: false }} 
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;