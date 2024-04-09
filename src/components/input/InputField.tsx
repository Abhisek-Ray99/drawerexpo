import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, memo } from 'react'

import { colors } from '../../constants/colors'


const InputField = ({
    placeholder,
    underlinecolor,
    password=false,
    InputStyle,
    InputViewStyle,
    focusColor,
    InputLeftElement=null,
    InputRightElement=null,
    placeholdercolor,
    cursorColor,
    ...other
}: any) => {

  const [isFocused, setIsFocused] = useState(false)

  const borderColor = isFocused ? colors.grey1000 : colors.grey1500;

  return (
    <View style={[styles.inputContainer, InputViewStyle, { borderColor }]}>
      {InputLeftElement}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholdercolor} 
        selectionColor={cursorColor}
        underlineColorAndroid={underlinecolor}
        secureTextEntry={password}
        style={[styles.input, InputStyle]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...other}
      />
      {InputRightElement}
    </View>
  )
}

export default memo(InputField)

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey500,
    borderRadius: 13,
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    height: 60,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.black
  }
})