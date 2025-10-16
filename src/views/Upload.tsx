import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const Upload: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'white' }}>Upload</Text>
      <Text style={{ fontSize: 10, color: 'white' }}>
        Please Check Api for Functionalities
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Upload;
