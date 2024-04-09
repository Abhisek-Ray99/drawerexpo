import { StyleSheet, Text, View, Image, StatusBar, Pressable, Alert, Button, KeyboardAvoidingView, Keyboard } from 'react-native';
import React, {memo, useState, useEffect} from 'react';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';

import AppText from '../../components/text/AppText'
import { colors } from '../../constants/colors'
import InputField from '../../components/input/InputField'
import TextLink from '../../components/text/TextLink'
import ImgBtn from '../../components/button/ImgBtn'
import { users } from '../../data/data'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useDispatch, useSelector } from '../../redux/store'
import { setLoggedIn } from '../../redux/slices/user'
import AppBtn from '../../components/button/AppBtn';
import SocialBtn from '../../components/button/SocialBtn';
import GoogleIcon from '../../assets/icons/google.svg';
import IMAGES from '../../constants/images';
import { windowHeight, windowWidth } from '../../utils/dimensions';


const Login = ({navigation}) => {

  const dispatch = useDispatch();


  const [checked, setChecked] = useState(false)
  const [show, setShow] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev
    })
  }
  

  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  // console.log(user)

  const handleLogin = () => {
    try{
        const user = users?.filter(data => data?.mail === mail && data?.password === pwd)
        if(Array.isArray(user) && !user.length){
          Alert.alert("Error !", "Wrong Email or Password")
        }else{
          dispatch(setLoggedIn(user))
        }
    }catch(error){
      console.warn("got error")
    }
  }

  function validateEmailPassword() {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (mail.match(mailFormat) && pwd.length >= 6) {
      return true;
    } else {
      return false;
    }
  }  
  
  return (
    <Pressable style={styles.ownerLoginContainer} onPress={Keyboard.dismiss} >
      <View style={styles.LoginView1}>
        <Image
          style={styles.loginImg}
          source={IMAGES.mesh_51}
        />
      </View>
      <KeyboardAvoidingView style={styles.LoginView2}>
        <View style={styles.loginTitle}>
          <AppText style={styles.ownerLoginTitle1} >Welcome Back</AppText>
          <AppText style={styles.ownerLoginTitle2}>To keep connected with us please login with your info</AppText>
        </View>
        <View style={styles.loginfields}>
          <InputField 
            placeholder={"Email"}  
            onChangeText={value => setMail(value)} 
            cursorColor={colors.black}
          />
          <InputField 
            placeholder={"Password"} 
            secureTextEntry={show ? false : true} 
            onChangeText={value => setPwd(value)}
            cursorColor={colors.black}
            InputRightElement={
              pwd && 
              (<Pressable onPress={() => setShow(!show)} style={styles.inputicon}>
                  <MaterialCommunityIcons
                    name={show ? "eye-outline" : "eye-off-outline"}
                    color={colors.grey1500}
                    size={24}
                  />
              </Pressable>)
            }
          />
          <View style={styles.infoview}>
            <Pressable onPress={handleCheckboxPress} style={styles.checkboxview}>
              <View style={styles.checkbox} >
                <AnimatedCheckbox
                  checked={checked}
                  highlightColor="#4444ff"
                  checkmarkColor="#ffffff"
                  boxOutlineColor="#4444ff"
                />
              </View>
              <Text style={styles.remember}>Stay Signed</Text>
            </Pressable>
            <TextLink title="Forgot Password?" titleStyle={[styles.forgot, {paddingVertical: 10}]}/>
          </View>
          <ImgBtn Title="Sign in" onPress={handleLogin} disabled={validateEmailPassword() ? false:true} />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            <View style={{width: '40%', height: 0.5, backgroundColor: colors.primary}}/>
            <Text style={{paddingHorizontal: 20, fontSize: 16, color: colors.primary}}>or</Text>
            <View style={{width: '40%', height: 0.5, backgroundColor: colors.primary}}/>
          </View>
          <SocialBtn 
            title="Sign in with Google" 
            // onPress={onGoogleButtonPress}
            leftIcon={
              <View style={{
                width: 60, 
                height: '90%', 
                backgroundColor: 'white',
                borderTopLeftRadius: 18,
                borderBottomLeftRadius: 18,
                borderTopRightRadius: 2,
                borderBottomRightRadius: 2,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GoogleIcon width={30} height={30} />
              </View>
            }
            BtnStyle={{
              borderRadius: 18+2,
              elevation: 0,
              paddingLeft: 2
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  )
}

export default memo(Login)

const styles = StyleSheet.create({
  ownerLoginContainer: {
    flex: 1,
  },
  LoginView1: {
    flex: 0.3,
  },
  LoginView2: {
    flex: 1,
    position: 'absolute',
    height: windowHeight/ 1.3,
    width: windowWidth,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    paddingHorizontal: 22,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
  },
  loginTitle:{
    flex: 1,
    marginTop: 40
  },
  ownerLoginTitle1: {
    fontSize: 26,
    fontWeight: '700',
  },
  ownerLoginTitle2: {
    fontSize: 16, 
  },
  loginfields:{
    flex: 3,
    flexDirection: 'column',
    gap: 10
  },
  infoview:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  forgot:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginImg:{
    width: '100%',
    height: '100%'
  },
  checkboxview:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  checkbox: {
    width: 30,
    height: 30,
    flexDirection: 'row',
  },
  remember:{
    fontWeight: '700'
  },
  inputicon:{
    padding: 10,
  }
})