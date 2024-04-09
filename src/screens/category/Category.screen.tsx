import { FlatList, StyleSheet, Pressable, View, BackHandler } from 'react-native'
import React, {memo, useState, useEffect, useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Modal from "react-native-modal";

import { colors } from '../../constants/colors'
import { MaterialIcons } from '@expo/vector-icons';
import { products } from '../../data/data'
import ProductElement from '../product/components/ProductElement'
import Button from '../items/components/Button';
import { windowWidth } from '../../utils/dimensions';

const CategoryScreen = ({route, navigation}) => {
  // console.log(route.params.categoryName);
  const items = products.filter((item) => item.category == route.params.categoryName)

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true)
    // console.log("hide")
  }
  const hide = () => {
    setVisible(false)
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.rightbtn}>
            <Pressable
                style={{padding: 10}}
                android_ripple={{color: colors.grey1900, borderless: true}}
                onPress={toggleModal}
            >
                <MaterialIcons name="add" size={22} color={colors.royalblue100} />
            </Pressable>
        </View>
    ),
    });
  }, [navigation])

  return (
    <View style={styles.CategoryScreenContainer}>
      <FlatList
        data={ items }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>(
          <ProductElement item={item} onPress={()=> navigation.navigate('product-screen')} show={show} hide={hide} visible={visible} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={300}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        backdropColor={colors.black}
        backdropOpacity={0.5}
        statusBarTranslucent 
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
          </View>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#cfd9df', '#e2ebf0', '#E1E1EC' ]} style={styles.contentContainer}>
            <Button name="Add a Item" IconName="package-variant" onPress={()=> {toggleModal() ,navigation.navigate('add-item')}} />
            <Button name="Add Item via Scan" IconName="barcode-scan" onPress={()=> {toggleModal() ,navigation.navigate('barcode-item')}}/>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  )
}
export default memo(CategoryScreen)

const styles = StyleSheet.create({
  CategoryScreen:{
    flex:1,
  },
  rightbtn:{
    backgroundColor: colors.lightblue,
    marginRight: 20,
    borderRadius: 7,
    elevation: 2
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    paddingTop: 20,
    minHeight: 200
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 40,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
    marginBottom: 10
  },
  contentContainer: {
    flex: 1,
    width: windowWidth,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
})