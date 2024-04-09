import { View, StatusBar } from 'react-native'
import React, { memo } from 'react'

import {styles} from './purchase.styles'
import StickyHeader from '../../components/view/StickyHeader'

const Purchase = () => {
  return (
    <View style={styles.customercontainer}>
      <StatusBar barStyle='light-content' translucent />
      <StickyHeader headerTitle="Sales" bgColor="#4F709C" >
        
      </StickyHeader>
    </View>
  )
}

export default memo(Purchase)