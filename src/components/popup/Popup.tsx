import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { colors } from '../../constants/colors';
import AppText from '../text/AppText';
import AppBtn from '../button/AppBtn';
import action from '../../navigation/action';
import { windowHeight, windowWidth } from '../../utils/dimensions';

const Popup = ({
  style,
  style2,
  moveRight,
  handledown,
  data
}) => {
  
  return (
    <Animated.View
        style={[{
            position: 'absolute',
            width: windowWidth,
            height: windowHeight / 10,
            bottom: -20,
            justifyContent: 'center',
            zIndex: 100,
        }, style]}
    >
      <Animated.View style={[{
            position: 'absolute',
            width: windowWidth/3,
            height: windowHeight / 15,
            right: 12,
            justifyContent: 'center',
            backgroundColor: '#FEDBDF',
            zIndex: -10,
            borderRadius: 15
        }]}>
          <Pressable onPress={handledown} >
            <AppText style={{color: '#DC3C4D', paddingLeft: 55, fontWeight: '700' }}>Remove</AppText>
          </Pressable>
      </Animated.View>
      

      
      <Animated.View style={style2}>
        <Pressable>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#cfd9df', '#e2ebf0', '#E1E1EC' ]} style={styles.content}>
            <View style={styles.contentContainer}>
              <View style={styles.contentView1}>
                <Pressable 
                  style={styles.dropdownview}
                >
                  <Ionicons name="bag-handle-outline" size={25} color={colors.black} />
                  <AppText style={{fontWeight: '700'}}>{`${data.length} item Added`.toUpperCase()}</AppText>
                </Pressable>
                <AppBtn 
                  title="Next" 
                  color={colors.black} 
                  BtnStyle={styles.btn} 
                  titleStyle={styles.btntxt} 
                  rightIcon={<Octicons name="triangle-right" size={14} color={colors.white} />}
                  onPress={() => action.navigate('selected-item', data)}
                />
              </View>
              <View style={styles.contentView2}>
                <Pressable 
                  onPress={moveRight}
                >
                  <MaterialCommunityIcons name="window-close" size={16} color={colors.black} style={styles.icon} />
                </Pressable>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      </Animated.View>
    </Animated.View>
  )
}

export default Popup

const styles = StyleSheet.create({
    content:{
      width: windowWidth/1.06,
      height: windowHeight / 14,
      opacity: 0.98,
      alignSelf: 'center',
      borderRadius: 15,
      elevation: 1,
    },
    contentContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
    },
    contentView1:{
      flex: 6,
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contentView2:{
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      backgroundColor: colors.grey1500,
      padding: 5,
      borderRadius: 50
    },
    rightview:{
      position: 'absolute',
      width: '94%',
      height: '80%',
      backgroundColor: 'red'
    },
    dropdownview:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      gap: 10,
    },
    btn:{
      height: 45,
      width: windowWidth/3.5,
      elevation: 0,
      borderRadius: 10,
      alignSelf: 'center',
    },
    btntxt:{
      fontWeight: 'bold',
      fontSize: 14
    }
})