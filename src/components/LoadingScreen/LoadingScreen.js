import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const LoadingScreen = ({ isFetching }) => {
  return (
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: '100%',
      }}
    >
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
