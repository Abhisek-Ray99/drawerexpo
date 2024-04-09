import React, { useRef, useMemo, useState, useEffect, memo } from "react";
import { StyleSheet, View, StatusBar, BackHandler, Pressable, Text } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { LinearGradient } from 'expo-linear-gradient';
import ViewBox from "../../components/view/ViewBox";
import Summary from "./components/Summary";
import DashBoardHeader from "./components/DashBoardHeader";

import { colors } from "../../constants/colors";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Modal, Portal} from 'react-native-paper';
import ViewItem from "./components/ViewItem";
import Divider from "../../components/divider/Divider";
import FirstView from "./components/FirstView";
import { windowHeight } from "../../utils/dimensions";
import IMAGES from "../../constants/images";
import { shadowStyle } from '../../utils/shadow'


const DashBoard = ({route, navigation}) => {

  const { name, items } = route.params.params[0]

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white', 
    marginHorizontal: 20,
    height: windowHeight/2,
    borderRadius: 7,
    marginTop: 350,
    paddingVertical: 10,
    paddingHorizontal: 14
  };

  // hooks
  const sheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );
  const snapPoints = useMemo(() => ["70%", "70%", "89%"], []);

  StatusBar.setBarStyle('dark-content')

  useEffect(() => {
    function handleBackButton() {
      if (navigation.isFocused()) {
        BackHandler.exitApp();
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient  colors={['#cfd9df', '#e2ebf0', '#e6dee9' ]} style={styles.container1}>
        <View style={styles.dashboardheader}>
            <DashBoardHeader DrawerName={name} ItemTitle={name[0]} />
            <Pressable
              onPressIn={showModal}
              style={{
                backgroundColor: 'wheat',
                ...shadowStyle
              }}
            >
              <Text>Create</Text>
            </Pressable>
        </View>
        <View style={styles.container11}>
          <ViewBox height={'100%'} viewboxStyle={styles.mainview}>
            <Summary  products={items} />
          </ViewBox>
        </View>
      </LinearGradient>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <FirstView />
        </BottomSheetScrollView>
      </BottomSheet>
      <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <View style={styles.view1}>
              <ViewItem 
                icon={<Ionicons name="bag-outline" size={22} color={colors.dodgerblue2} />}
                title="New Purchase"
                descript="Quicky add your purchases"
                bgColor={colors.antiflashwhite1}
                borderC={colors.aliceblue2}
                onPress={()=> {hideModal(), navigation.navigate("new-purchase")}}
              />
              <ViewItem 
                icon={<AntDesign name="shoppingcart" size={22} color={colors.amethyst} />}
                title="New Sale"
                descript="Start saling you product"
                bgColor={colors.antiflashwhite2}
                borderC={colors.lavender}
                onPress={()=> {hideModal(), navigation.navigate("new-sale")}}
              />
              <ViewItem 
                icon={<Ionicons name="receipt-outline" size={22} color={colors.bondiblue} />}
                title="New Invoice"
                descript="Add Today's your invoices"
                bgColor={colors.antiflashwhite3}
                borderC={colors.aliceblue3}
              />
            </View>
            <Divider dashed/>
            <View style={styles.view2}>
              <ViewItem 
                  icon={<Ionicons name="receipt-outline" size={22} color={colors.redheavy100} />}
                  title="Explore more"
                  descript="Tap to find more features"
                  bgColor={colors.grey1600}
                  borderC={colors.grey100}
                  img={IMAGES.more}
              />
            </View>
          </Modal>
        </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "white",
    borderRadius: 50
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  container1:{
    flex: 1.4,
  },
  container11: {
    flex: 0.16,
    padding: 20
  },
  mainview:{
    flex: 1,
  },
  pursale:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  dashboardheader:{
    marginTop: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  sbutton:{
    right: 10
  },
  view1:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingBottom: 10
  },
  view2:{
    flex: 1,
    justifyContent: 'center',
  }
});

export default memo(DashBoard);