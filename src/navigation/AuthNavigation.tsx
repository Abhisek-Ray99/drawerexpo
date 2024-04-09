import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import { Login, Onboarding } from '../screens';

//routes
import { ROUTES } from './routes';

const Stack = createStackNavigator();

const AuthNavigation = () => {

  return (
    <Stack.Navigator initialRouteName={ROUTES.ONBOARDING}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.ONBOARDING}
        component={Onboarding}
        options={{
            headerShown: false,
        }} 
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;