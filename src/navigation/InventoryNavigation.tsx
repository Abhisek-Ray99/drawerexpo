import { StyleSheet } from 'react-native'
import React, {memo} from 'react'

import { 
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import BottomTabNavigation from './BottomTabNavigation';
import CustomDrawerContent from './components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const sideMenuDisabledScreens = ['item', 'transactions', 'reports']


const InventoryNavigation = ({route}) => {
  const { inventories } = route?.params[0]
  // console.log(route)
  return (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent inventories={inventories} userData={route?.params[0]} /> }
        screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: { width: '85%' },
            swipeEdgeWidth: 350,
        }}
        initialRouteName={inventories[0]?.name}
    >
      {
        inventories?.map((inventory,index) => (
          <Drawer.Screen 
            key={index}
            name={inventory?.name} 
            initialParams={{params: inventories?.filter(shopData => shopData?.name == inventory?.name)}}
            component={BottomTabNavigation} 
            options={({ route }) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? 'item'
              if (sideMenuDisabledScreens.includes(routeName))
                  return ({swipeEnabled: false})
            }} 
          />
        ))
      }
    </Drawer.Navigator>
  )
}

export default memo(InventoryNavigation)