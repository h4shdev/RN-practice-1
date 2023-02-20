import React, {useState, useRef} from 'react';
import {
  FlatList,
  View,
  Pressable,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {WINDOW_WIDTH} from '../config/config';
// import {useTheme} from 'src/hooks/useTheme';
// import {Text14, Text16, Text32} from 'src/components/CustomText';
// import LinearGradientButton from 'src/components/LinearGradientButton';
import OnboardingBackground from '../assets/images/background.png'; //'..assets/images/onboarding-background.png';
import {normalize} from '../config/normalize';
import {commonStyles} from '../config/CommonStyles';
import {useTheme} from '../config/useTheme';
import AnimatedImage from '../components/AnimatedImage';
import onboarding1 from '../assets/images/onboarding1.png';
import onboarding2 from '../assets/images/onboarding2.png';
import onboarding3 from '../assets/images/onboarding3.png';

type Slide = {
  id: string;
  image: () => JSX.Element;
  title: string;
  subtitle: string;
};

type Slides = Slide[];

const slides: Slides = [
  {
    id: '1',
    image: () => (
      <AnimatedImage>
        <Image
          source={onboarding1}
          style={{height: normalize(142), width: normalize(142)}}
        />
      </AnimatedImage>
    ),
    title: 'Slide 1',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: () => (
      <AnimatedImage>
        <Image
          source={onboarding2}
          style={{height: normalize(142), width: normalize(142)}}
        />
      </AnimatedImage>
    ),
    title: 'Slide 2',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: () => (
      <AnimatedImage>
        <Image
          source={onboarding3}
          style={{height: normalize(142), width: normalize(142)}}
        />
      </AnimatedImage>
    ),
    title: 'Slide 3',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

// type NavigationProps = NativeStackNavigationProp<
//   RootStackParamList,
//   'Onboarding'
// >;

const OnboardingScreen = () => {
  // const navigation = useNavigation<NavigationProps>();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const [currentStyles, theme] = useTheme(styles);
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WINDOW_WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const renderSlideItem = ({item}: {item: Slide}) => {
    return (
      <View style={currentStyles.slideContainer}>
        {item?.image()}

        <View>
          <Text style={currentStyles.title}>{item?.title}</Text>

          <Text style={currentStyles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={currentStyles.footerContainer}>
        <View style={currentStyles.indicatorContainer}>
          {slides.map((item: Slide, index) => (
            <View
              key={item.id}
              style={[
                currentStyles.indicator,
                currentSlideIndex === index && currentStyles.activeIndicator,
              ]}
            />
          ))}
        </View>

        <View>
          {/* <LinearGradientButton
            title={translation.joinGoodApp}
            onPress={() => navigation.replace('SignUp')}
          /> */}

          <Pressable
            // onPress={() => navigation.navigate('Login')}
            style={currentStyles.signInButton}>
            <Text style={[commonStyles.lh24, currentStyles.signInText]}>
              Done
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={OnboardingBackground} style={commonStyles.flex1}>
      <SafeAreaView style={commonStyles.flex1}>
        <FlatList
          ref={flatListRef}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={currentStyles.flatListContainer}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={renderSlideItem}
        />

        {renderFooter()}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen;
