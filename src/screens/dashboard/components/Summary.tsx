import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect, memo } from 'react'

import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../constants/colors'
import AppText from '../../../components/text/AppText'
import Dataview from './Dataview'

const Summary = ({products}) => {

  // console.log(products)

  const [quantity, setQuantity] = useState(0)
  const [category, setCategory] = useState(0)
  const [items, setItems] = useState(0)
  const [price, setPrice] = useState(0)

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item?.value;
    });
    return item ? (num / item?.value).toFixed(digits).replace(rx, "$1") + item?.symbol : "0";
  }


  useEffect(() => {
    const mySet = new Set();
    let count = 0;
    let price = 0;
    products?.map((item)=> {
      mySet.add(item?.category);
      count += Number(item?.count);
      price += Number(item?.price);
    })
    setCategory(mySet?.size)
    setQuantity(count)
    setItems(products?.length)
    setPrice(price)
  }, [])


  return (
    <View style={styles.summaryview}>
      <Ionicons name="layers" size={18} color={colors.black} />
      <AppText style={styles.summarytext}>Inventory Summary</AppText>
      <View style={styles.dataviewStyle}>
        <Dataview profile={"Items"} value={items} />
        <Dataview profile={"Total Qty"} value={`${quantity} units`} />
        <Dataview profile={"Total Category"} value={`${category}`} />
        <Dataview profile={"Total Value"} value={`$${nFormatter(price, 2)}`} />
      </View>
    </View>
  )
}

export default memo(Summary)

const styles = StyleSheet.create({
  summaryview:{
    height: '100%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  dataviewStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  summarytext:{
    fontSize: 14,
    fontWeight: '700',
    color: colors.black
  }
})