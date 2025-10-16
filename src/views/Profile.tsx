import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const Profile: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'white' }}>Profile</Text>
      <Text style={{ fontSize: 10, color: 'white' }}>
        Please Check Api for Functionalities
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
