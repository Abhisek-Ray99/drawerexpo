import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, {memo, useState, useRef, useEffect} from 'react'

import { useDispatch } from '../../redux/store'
import { setLogout } from '../../redux/slices/user'


import Header from './components/Header'
import WelcomeStage from './components/WelcomeStage'
import Stage3 from './components/Stage3'
import Stage4 from './components/Stage4'
import SliderForm from './components/SliderForm'
import AppText from '../../components/text/AppText'
import AppBtn from '../../components/button/AppBtn'
import { colors } from '../../constants/colors'
import navigation from '../../navigation/action'

const WelcomeInventoryScreen = ({route}) => {
  const {mail, inventories} = route.params
  const [stage, setStage] = useState(0)

  const isInventories = Array.isArray(inventories) && inventories.length

  function handlechangeStage(){
    setStage(stage+1)
  }

  const dispatch = useDispatch();
  function handlebackStage(){
    stage > 0 ? setStage(stage-1) : !isInventories ? dispatch(setLogout()) : navigation.goBack();
  }

  const confettiRef = useRef(null);
  function triggerConfetti() {
    confettiRef.current?.play();
  }

  let stages = {
    0: <WelcomeStage mailid={mail} changeStage={handlechangeStage} isInventories={isInventories}  />,
    1: <SliderForm title="What's the name of your store or warehouse?" placeholder="e.g.Shop1 or Warehouse1" changeStage={handlechangeStage}  />,
    2: <SliderForm title="What kind of inventory goods your staff managing?" placeholder="e.g.Stationary or Restaurant" changeStage={handlechangeStage} />,
    3: <Stage3 changeStage={handlechangeStage} />,
    4: <Stage4 ref={confettiRef} />,
  };

  const ConditionalComponent = (stage) => {
    return stages[stage]
  }


  return (
    <View style={styles.welcomecontainer}>
      <Header stages={stages} stage={stage} backStage={handlebackStage} frontStage={handlechangeStage} triggerConfetti={triggerConfetti} />
      <View style={styles.stageview}>
        {ConditionalComponent(stage)}
      </View>
      {
        stage === 0 ?
          <View style={styles.footerview}>
            <AppText style={styles.linktitle} >Have an invite already?</AppText>
            <AppBtn title="Join a inventory"  BtnStyle={styles.linkbtn} />
          </View>
          : null
      }
    </View>
  )
}

export default memo(WelcomeInventoryScreen)

const styles = StyleSheet.create({
  welcomecontainer:{
    flex: 1,
    marginTop: 30,
    paddingBottom: StatusBar.currentHeight/2
  },
  stageview:{
    flex: 1,
  },
  footerview:{
    flex: 0.18,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    elevation: 0.3,
    backgroundColor: colors.grey2200
  },
  linkbtn:{
    elevation: 0,
    height: 40,
    backgroundColor: colors.asenic
  },
  linktitle:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700'
  }
})