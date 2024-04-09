import { StyleSheet, View, useColorScheme } from 'react-native'
import React from 'react'
import { DetailsHeaderFlatList } from 'react-native-sticky-parallax-header';

import { products } from '../../data/data'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import navigation from '../../navigation/action';
import ProductElement from '../../screens/product/components/ProductElement';
import AppBtn from '../button/AppBtn';

const DetailsHeader = ({
  data=products,
  bgColor,
  headerTitle,
  img,
  contentIcon,
}) => {
    const isDarkTheme = useColorScheme() === 'dark'

    function goBack(){
      navigation.goBack()
    }
  
    return (
        <DetailsHeaderFlatList
          leftTopIcon={()=>
            <AppBtn 
                BtnStyle={styles.btn}
                onPress={goBack}
                rightIcon={
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="arrow-left-thin" size={24} color={colors.white} />
                    </View>
                }
            />
          }
        //   leftTopIconOnPress={goBack}
          rightTopIcon={()=>
            <AppBtn 
                BtnStyle={styles.btn}
                // onPress={goBack}
                rightIcon={
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="plus" size={24} color={colors.white} />
                    </View>
                }
            />
          }
          contentContainerStyle={[
            styles.content,
            isDarkTheme ? styles.darkBackground : styles.lightBackground,
          ]}
          containerStyle={styles.stretchContainer}
          backgroundColor={bgColor}
          title={headerTitle}
          titleStyle={styles.text}
          contentIconNumberStyle={styles.countext}
          headerHeight={40}
          parallaxHeight={10}
          image={img}
          contentIcon={contentIcon}
          contentIconNumber={10}
          showsVerticalScrollIndicator={false}
          tag={null}
        //   stickyTabs={false}
          keyExtractor={item => item.id}
          data={data}
          rememberTabScrollPosition
        //   enableSafeAreaTopInset={true}
        //   disableScrollToPosition={true}
          hasBorderRadius
        // initialPage={2}
        snapToEdge={false}
          renderItem={({ item, index }) => (
            <ProductElement
                  item={item} 
                  onPress={()=> navigation.navigate('product-screen')} 
                  onLongPress={()=> {
                    toggleActiveState(index);
                  }}
            />
          )}
        />
    )
}

export default DetailsHeader

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: colors.black,
    },
    lightBackground: {
        backgroundColor: colors.white,
    },
    stretchContainer: {
        alignSelf: 'stretch',
        flex: 1
    },
    text: {
        fontSize: 20,
        color: colors.black
    },
    headerbtn:{
        width: 40,
        height: 40,
        borderRadius: 10,
        borderColor: colors.white,
        backgroundColor: colors.grey100,
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        // paddingVertical: 10,
    },
    countext:{
        fontSize: 14,
    },
    btn:{
        width: 40,
        height: 40,
        backgroundColor: colors.sapphire,
        opacity: 0.9,
    },
})