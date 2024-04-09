import { StyleSheet, Text, View, Image } from 'react-native'
import React, {memo} from 'react'

const TabIcon = ({
    img,
    size
}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={[{width: size, height: size}]}/>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
})