import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, {memo, useState} from 'react'

import AppText from '../../components/text/AppText'
import { colors } from '../../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BottomPopup from '../../components/popup/BottomPopup';
import TextBtn from '../../components/button/TextBtn';
import { windowHeight, windowWidth } from '../../utils/dimensions';

const boxHeight = (windowHeight - 0 * 2)/12;
const boxWidth = (windowWidth - 0 * 2)/6;

const DrawerItem = ({
    ItemTitle,
    onPress,
    img=null,
    style, 
    borderColor,
    onLongPress,
    disabled,
    type
}) => {

  const [show, setShow] = useState(false)
  const toggleModal = ()=> {
    setShow(!show)
  }

  const content = () => {
    return (
        <View style={{paddingVertical: 10}}>
            <View style={styles.row}>
                <View style={[styles.imgstyle, {height: boxHeight/2, width: boxWidth/2, borderRadius: 10}]}>
                    <AppText style={{fontSize: 14, fontWeight: '700'}}>{ItemTitle.charAt(0).toUpperCase()}</AppText>
                </View>
                <AppText style={[styles.itemText, {fontWeight: '700'}]}>{ItemTitle}</AppText>
            </View>
            {
                type === 'owner' && 
                <TextBtn 
                    style={{fontSize: 16}} 
                    TextTitle="Invite members" 
                    leftIcon={<AntDesign name="addusergroup" size={24} color={colors.black} />}
                    viewStyle={{borderRadius: 10}}
                />
            }
            <TextBtn 
                style={{fontSize: 16}} 
                TextTitle={type === "owner" ? "Delete inventory" : "Leave inventory"}
                leftIcon={<Ionicons name="exit-outline" size={24} color={colors.redheavy200} />}
                TextStyle={{color: colors.redheavy200}}
                viewStyle={{borderRadius: 10}}
            />
        </View>
    )
  }

  return (
    <View style={styles.container} elevation={disabled ? 4 : 0}>
        <Pressable 
            onLongPress={onLongPress}
            disabled={disabled}
            onPress={onPress}
            android_ripple={{color: colors.grey1900, borderless: false, foreground: true}}
            style={styles.drawerItemView}>
            <View style={[styles.drawerItemView2]}>
                <View style={[{borderColor: borderColor},styles.activeView, style]}>
                    {img ? 
                        <Image
                            style={styles.tinyLogo}
                            source={{
                            uri: item.img,
                            }}
                        /> 
                    : 
                        <View style={[styles.imgstyle]}>
                            <AppText style={{fontSize: 22, fontWeight: '700'}}>{ItemTitle.charAt(0).toUpperCase()}</AppText>
                        </View> 
                        
                    }
                </View>
                <AppText style={styles.itemText}>{ItemTitle}</AppText>
            </View>
            <View>
                <Pressable 
                    android_ripple={{color: colors.grey1900, borderless: true, foreground: true}}
                    pressRetentionOffset={{bottom: 300, left: 200, right: 200, top: 200}}
                    onPress={toggleModal}
                >
                    <MaterialIcons name="more-vert" size={26} color={colors.grey300} />
                </Pressable>
            </View>
        </Pressable>
        <BottomPopup
            show={show}
            toggleModal={toggleModal}
            renderContent={content}
            bottom={0}
        />

    </View>
    
  )
}

export default memo(DrawerItem)

const styles = StyleSheet.create({
    container:{
        borderRadius: 10, 
        overflow: 'hidden',
        backgroundColor: colors.white,
        marginVertical: 4,
        marginHorizontal: 12
    },
    drawerItemView: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between'
    },
    imgstyle:{
        backgroundColor: colors.flashWhite,
        height: boxHeight/1.2,
        width: boxWidth/1.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    tinyLogo:{
        height: boxHeight,
        width: boxWidth,
    },
    itemText:{
        fontSize: 18,
        marginLeft: 20
    },
    drawerItemView2:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activeView:{
        borderWidth: 3, 
        borderRadius: 21,
        padding: 4
    },
    row:{
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 8
    }
})