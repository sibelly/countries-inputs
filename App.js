import React, { useState } from "react";

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ModalCountriesFlatList from './src/components/ModalCountriesFlatList';
import CustomPhoneNumberInput from './src/components/CustomPhoneNumberInput';

export default function App() {
  const [country, setCountry] = useState("CHL");
  const [phone, setPhone] = useState("");

  const handlePhoneInput = (phone) => {
    setPhone(phone)
  }

  const handleCountryInput = (country) => {
    setCountry(country)
  }
  return (
    <SafeAreaView style={styles.container}>

      <Text>Phone number input and Modal countries input with flags</Text>

      <View style={styles.rowView}>
        <Text>
          Counties Input as Functional Component
        </Text>
      </View>
      <View style={styles.rowView}>
        <ModalCountriesFlatList
          handleCountry={handleCountryInput}
        />
      </View>

      <View style={styles.rowView}>
        <Text>
          Phone Number as Class Component
        </Text>
      </View>
      <View style={styles.rowView}>
        <CustomPhoneNumberInput handlePhoneInput={handlePhoneInput} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowView: {
    flexDirection: 'row',
    height: 100,
  }
});
