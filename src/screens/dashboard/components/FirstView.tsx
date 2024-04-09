import { 
    StyleSheet, 
    Text, 
    View, 
    Pressable,
    Animated,
    ScrollView, 
    
    } from 'react-native'
    import React, { useState, useRef, memo } from 'react'
    
    import { colors } from '../../../constants/colors'
    import PurSaleView from '../../../components/view/PurSaleView';
    import action from '../../../navigation/action';
    import IMAGES from '../../../constants/images';
    import { windowWidth } from '../../../utils/dimensions';
    
    
    const width = windowWidth
    
    const FirstView = () => {
      const [active, setActive] = useState(0);
      const [xTabOne, setXTabOne] = useState(0);
      const [xTabTwo, setXTabTwo] = useState(0);
    
      const translateX: any = useRef(new Animated.Value(0)).current;
      const translateXTabOne: any = useRef(new Animated.Value(0)).current;
      const translateXTabTwo: any = useRef(new Animated.Value(width)).current;
      const translateY: any = useRef(new Animated.Value(-1000)).current;
    
      const handleSlide = (type) => {
        Animated.spring(translateX, {
          toValue: type,
          duration: 100,
          useNativeDriver: true,
        }).start();
        if (active === 0) {
          Animated.parallel([
            Animated.spring(translateXTabOne, {
              toValue: 0,
              duration: 100,
              useNativeDriver: true,
            }).start(),
            Animated.spring(translateXTabTwo, {
              toValue: width,
              duration: 100,
              useNativeDriver: true,
            }).start(),
          ]);
        } else {
          Animated.parallel([
            Animated.spring(translateXTabOne, {
              toValue: -width,
              duration: 100,
              useNativeDriver: true,
            }).start(),
            Animated.spring(translateXTabTwo, {
              toValue: 0,
              duration: 100,
              useNativeDriver: true,
            }).start(),
          ]);
        }
      };
    
      return (
        <ScrollView>
            <View
                style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
            }}>
                <View
                style={{
                    flexDirection: "row",
                    height: 50,
                    position: "relative",
                    backgroundColor: '#e2ebf0',
                    borderRadius: 7,
                }}>
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: "47%",
                            height: "80%",
                            top: 4.2,
                            left: 4,
                            backgroundColor: colors.white,
                            borderRadius: 7,
                            transform: [
                                {
                                    translateX,
                                },
                            ],
                    }}/>
                    <Pressable
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7,
                        }}
                        onLayout={(event) => setXTabOne(event.nativeEvent.layout.x)}
                        onPress={() => {
                            setActive(0);
                            handleSlide(xTabOne);
                    }}>
                        <Text
                            style={{
                                color: active === 0 ? colors.black : colors.grey1500,
                                fontWeight: '700'
                            }}>
                            Purchases
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 7,
                        }}
                        onLayout={(event) => setXTabTwo(event.nativeEvent.layout.x)}
                        onPress={() => {
                            setActive(1);
                            handleSlide(xTabTwo);
                    }}>
                        <Text
                            style={{
                                color: active === 1 ? colors.black : colors.grey1500,
                                fontWeight: '700'
                            }}
                        >
                            Sales
                        </Text>
                    </Pressable>
                </View>
                {
                    !active ? 
                    <Animated.View>
                        <View style={styles.absoluteview1}>
                            <PurSaleView bgColor={colors.purchase} BtnTitle="View purchase" img={IMAGES.outline_mobile_bank} onPress={()=> action.navigate('purchases')} />
                            <PurSaleView bgColor={colors.vendor} BtnTitle="Vendors" img={IMAGES.simplistic_mobile_bank} onPress={()=> action.navigate('vendors')}  />
                        </View>
                    </Animated.View>:
                    <Animated.View>
                        <View style={styles.absoluteview1}>
                            <PurSaleView bgColor={colors.sale} BtnTitle="View Sale" img={IMAGES.outline_mobile_bank} onPress={()=> action.navigate('sales')} />
                            <PurSaleView bgColor={colors.customer} BtnTitle="Customers" img={IMAGES.simplistic_mobile_bank} onPress={()=> action.navigate('customers')}  />
                        </View>
                    </Animated.View>
                }
            </View>
        </ScrollView>
      )
    }
    
    export default memo(FirstView)
    
    const styles = StyleSheet.create({
        absoluteview1:{
            flexDirection: 'row',
            gap: 10,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
    })