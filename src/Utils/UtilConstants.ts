import { Platform } from 'react-native';

// VALUES FOR THE REPEAT PICKER
export const DAILY = 'Daily';
export const MONDAYTOFRIDAY = 'Monday to Friday';
export const WEEKLY = 'Weekly';
export const MENSUALY = 'Monthly';
export const ANUALLY = 'Anually';
// ARRAY WITH OPTIONS FOR THE REPEAT PICKER
export const repeatOptions = [DAILY, MONDAYTOFRIDAY, WEEKLY, MENSUALY, ANUALLY];

// VALUES FOR THE REMIND PICKER
export const FIVE_MINUTES_EARLY = '5 minutes early';
export const TEN_MINUTES_EARLY = '10 minutes early';
export const FIVETEEN_MINUTES_EARLY = '15 minutes early';
export const THITRY_MINUTES_EARLY = '30 minutes early';
export const ONE_HOUR_EARLY = '1 hour early';
// ARRAY WITH OPTIONS FOR THE REMIND PICKER
export const remindOptions = [
  FIVE_MINUTES_EARLY,
  TEN_MINUTES_EARLY,
  FIVETEEN_MINUTES_EARLY,
  THITRY_MINUTES_EARLY,
  ONE_HOUR_EARLY,
];

// Platform constants
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

// LAYOUT CONSTANTS
export const LayOutValues = {
  placeholderColor: 'grey',
  fontSize: 16,
  fontColor: 'black',
};
