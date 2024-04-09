import React, {memo} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { colors } from '../constants/colors';

//screens
import { Category, Products } from '../screens';
import { ROUTES } from './routes';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = ({route}) => {
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBounces: true,
        tabBarPressOpacity: 0,
        tabBarStyle: { 
          backgroundColor: '#cfd9df' ,
          paddingTop: 36,
          elevation: 0
        },
        tabBarActiveTintColor: '#1D5DFF',
        tabBarInactiveTintColor: colors.grey900,
        tabBarLabelStyle:{
          fontWeight: '700'
        },
        tabBarAndroidRipple: { borderless: true,  },
        tabBarPressColor: colors.grey1900,
      }}
    >
        <Tab.Screen 
            name={ROUTES.PRODUCTS}
            component={Products}   
            initialParams={{
              products: route.params
            }}
            options={{
              
            }}
        />
        <Tab.Screen 
            name={ROUTES.CATEGORIES}
            component={Category} 
            initialParams={{
              products: route.params
            }}
            options={{
              
            }}
        />
    </Tab.Navigator>
  )
}

export default memo(TopTabNavigation)