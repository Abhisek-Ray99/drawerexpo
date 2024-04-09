import { StyleSheet, Text, View } from 'react-native'
import React, {memo, useState} from 'react'
import AppText from '../../../components/text/AppText'
import InputField from '../../../components/input/InputField'
import { colors } from '../../../constants/colors'
import ImgBtn from '../../../components/button/ImgBtn'

const SliderForm = ({
  title,
  placeholder,
  changeStage
}) => {

  const [name, setName] = useState('')

  return (
    <View style={{flex: 1}}>
      <AppText style={styles.formtitle}>{title}</AppText>
      <View style={styles.inputview}>
        <InputField 
            placeholder={placeholder}
            InputViewStyle={styles.inputstyle}
            onChangeText={value => setName(value)}
            cursorColor={colors.black}
        />
        <ImgBtn 
          Title="Next" 
          disabled={!name.length? true:false} 
          onPress={changeStage} 
          style={{borderRadius: 7}} 
        />
      </View>
    </View>
  )
}

export default memo(SliderForm)

const styles = StyleSheet.create({
    formtitle:{
        fontSize: 24,
        textAlign: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
        fontWeight: '700'
    },
    inputstyle:{
        borderColor: colors.grey1800,
        height: 50
    },
    inputview:{
        paddingHorizontal: 24,
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center'
    }
})