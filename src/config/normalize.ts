import {Platform, PixelRatio} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../config/platformCheck';

// based on iphone X's scale
const wscale = WINDOW_WIDTH / 390;
const hscale = WINDOW_HEIGHT / 812;

export function normalize(size: number, based: string = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
