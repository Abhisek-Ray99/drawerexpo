import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React, {memo, useEffect} from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import navigation from '../../navigation/action';

const ProductDetailsScreen = () => {

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
    <View style={styles.container}>
      <MaterialCommunityIcons name="window-close" size={24} color={colors.white} />
    </View>
  )
}

export default memo(ProductDetailsScreen)

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})