import { StyleSheet, TextInput, View, Text, Pressable } from 'react-native'
import React, { useState, memo, useRef } from 'react'
import { Feather } from '@expo/vector-icons';

import { colors } from '../../constants/colors'


const SearchField = ({
    placeholder,
    underlinecolor,
    password=false,
    InputStyle,
    focusColor,
    icon,
    ...other
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef()
  return (
    <Pressable onPress={() => inputRef.current.focus()}>
        <View style={styles.searchSection}>
            <Feather name="search" size={24} color={colors.green200} style={styles.searchIcon} />
            <TextInput
                ref={inputRef}
                placeholder={placeholder}
                underlineColorAndroid={underlinecolor}
                secureTextEntry={password}
                style={[styles.input, InputStyle]}
                onFocus={ () => setIsFocused(true) }
                {...other}
            />
        </View>
    </Pressable>
  )
}

export default memo(SearchField)

const styles = StyleSheet.create({
    searchSection: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.grey500,
        borderRadius: 7,
    },
    searchIcon: {
        padding: 10,
    },
    input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#424242',
    }
}) 