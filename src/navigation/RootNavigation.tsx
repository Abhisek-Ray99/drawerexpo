import React, {memo} from 'react'

import { CardStyleInterpolators, createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, TransitionPresets } from '@react-navigation/stack';

import { colors } from '../constants/colors';
import InventoryNavigation from './InventoryNavigation';

//screens
import { 
    AddItem, 
    BarcodeItem, 
    CategoryScreen, 
    ProductDetailsScreen, 
    ViewMembersScreen, 
    InvoiceScreen, 
    SettingsScreen, 
    PreferencesScreen, 
    ProfileScreenEdit, 
    Profile, 
    NewPurchaseScreen, 
    NewSaleScreen, 
    Sales, 
    Purchase, 
    WelcomeInventoryScreen, 
    SelectItemScreen, 
    Customers, 
    Vendors 
} from '../screens';
import { ROUTES } from './routes';

const RootStack = createStackNavigator()

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 10,
    },
  };

const RootNavigation = ({userData}) => {

    const initialScreen = (Array.isArray(userData[0]?.inventories) && !userData[0]?.inventories?.length)
    ? ROUTES.WELCOME_INVENTORY : ROUTES.HOME

    return (
        <RootStack.Navigator
            initialRouteName= {initialScreen}
        >
            <RootStack.Screen
                name={ROUTES.WELCOME_INVENTORY}
                initialParams={userData[0]}
                component={WelcomeInventoryScreen} 
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
            />
            <RootStack.Screen
                name={ROUTES.HOME}
                initialParams={userData}
                component={InventoryNavigation} 
                options={{
                    headerShown: false,
                }}/>
            <RootStack.Screen
                name={ROUTES.ADD_ITEM}
                component={AddItem} 
                options={{
                    presentation: 'modal',
                    headerTitleStyle: {display: 'none'},
                }}
                />
            <RootStack.Screen
                name={ROUTES.BARCODE_ITEM}
                component={BarcodeItem} 
                options={{
                    presentation: 'modal',
                    headerTitleStyle: {display: 'none'},
                    
                }}
                />
            <RootStack.Screen
                name={ROUTES.CATEGORY_SCREEN}
                component={CategoryScreen} 
                options={({ route }) => ({
                    title: route.params.categoryName,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    cardStyle: {
                        backgroundColor: colors.white
                    }, 
                })}
                />
            <RootStack.Screen
                name={ROUTES.PRODUCT_SCREEN}
                component={ProductDetailsScreen} 
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.VIEW_MEMEBERS}
                component={ViewMembersScreen} 
                options={{
                    headerTitle: 'View Members',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.PREFERENCES}
                component={PreferencesScreen} 
                options={{
                    headerTitle: 'Preferences',
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.ScaleFromCenterAndroid,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.INVOICE}
                component={InvoiceScreen} 
                options={{
                    headerTitle: 'Invoice',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.SETTINGS}
                component={SettingsScreen} 
                options={{
                    headerTitle: 'Settings',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: TransitionSpecs.FadeOutToBottomAndroidSpec,
                        close: TransitionSpecs.FadeInFromBottomAndroidSpec,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.PROFILE_EDIT}
                component={ProfileScreenEdit} 
                options={{
                    headerTitle: 'Edit Profile',
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: TransitionSpecs.RevealFromBottomAndroidSpec,
                        close: TransitionSpecs.TransitionIOSSpec,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.PROFILE}
                component={Profile} 
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: TransitionSpecs.RevealFromBottomAndroidSpec,
                        close: TransitionSpecs.TransitionIOSSpec,
                    },
                    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.NEW_PURCHASE}
                component={NewPurchaseScreen} 
                options={{
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.NEW_SALE}
                component={NewSaleScreen} 
                options={{
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.SALES}
                component={Sales} 
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
                
                />
            <RootStack.Screen
                name={ROUTES.PURCHASES}
                component={Purchase} 
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                    transitionSpec: {
                        open: config,
                        close: config,
                      },
                }}
                
            />
            <RootStack.Screen
                name={ROUTES.SELECTED_ITEM}
                component={SelectItemScreen} 
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}
            />
            <RootStack.Screen
                name={ROUTES.CUSTOMERS}
                component={Customers} 
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: TransitionSpecs.TransitionIOSSpec,
                        close: {
                            animation: 'timing',
                            config: {
                                duration: 100,
                                stiffness: 1000,
                                damping: 500,
                                overshootClamping: true,
                                restDisplacementThreshold: 0.01,
                                restSpeedThreshold: 0.6,
                            },
                        },
                    }
        
                }}
            />
            <RootStack.Screen
                name={ROUTES.VENDORS}
                component={Vendors} 
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: TransitionSpecs.TransitionIOSSpec,
                        close: {
                            animation: 'timing',
                            config: {
                                duration: 100,
                                stiffness: 1000,
                                damping: 500,
                                overshootClamping: true,
                                restDisplacementThreshold: 0.01,
                                restSpeedThreshold: 0.6,
                            },
                        },
                    }
        
                }}
            />
        </RootStack.Navigator>
    )
}

export default memo(RootNavigation)