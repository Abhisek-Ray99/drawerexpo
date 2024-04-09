import { View } from 'react-native'
import React, {memo} from 'react'
import DetailsHeader from '../../components/view/DetailsHeader'
import { colors } from '../../constants/colors'
import IMAGES from '../../constants/images'
import { styles } from './customers.style'

const Customers = ({}) => {
  return (
    <View style={styles.customercontainer}>
      <DetailsHeader
        bgColor={colors.customer}
        headerTitle={"Customers"}
        img={IMAGES.simplistic_mobile_bank}
        contentIcon={IMAGES.rename}
      />
    </View>
  )
}

export default memo(Customers)