import { Modal, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

import AppText from "../text/AppText";
import { windowHeight, windowWidth } from "../../utils/dimensions";


const BottomPopup = ({renderContent, bottom, borderradius, show, toggleModal}) => {

    const renderOutsideTouchable = ()=>{
        const view = <View style={{flex: 1, width: '100%'}} />
        if(!show) return view
        return (
            <Modal
                animationType="fade"
                transparent={true}
            >
                <Pressable onPress={toggleModal}>
                    <View
                        style={{
                            height: windowHeight,
                            backgroundColor: '#333333AA',
                            justifyContent: 'flex-start'
                        }}
                    />
                    {view}
                </Pressable>
            </Modal>
        )
    }

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={toggleModal}
            statusBarTranslucent={true}
        >
                {renderOutsideTouchable()}
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: '#fff',
                        width: windowWidth,
                        borderTopRightRadius: borderradius ? borderradius : 10,
                        borderTopLeftRadius: borderradius ? borderradius : 10,
                        borderBottomLeftRadius: borderradius,
                        borderBottomRightRadius: borderradius,
                        paddingHorizontal: 10,
                        bottom: bottom,
                    }}
                >
                    {renderContent()}
                </View>
            {/* </View> */}
        </Modal>
    )
}

export default BottomPopup;