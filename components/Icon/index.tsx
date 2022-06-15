import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

interface IconProps {
  url: string;
}

const Icon = ({url}: IconProps) => {
  return (
    <View style={styles.iconsContainer}>
      <Image
        style={styles.iconImage}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ECE9EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
  iconImage: {width: 30, height: 30},
});

export default Icon;
