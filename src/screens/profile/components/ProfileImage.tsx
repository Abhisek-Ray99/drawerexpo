import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors'

import { Ionicons } from '@expo/vector-icons';

const ProfileImage = ({
    image=null,
    imgwidth=80,
    imgheight=80,
    size=40,
    style
}) => {
  return (
    <>
        {
            image ? (
                <Pressable>
                    <Image source={{ uri:'https://i.pravatar.cc/300'}} style={[styles.profileimg]}/>
                </Pressable>
            ) : (
                <Pressable>
                    <View style={[{width: imgwidth, height: imgheight},styles.imageview, style]}>
                        <Ionicons name="person" size={size} color={colors.white} />
                    </View>
                </Pressable>
            )
        }
    </>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
    profileimg:{
        borderRadius: 50,
    },
    imageview:{
        borderRadius: 50,
        backgroundColor: colors.profileblue,
        alignItems: 'center',
        justifyContent: 'center'
    }
})