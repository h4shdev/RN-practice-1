import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
}

const AnimatedImage: React.FC<Props> = ({children}) => {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: withTiming(scale.value, {easing: Easing.inOut(Easing.ease)})},
        // {
        //   rotate:
        //     withTiming(rotate.value, {easing: Easing.inOut(Easing.ease)}) +
        //     'deg',
        // },
      ],
    };
  });

  useEffect(() => {
    // Loop the scale animation with a time interval of 2 seconds
    scale.value = withRepeat(
      withTiming(1.5, {duration: 1600, easing: Easing.inOut(Easing.ease)}),
      -1,
      true,
    );
    // rotate.value = withRepeat(
    //   withTiming(180, {duration: 3600, easing: Easing.linear}),
    //   -1,
    //   true,
    // );
  }, []);

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity>{children}</TouchableOpacity> */}
      <Animated.View style={[styles.animationWrapper, animatedStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default AnimatedImage;
