import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, StatusBar } from 'react-native';
import { colors } from '../../../constants/colors';
import { windowWidth } from '../../../utils/dimensions';

const ProgressBar = ({
    viewcount=4,
    activecount=2
}) => {

    const [progress, setProgress] = useState(new Animated.Value(0));

    StatusBar.setBarStyle('dark-content')

    const slidercomponents = []
    for(let start=0; start<viewcount; start++){
        slidercomponents.push(<Animated.View key={start} style={ start < activecount ? styles.active_bar : styles.inactive_bar} />)
    }
    return (
        <View style={styles.container}>
            {slidercomponents}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inactive_bar: {
    height: 5,
    width: windowWidth/5,
    backgroundColor: colors.grey100,
    borderRadius: 10,
  },
  active_bar:{
    height: 5,
    width: windowWidth/5,
    backgroundColor: colors.royalblue,
    borderRadius: 10,
  }
});

export default ProgressBar;