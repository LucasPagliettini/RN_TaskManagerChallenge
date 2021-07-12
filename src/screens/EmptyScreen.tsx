import React from 'react';
import { View } from 'react-native';

// eslint-disable-next-line arrow-body-style
const EmptyScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'white',
      }}
    />
  );
};

export default EmptyScreen;
