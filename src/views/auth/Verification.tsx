import AuthInputField from '@components/form/AuthInputField';
import { FC, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import OTPField from '@ui/OTPField';
import AppButton from '@ui/AppButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'src/@types/navigation';

interface Props {}

const otpFields = new Array(6).fill('');

const Verification: FC<Props> = props => {
  const [otp, setOtp] = useState([...otpFields]);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const inputRef = useRef<TextInput>(null);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    if (value === 'Backspace') {
      //move to previous only if the field is empty
      if (!newOtp[index]) setActiveOtpIndex(index - 1);
      newOtp[index] = '';
    } else {
      //update otp and move to the next
      setActiveOtpIndex(index + 1);
      newOtp[index] = value;
    }
    setOtp([...newOtp]);
  };

  //   pasting
  const handlePaste = (value: string) => {
    if (value.length === 6) {
      Keyboard.dismiss();
      const newOtp = value.split('');
      setOtp([...newOtp]);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <AuthFormContainer heading="Please Check Your Email!">
      <View style={styles.inputContainer}>
        {otpFields.map((_, index) => {
          return (
            <OTPField
              ref={activeOtpIndex === index ? inputRef : null}
              key={index}
              placeholder="*"
              onKeyPress={({ nativeEvent }) => {
                handleChange(nativeEvent.key, index);
              }}
              onChangeText={handlePaste}
              keyboardType="numeric"
              value={otp[index] || ''}
            />
          );
        })}
      </View>

      <AppButton
        title="Submit"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
      <View style={styles.linkContainer}>
        <AppLink title="Resend OTP" />
      </View>
    </AuthFormContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  linkContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 20,
  },
});

export default Verification;
