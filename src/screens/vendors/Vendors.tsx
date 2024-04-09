import { View } from 'react-native'
import React, {memo} from 'react'

import DetailsHeader from '../../components/view/DetailsHeader'
import { colors } from '../../constants/colors'
import IMAGES from '../../constants/images'
import { styles } from './vendors.styles'

const Vendors = () => {
  return (
    <View style={styles.vendorcontainer}>
      <DetailsHeader
        bgColor={colors.vendor}
        headerTitle={"Vendors"}
        img={IMAGES.simplistic_mobile_bank}
        contentIcon={IMAGES.rename}
      />
    </View>
  )
}

export default memo(Vendors)