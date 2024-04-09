import { StyleSheet, View, SafeAreaView, BackHandler} from 'react-native'
import React, { useCallback, useState, memo, useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from "react-native-modal";

import ActionButton from '../items/components/ActionButton'
import Button from '../items/components/Button';
import { colors } from '../../constants/colors';
import ProductElement from './components/ProductElement';
import SearchFilter from '../../components/input/Search&Filter';
import LottieAnimation from '../../components/view/LottieAnimation';
import LottieView from '../../components/view/LottieAnimation';
import Popup from '../../components/popup/Popup';
import IMAGES from '../../constants/images';
import { windowHeight, windowWidth } from '../../utils/dimensions';


const Products = ({route, navigation}) => {

  const data = Object.values(route.params.products)

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(data)
  
  const [selectedData, setSelectedData] = useState([])

  // Create an array to track the active state for each item
  const [activeStates, setActiveStates] = useState([]);

  useEffect(() => {
    setActiveStates(filteredData.map(() => false));
  }, [filteredData]);

  useEffect(() => {
    // Update selectedData whenever activeStates changes
    setSelectedData(filteredData.filter((_, index) => activeStates[index]));
  }, [activeStates]);

  const toggleActiveState = (index) => {
    // Update the active state for the specific item
    setActiveStates((prevStates) => {
      const newActiveStates = [...prevStates];
      newActiveStates[index] = !newActiveStates[index];
      return newActiveStates;
    })
  };

  const handleInputChange = (value) => {
    setSearchTerm(value);
    filterData(value)
  }

  const filterData = (searchTerm) => {
    const filteredData = Object.values(route.params.products).filter((item) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }
  
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY_action = useSharedValue(0);
  const translateY_filter = useSharedValue(0);

  const filterBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY_filter.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    }
  })

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY_action.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        lastContentOffset.value > event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY_filter.value = 0;
        translateY_action.value = 0;
        // console.log("scrolling up");
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY_filter.value = -100;
        translateY_action.value = 160;
        // console.log("scrolling down");
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('dashboard');
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackPress
        );
      };
    }, []),
  );

  const popupTranslateX = useSharedValue(0);
  const popupTranslateY = useSharedValue(0);

  const handlePress = () => {
    if(activeStates.every(element => element === false)){
      popupTranslateY.value = 0;
    }else{
      popupTranslateY.value = -92;
    }
  };
  handlePress();

  const handlePressdown = () => {
      popupTranslateX.value = 0
      popupTranslateY.value = 0;
      setActiveStates(filteredData.map(() => false))
  }
  
  const popupBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(popupTranslateY.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });

  const handlePressRight = () => {
    if (popupTranslateX.value === 0) {
      popupTranslateX.value = -100;
    } else {
      popupTranslateX.value = 0;
    }
  };
  const popupBarRightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(popupTranslateX.value, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
          }),
        },
      ],
    };
  });
  

  return (
          <SafeAreaView style={[styles.container, ]}>
            {
              activeStates.every(element => element === false) ? 
              <Animated.View style={filterBarStyle}>
                <SearchFilter onChangeText={value => handleInputChange(value)} value={searchTerm} />
              </Animated.View>
              :
              null
            }
            <View>
              {
              Array.isArray(data) && data?.length ? (
                <View style={styles.emptycontainer}>
                  <Animated.FlatList
                    contentContainerStyle={{ paddingBottom: 140, paddingTop: 50 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={filteredData}
                    renderItem={({item, index}) =>
                        <ProductElement 
                          item={item} 
                          onPress={()=> navigation.navigate('product-screen')} 
                          onLongPress={()=> {
                            toggleActiveState(index);
                          }}
                          activebar={activeStates[index]}
                        />
                    }
                    ListEmptyComponent={
                      <LottieAnimation
                        title="no product found"
                        imagesource={IMAGES.animation}
                        style={{marginTop: 100}} 
                      />
                    }
                    keyExtractor={item => item.id}
                    style={styles.productflatlist}
                    scrollEventThrottle={16}
                    onScroll={scrollHandler}
                  />
                </View>
              ) : (
                <View style={styles.emptycontainer}>
                  <View style={styles.containerlottie}>
                      <LottieView
                        title="It's empty here"
                        imagesource={IMAGES.animation}
                        description="Add your item by tapping the '+' "
                        size={200}
                      />
                    </View>
                </View>
              )
            }
            </View>
            <Animated.View style={actionBarStyle}>
              {
                activeStates.every(element => element === false) && <ActionButton
                onPress={()=> {
                  toggleModal()
                }}
                title="Present Modal"
                color="black"
              />
              }
            </Animated.View>
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
              backdropTransitionOutTiming={500}
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
                  <Button name="Add a Item" IconName="package-variant" onPress={()=> {navigation.navigate('add-item'), toggleModal()}} />
                  <Button name="Add Item via Scan" IconName="barcode-scan" onPress={()=> {navigation.navigate('barcode-item'), toggleModal()}}/>
                </LinearGradient>
              </View>
            </Modal>
            <Popup 
              style={popupBarStyle} 
              style2={popupBarRightStyle}
              moveRight={handlePressRight} 
              handledown={handlePressdown}
              data={selectedData}
              toggleActiveState={toggleActiveState}
            />
              
          </SafeAreaView>
  )
}

export default memo(Products);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  productflatlist:{
    padding: 10,
    zIndex: -10
  },
  containerlottie: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left:0,
    right: 0,
    margin: 'auto',
  },
  emptycontainer:{
    height: windowHeight/1.1,
  }
})