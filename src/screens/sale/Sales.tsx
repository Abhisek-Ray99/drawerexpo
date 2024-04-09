import { View, StatusBar,Text } from 'react-native'
import React, { memo } from 'react'

import { styles } from './sales.styles'
import StickyHeader from '../../components/view/StickyHeader'

// min, initial, Max++

const Sales = () => {
  return (
    <View style={styles.salescontainer}>
      <StatusBar barStyle='light-content' translucent />
      <StickyHeader headerTitle="Sales" bgColor="#4B878BFF" >

      </StickyHeader>
    </View>
  )
}

export default memo(Sales)