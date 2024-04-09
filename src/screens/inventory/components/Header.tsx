import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import { Ionicons } from '@expo/vector-icons';

import ProgressBar from './Slider'
import AppText from '../../../components/text/AppText'
import { colors } from '../../../constants/colors'
import { windowWidth } from '../../../utils/dimensions';

const Header = ({
    stage,
    backStage,
    frontStage,
    stages,
    triggerConfetti
  }) => {
    
    return (
      <View>
        <View style={styles.headerbuttonContainer}>
        {
          stage !== 0 ? 
          ( <View style={styles.backcontainer}>
              <Pressable 
                style={{padding: 10}} 
                android_ripple={{color: colors.grey1900, borderless: true, foreground: true}}
                onPress={backStage}
              >
                <Ionicons name="chevron-back" size={26} />
              </Pressable>
            </View>):(
            <View style={styles.backcontainer}>
              <Pressable 
                style={{padding: 10}} 
                android_ripple={{color: colors.grey1900, borderless: true, foreground: true}}
                onPress={backStage}
              >
                <Ionicons name="close" size={26} />
              </Pressable>
            </View>
          )
        }
        {
          Object.keys(stages).length-2 === stage ?
          <View>
            <Pressable 
              style={{padding: 10}} 
              android_ripple={{color: colors.grey1900, borderless: false, foreground: true}}
              onPress={()=> {
                frontStage(),
                triggerConfetti()
              }}
            >
              <AppText style={styles.text}>Next</AppText>
            </Pressable>
          </View>
          :
          null
        }
        </View>
        { Object.keys(stages).length-1 !== stage && stage !== 0 ?
          <View style={styles.progressview}>
            <ProgressBar activecount={stage} />
          </View>
          :
          null
        }
      </View>
    )
  }

export default memo(Header)

const styles = StyleSheet.create({
  headerbuttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  backcontainer:{
    width: windowWidth/7.6,
    borderRadius: 50,
    overflow: 'hidden',
  },
  progressview:{
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  text:{
    fontSize: 16
  },
})