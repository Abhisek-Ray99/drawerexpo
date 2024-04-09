import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Tag from '../../../components/tags/Tag'
import AppText from '../../../components/text/AppText'
import { colors } from '../../../constants/colors'
import { windowWidth } from '../../../utils/dimensions'

const InvoiceElement = ({
    type,
    item,
    onPress
}) => {
  return (
    <Pressable 
        style={styles.invoiceContainer} 
        android_ripple={{color: colors.grey1900, borderless: false, foreground: true, foreground: true}}
        onPress={onPress}
    >
        <View 
            style={styles.item}
            
        >
            <View>
                <AppText>{item.name}</AppText>
                <Tag boxColor={item.type=="purchase" ? colors.red100 : colors.green200} titleColor={item.type =="purchase" ? colors.redheavy100:colors.greenheavy100} style={styles.tag} >{item.type}</Tag>
            </View>
            <View style={styles.priceView} >
                <View style={styles.price}>
                    <Text>Total</Text>
                    <AppText>₹ {item.price}</AppText>
                </View>
                <View>
                    <Text>{item.type == "sale" ? "Owed to you" : "Owed by you"}</Text>
                    <AppText>₹ {item.balance}</AppText>
                </View>
            </View>
        </View>
    </Pressable>
  )
}

export default InvoiceElement

const styles = StyleSheet.create({
    invoiceContainer:{
        backgroundColor: colors.aliceblue1,
        padding: 10,
        elevation: 1,
        marginHorizontal: 10
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tag:{
        width: windowWidth / 5
    },
    priceView:{
        flexDirection: 'row',
        gap: 50,
        alignItems: 'center'
    },
    price:{
        flexDirection: 'column',
    }
})