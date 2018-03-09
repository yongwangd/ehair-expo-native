import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

console.log('weight, height', screenWidth, screenHeight);

// const SMALL_SCREEN = screen

const SMALL = 'SMALL';
const MEDIUM = 'MEDIUM';
const LARGE = 'LARGE';
const XLARGE = 'XLARGE';

const SCREEN_LEVEL =
  screenHeight < 500
    ? SMALL
    : screenHeight < 700 ? MEDIUM : screenHeight < 1000 ? LARGE : XLARGE;

const CONTACT_DETAIL_IMAGE_MAP = {
  SMALL: 280,
  MEDIUM: 300,
  LARGE: 360,
  XLARGE: 500
};

const CONTACT_LIST_IMAGE_MAP = {
  SMALL: 80,
  MEDIUM: 95,
  LARGE: 110,
  XLARGE: 130
};

export const CONTACT_DETAIL_IMAGE_HEIGHT =
  CONTACT_DETAIL_IMAGE_MAP[SCREEN_LEVEL];
export const CONTACT_LIST_IMAGE_HEIGHT = CONTACT_LIST_IMAGE_MAP[SCREEN_LEVEL];
