import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const createPassword = (characters, passwordLength) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }

    return result;
  };

  const generatePasswordString = passwordLength => {
    let characterList = '';

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (uppercase) {
      characterList += uppercaseChars;
    }
    if (lowercase) {
      characterList += lowercaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log('values.......', values);
              generatePasswordString(Number(values.passwordLength));
            }}
            onReset={resetPasswordState}>
            {({
              values,
              errors,
              isValid,
              touched,

              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputColumn}>
                  <Text style={styles.label}>Password Length</Text>

                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />

                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Including Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="orange"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Including Uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="orange"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Including Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="orange"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Including Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="orange"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    style={styles.btn}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <Text style={styles.btnText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={handleReset}>
                    <Text style={styles.btnText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

          {isPassGenerated ? (
            <View style={styles.resultView}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long Press to copy</Text>
              <Text selectable={true} style={styles.passwordText}>
                {password}
              </Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  inputColumn: {
    marginVertical: 20,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  formActions: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },

  errorText: {
    color: 'red',
  },

  btn: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
  },

  //resultView

  resultView: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#000',
  },
  passwordText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    paddingVertical: 16,
  },
});
