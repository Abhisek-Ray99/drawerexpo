import React, { useEffect, useState, memo } from 'react';
import { Slide, Alert, HStack } from 'native-base';
import NetInformation from '@react-native-community/netinfo';
import AppText from '../text/AppText';
import { StyleSheet } from 'react-native'

const NetInfo = props => {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInformation.addEventListener(state => {
      if (!state.isConnected) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setInterval(() => checkNetwork(), 2000);
  }, []);

  const checkNetwork = () => {
    NetInformation.refresh().then(state => {
      if (!state.isConnected) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    });
  };

  return !showAlert ? null : (
    <Slide in={showAlert} placement="top">
      <Alert justifyContent="center" status="error" safeAreaTop={5} style={styles.networkview}>
        <HStack space={3} justifyContent="center" alignItems={'center'}>
          <Alert.Icon />
          <AppText color="error.500" fontWeight="medium">
            No connection
          </AppText>
        </HStack>
      </Alert>
    </Slide>
  );
};

export default memo(NetInfo);

const styles = StyleSheet.create({
  networkview:{
    // opacity: 0.5
  }
})