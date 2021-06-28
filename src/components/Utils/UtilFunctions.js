import AsyncStorage from '@react-native-async-storage/async-storage';
//https://react-native-async-storage.github.io/async-storage/docs/usage/

//PERSISTANCE FUNCTIONALITIES
export const storeData = async (storeKey, objectValue) => {
    try {
      const jsonValue = JSON.stringify(objectValue);
      await AsyncStorage.setItem(storeKey, jsonValue);
    } catch (e) {
      console.log('error', e);
    }
  };
  export const getData = async storeKey => {
    try {
      const jsonValue = await AsyncStorage.getItem(storeKey);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('error', e);
    }
  };


//DATE HANDLE UTIL FUNCTIONS
//It Takes a value and convert it to a to digits value adding a cero on the left when it's needed
export const convertTwoDigits = (value) => {
  let res = value;
  if (value < 10) res = "0" + value;
  return res;
};

//It takes a Data Object and returns a string with the latin date format "DD/MM/YYY"
export const dateFormater = (data) => {
  let formatedData =
    convertTwoDigits(data.getDate()) +
    "/" +
    convertTwoDigits(data.getMonth() + 1) +
    "/" +
    data.getFullYear();
  return formatedData;
};

//It takes a Data Object and returns a string with the latin time format "HH:MM hs" (24hs format)
export const timeFormater24 = (data) => {
  let formatedData =
    convertTwoDigits(data.getHours()) +
    ":" +
    convertTwoDigits(data.getMinutes()) +
    " hs";
  return formatedData;
};

//It takes a Data Object and returns a string with the latin time format "HH:MM hs (am/pm)" (12hs format)
export const timeFormater12 = (data) => {
  let hour = data.getHours();
  let aux = "am";
  if (hour > 12) {
    hour = hour - 12;
    aux = "pm";
  }
  let formatedData =
    convertTwoDigits(hour) +
    ":" +
    convertTwoDigits(data.getMinutes()) +
    " hs (" +
    aux +
    ")";
  return formatedData;
};

//It takes a Date Object and returns a boolean defining if date+month+year is previous than the actual date
export const isPastDate = (date) => {
  const now = new Date();
  if (date.getFullYear() < now.getFullYear()) return true;
  else if (date.getFullYear() > now.getFullYear()) return false;
  else if (date.getMonth() < now.getMonth()) return true
  else if (date.getMonth() > now.getMonth()) return false
  else if (date.getDate() < now.getDate()) return true;
  return false;
};

//It takes a Date Object and returns a boolean defining if date+month+year is equals to the actual date
export const isToday = (date) => {
  const now = new Date();
  if (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  )
    return true;
  return false;
};

//It takes two Date Object and returns a boolean defining if hours+minutes of the 
//first one is posterior than the second one.
export const isLaterTime = (time, comparedWith) => {
  if (time.getHours() > comparedWith.getHours()) return true;
  else if (time.getMinutes() > comparedWith.getMinutes()) return true;
  return false;
};

