import { StyleSheet, Text, View, Image, Pressable, FlatList, StatusBar } from 'react-native'
import React, {memo, useState} from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';

import { Modal } from "./Modal";
import AppText from '../../components/text/AppText';
import DrawerItem from './DrawerItem';
import { colors } from '../../constants/colors';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TextBtn from '../../components/button/TextBtn';
import ProfileImage from '../../screens/profile/components/ProfileImage';

import { useDispatch } from '../../redux/store';
import { setLogout } from '../../redux/slices/user';
import navigation from '../action';
import { windowHeight, windowWidth } from '../../utils/dimensions';
import IMAGES from '../../constants/images';

const CustomDrawerContent = ({inventories, userData}) => {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const { fullname, mail, type } = userData
    const [selected, setSelected] = useState(inventories[0].name);
    const handleName = (item) => {
        setSelected(item.name);
    };

    const [data, setData] = useState(inventories)

    return (
        <View style={styles.drawerContainer}>
            <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#fff']} style={styles.toprofile}>
                <Pressable
                    onPress={()=> navigation.navigate('profile', {fullname})}
                >
                    <Image
                        style={styles.Img}
                        source={IMAGES.mesh_51}
                    />
                    <View style={styles.profilethumb}>
                        <ProfileImage imgwidth={40} imgheight={40} size={25} style={styles.imgview} />
                        <View style={styles.thumtextview}>
                            <AppText style={[styles.thumbtext, styles.thumbtext_head]}>
                                {
                                    fullname.length <= 14 ? fullname : fullname.slice(0,14)+'...'
                                }
                            </AppText>
                            <AppText style={[styles.thumbtext, styles.thumbtext_tail]}>{mail}</AppText>
                        </View>
                    </View>
                </Pressable>
            </LinearGradient >
            <View style={styles.drawerListView}>
                <View style={styles.TitleView}>
                    <AppText style={styles.drawerTitle}>Available Inventories</AppText>
                </View>
                <DraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => setData(data)}
                    keyExtractor={item => item.name}
                    renderItem={({item, drag, isActive}) => (
                        <ScaleDecorator>
                            <DrawerItem 
                                ItemTitle={item.name} 
                                onPress={() => {navigation.navigate(item.name), handleName(item)}} 
                                borderColor={
                                    item.name === selected
                                    ? colors.heavyblue
                                    : "transparent"
                                }
                                onLongPress={drag}
                                disabled={isActive}
                                type={type}
                            />
                        </ScaleDecorator>
                    )}
                />
            </View>
            <View style={styles.preferenceView}>
                {
                    type === "owner" ? (
                        <>
                            <TextBtn 
                                TextTitle="Create a new inventory" 
                                onPress={()=> navigation.navigate('welcome-inventory')}
                                leftIcon={
                                    <Ionicons name="add-circle-outline" size={26} />
                                } 
                            />
                            <TextBtn 
                                TextTitle="View Members" 
                                onPress={()=> navigation.navigate('view-members')}
                                leftIcon={
                                    <Ionicons name="people-outline" size={24} />
                                } 
                            />
                        </>
                    ) : null
                }
                <TextBtn 
                    TextTitle="Preferences" 
                    onPress={()=> navigation.navigate('preferences')}
                    leftIcon={
                        <Ionicons name="settings-outline" size={24} />
                    } 
                />
                <TextBtn 
                    TextTitle="Sign out" 
                    onPress={handleModal}
                    leftIcon={
                        <AntDesign name="logout" size={22} />
                    } 
                />
            </View>
            <Modal isVisible={isModalVisible}>
            <Modal.Container>
                <Modal.Header title="Are you sure you want to sign out?" />
                <Modal.Body>
                    <Text style={styles.text}>Please ensure your items & folders have synced before signing out.</Text>
                </Modal.Body>
                <Modal.Footer>
                    <TextBtn TextStyle={[styles.popupBtn, {color: colors.heavyblue}]} TextTitle="Cancel" onPress={handleModal} />
                    <TextBtn TextStyle={[styles.popupBtn, {color: colors.redheavy100}]} TextTitle="Sign Out" onPress={() => dispatch(setLogout())} />
                </Modal.Footer>
            </Modal.Container>
            </Modal>
        </View>
    )
}

export default memo(CustomDrawerContent)

const styles = StyleSheet.create({
    drawerContainer:{
        flex:1,
        overflow: 'hidden',
        paddingBottom: StatusBar.currentHeight/2
    },
    toprofile:{
        width: windowWidth/1.17,
        height: windowHeight/8,
        paddingHorizontal: 10,
        paddingTop: 34
    },
    Img:{
        width: '100%',
        height: '100%',
        borderRadius: 7,
    },
    TitleView:{
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    drawerListView:{
        flex: 1,
        paddingVertical: 10,
    },
    drawerTitle:{
        fontSize: 22,
        fontWeight: '700'
    },
    preferenceView:{
        borderTopWidth: 0.5,
        borderTopColor: colors.grey1900
    },
    profilethumb:{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        top:0,
        bottom: 0,
        left: 20,
    },
    imgview:{
        borderColor: 'grey',
        borderWidth: 1
    },
    thumbtext:{
        color: colors.grey400
    },
    thumtextview:{
        left: 20,
    },
    thumbtext_head:{
        fontSize: 18,
        fontWeight: '700'
    },
    thumbtext_tail:{
        fontSize: 12
    },
    righticon:{
        color: colors.grey400,
        top: 0,
        bottom: 0,
        left: 70
    },
    popupBtn:{
        fontWeight: 'bold',
    },
})