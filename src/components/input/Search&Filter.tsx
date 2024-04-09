import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {memo} from 'react'

import { MaterialIcons } from '@expo/vector-icons';
import SearchField from './SearchField'
import { colors } from '../../constants/colors'

const SearchFilter = ({
  ...other
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchinput}>
        <SearchField placeholder="search or filter payments" InputStyle={styles.input} {...other} /> 
      </View>
      <View style={styles.filterview}>
        <Pressable>
            <MaterialIcons name="filter-alt" size={24} color={colors.dodgerblue} />
        </Pressable>
      </View>
    </View>
  )
}

export default memo(SearchFilter)

const styles = StyleSheet.create({
    searchContainer:{
        position: 'absolute',
        padding: 10,
        flexDirection: 'row',
        gap: 10,
        backgroundColor: colors.white
    },
    searchinput:{
        flex: 1
    },
    filterview:{
        padding: 10,
        backgroundColor: colors.aliceblue,
        borderRadius: 7
    },
    input:{
        height: 40,
    }
})