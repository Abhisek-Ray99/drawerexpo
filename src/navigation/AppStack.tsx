import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {
    BottomSheetModalProvider,
    // BottomSheetModal,
} from '@gorhom/bottom-sheet';


import SplashScreen from '../screens/splash/Splash.Screen';
import RootNavigation from './RootNavigation';
import AuthNavigation from './AuthNavigation';

import { useSelector } from '../redux/store';

const AppStack = () => {
    const [hide, sethide] = useState(true);

    const { loggedIn, usersInfo } = useSelector((state) => state.user)

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            sethide(false);
        }, 1000);
    }, []);

    if (hide) {
        return (<SplashScreen />);
    }

    return (
        <>
            {
                loggedIn ? 
                (
                    <GestureHandlerRootView style={{flex: 1}}>
                        <BottomSheetModalProvider>
                            <RootNavigation userData={usersInfo} />
                        </BottomSheetModalProvider>
                    </GestureHandlerRootView>
                ) : (
                    <AuthNavigation/>
                )
            }
        </>
    )
}

export default AppStack

const styles = StyleSheet.create({})