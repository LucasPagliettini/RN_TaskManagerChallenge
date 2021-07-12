import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// PERSISTANCE FUNCTIONALITIES
export const storeData = async (storeKey: string, objectValue: Object) : Promise<void> => {
  try {
    const jsonValue: string = JSON.stringify(objectValue);
    await AsyncStorage.setItem(storeKey, jsonValue);
  } catch (e) {
    Alert.alert('error', e);
  }
};
// eslint-disable-next-line consistent-return
export const getData = async (storeKey: string) => {
  try {
    const jsonValue: string = await AsyncStorage.getItem(storeKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('error', e);
  }
};

// DATE HANDLE UTIL FUNCTIONS
// It Takes a value and convert it to a to digits value adding a cero on the left when it's needed
export const convertTwoDigits = (value: number) : string => {
  let res: string = value.toString();
  if (value < 10) res = `0${value}`;
  return res;
};

// It takes a Data Object and returns a string with the latin date format "DD/MM/YYY"
export const dateFormater = (data: Date) : string => {
  const formatedData: string = `${convertTwoDigits(data.getDate())
  }/${
    convertTwoDigits(data.getMonth() + 1)
  }/${
    data.getFullYear()}`;
  return formatedData;
};

// It takes a Data Object and returns a string with the latin time format "HH:MM hs" (24hs format)
export const timeFormater24 = (data: Date) : string => {
  const formatedData: string = `${convertTwoDigits(data.getHours())
  }:${
    convertTwoDigits(data.getMinutes())
  } hs`;
  return formatedData;
};

// It takes a Data Object and returns a string with the latin time
// format "HH:MM hs (am/pm)" (12hs format)
export const timeFormater12 = (data: Date) : string => {
  let hour: number = data.getHours();
  let aux: string = 'am';
  if (hour > 12) {
    hour -= 12;
    aux = 'pm';
  }
  const formatedData: string = `${convertTwoDigits(hour)
  }:${
    convertTwoDigits(data.getMinutes())
  } hs (${
    aux
  })`;
  return formatedData;
};

// It takes a Date Object and returns a boolean defining if date+month+year
// is previous than the actual date
export const isPastDate = (date: Date) : boolean => {
  const now: Date = new Date();
  if (date.getFullYear() < now.getFullYear()) return true;
  if (date.getFullYear() > now.getFullYear()) return false;
  if (date.getMonth() < now.getMonth()) return true;
  if (date.getMonth() > now.getMonth()) return false;
  if (date.getDate() < now.getDate()) return true;
  return false;
};

// It takes a Date Object and returns a boolean defining if date+month+year
// is equals to the actual date
export const isToday = (date: Date) : boolean => {
  const now: Date = new Date();
  if (
    date.getFullYear() === now.getFullYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate()
  ) return true;
  return false;
};

// It takes two Date Object and returns a boolean defining if hours+minutes of the
// first one is posterior than the second one.
export const isLaterTime = (time: Date, comparedWith: Date) : boolean => {
  if (time.getHours() > comparedWith.getHours()) return true;
  if (time.getMinutes() > comparedWith.getMinutes()) return true;
  return false;
};
