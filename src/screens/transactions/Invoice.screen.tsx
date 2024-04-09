import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import navigation from '../../navigation/action';

const InvoiceScreen = () => {
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);
  return (
    <View>
      <Text>InvoiceScreen</Text>
    </View>
  )
}

export default InvoiceScreen

const styles = StyleSheet.create({})