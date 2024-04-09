import { StyleSheet, View, BackHandler } from 'react-native'
import React, {memo, useState, useCallback} from 'react'
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing, } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import CategoryElement from './components/CategoryElement'
import SearchFilter from '../../components/input/Search&Filter';
import LottieAnimation from '../../components/view/LottieAnimation';
import LottieView from '../../components/view/LottieAnimation';
import IMAGES from '../../constants/images';

const Category = ({route, navigation}) => {

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

  const products = Object.values(route.params.products);

  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const translateY = useSharedValue(0);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(translateY.value, {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
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
        translateY.value = -2;
        // console.log("scrolling up");
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -100;
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

  const categoriesList = {}
  products.map((item) => {
    if(categoriesList.hasOwnProperty(item.category)){
      categoriesList[item.category] += 1;
    }else{
      categoriesList[item.category] = 1;
    }
  })

  const categoriesData = Object.keys(categoriesList).map(categoryName => ({
    categoryName,
    totalItems: categoriesList[categoryName]
  }));
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(categoriesData)

  const handleInputChange = (value) => {
    setSearchTerm(value);
    filterData(value)
  }

  const filterData = (searchTerm) => {
    const filteredData = categoriesData.filter((item) => 
      item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredData(filteredData)
  }



  return (
    <SafeAreaView style={styles.categoryContainer}>
      {
        Array.isArray(products) && products?.length ? (
          <>
            <Animated.View style={actionBarStyle}>
              <SearchFilter onChangeText={value => handleInputChange(value)} value={searchTerm} />
            </Animated.View>
            <Animated.FlatList
              data={ filteredData }
              contentContainerStyle={{ paddingBottom: 100, paddingTop: 60 }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>(
                <CategoryElement 
                  categoryName={item.categoryName} 
                  totalItems={item.totalItems}  
                  onPress={()=> navigation.navigate('category-screen', { categoryName: item.categoryName})} />
              )}
              keyExtractor={(item) => item.categoryName}
              ListEmptyComponent={
                <LottieAnimation
                  title="no category found"
                  imagesource={IMAGES.animation} 
                  style={{marginTop: 100}} 
                />
              }
              style={styles.flat}
              scrollEventThrottle={16}
              onScroll={scrollHandler}
            />
          </>
        ) : (
          <View style={styles.containerlottie}>
              <LottieView
                title="No category present here"
                imagesource={IMAGES.animation}
                size={140}
                description="Add your first category by clicking 'add' button "
              />
          </View>
        )
      }
    </SafeAreaView>
  )
}


export default memo(Category)

const styles = StyleSheet.create({
  categoryContainer:{
    flex:1,
    marginTop: -28
  },
  flat:{
    zIndex: -10
  },
  containerlottie: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left:0,
    right: 0,
    margin: 'auto',
    marginTop: 80
  },
})