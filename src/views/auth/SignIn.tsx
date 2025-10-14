import AuthInputField from '@components/form/AuthInputField';
import Form from '@components/form';
import { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import SubmitBtn from '@components/form/SubmitBtn';
import PasswordVisibilityIcon from '@ui/PasswordVisibilityIcon';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/AuthFormContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'src/@types/navigation';

const signInSchema = yup.object({
  email: yup
    .string()
    .trim('Email is Missing')
    .email('Invalid Email!')
    .required('Email is Required'),
  password: yup
    .string()
    .trim('Password is Missing')
    .min(8, ' Password is too short')
    .required('Password is Required'),
});
interface Props {}

const initialValues = {
  email: '',
  password: '',
};
const SignIn: FC<Props> = props => {
  const [secureEntry, setSecureEntry] = useState(true);

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const togglePasswordView = () => {
    setSecureEntry(!secureEntry);
  };
  return (
    <Form
      onSubmit={values => {
        console.log(values);
      }}
      initialValues={initialValues}
      validationSchema={signInSchema}
    >
      <AuthFormContainer heading="Welcome Back!">
        <View style={styles.formContainer}>
          <AuthInputField
            name="email"
            placeholder="john@email.com"
            label="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="password"
            placeholder="*******"
            label="Password"
            autoCapitalize="none"
            secureTextEntry={secureEntry}
            containerStyle={styles.marginBottom}
            rightIcon={<PasswordVisibilityIcon privateIcon={secureEntry} />}
            onRightIconPress={togglePasswordView}
          />
          <SubmitBtn title="Sign In" />
          <View style={styles.linkContainer}>
            <AppLink
              title="i lost my password"
              onPress={() => {
                navigation.navigate('LostPassword');
              }}
            ></AppLink>
            <AppLink
              title="Sign Up"
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            ></AppLink>
          </View>
        </View>
      </AuthFormContainer>
    </Form>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },
  marginBottom: {
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default SignIn;
