import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

//Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minnimum of 4 characters')
    .max(16, 'Should be maximum of 16 characters')
    .required('Length is required'),
});

function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //Generating password string
  };

  const createPassword = (characters: string, passwordLength: number) => {
    //create password
  };

  const resetPasswordState = () => {
  //reset password
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text> Hello</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
