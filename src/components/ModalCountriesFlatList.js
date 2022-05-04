import React, {useState, useRef} from 'react';
import { 
  View,
  Text,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TextInput
} from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import {SearchBar} from 'react-native-elements';
import data from '../constants/countries';

import {
  Container,
  NativeBaseProvider
} from 'native-base'

// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'Chile'
  )[0].flag

const defaultCountry = data.filter(
  obj => obj.name === 'Chile'
  )[0].name

const ModalCountriesFlatList = ({ handleCountry }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [selectedFlag, setSelectedFlag] = useState(defaultFlag);
  const countryData = data;
  const [modalVisible, setModalVisible] = useState(false);

  const textInput = useRef(null);

  const onSearch = (searchText) => {
    setSearchText(searchText);

    let filteredData = data.filter(function (item) {
      let lowerCaseItem = item.name.toLocaleLowerCase()
      return lowerCaseItem.includes(searchText.toLocaleLowerCase());
    });

    setFilteredData(filteredData);
  };

  const getCountry = async (country) => {
    const countryData = await data
    try {
      const countryName = await countryData.filter(
        obj => obj.name === country
      )[0].name
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag

      setSelectedFlag(countryFlag);
      setSelectedCountry(countryName);
      await hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }

  const showModal = () => {
    setModalVisible(true)
  }

  const hideModal = () => {
    setModalVisible(false)
    // Refocus on the Input field after selecting the country code
    textInput.current.focus();
  }

  const onChangeCountry = (value) => {
    const countryFlag = data.filter(
      obj => obj.name.toLocaleLowerCase() === value.toLocaleLowerCase()
    )[0]?.flag

    const countryName = data.filter(
      obj => obj.name.toLocaleLowerCase() === value.toLocaleLowerCase()
    )[0]?.name

    // Update flag img
    setSelectedFlag(countryFlag)

    setSelectedCountry(value)
    handleCountry(countryName)

  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Container style={styles.infoContainer}>
                <TouchableOpacity
                  style={{paddingLeft: 16}}
                  onPress={() => showModal()}
                >
                  {selectedFlag ?
                    <Text style={{fontSize: 32}}>{selectedFlag}</Text>
                    :
                    <MaterialIcons name="cancel-presentation" size={32} color="#979797" />
                  }
                </TouchableOpacity>


                <TextInput
                  ref={textInput}
                  style={{borderWidth: 0, width: 232, paddingLeft: 16}}
                  placeholder={defaultCountry}
                  placeholderTextColor='#adb4bc'
                  returnKeyType='done'
                  autoCapitalize='none'
                  autoCorrect={false}
                  secureTextEntry={false}
                  value={selectedCountry}
                  onChangeText={(val) => {
                    onChangeCountry(val)
                  }}
                />

                <Modal
                  animationType="slide" // fade
                  transparent={false}
                  visible={modalVisible}>
                  <View style={{ flex: 1 }}>

                    <SearchBar
                      round={true}
                      lightTheme={true}
                      placeholder="Search..."
                      autoCapitalize='none'
                      autoCorrect={false}
                      onChangeText={onSearch}
                      value={searchText}
                    />

                    <View style={{ flex: 10, paddingTop: 40 }}>
                      <FlatList
                        data={filteredData && filteredData.length > 0 ? filteredData : countryData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={
                          ({ item }) =>
                            <TouchableWithoutFeedback
                              onPress={() => getCountry(item.name)}>
                              <View
                                style={
                                  [
                                    styles.countryStyle,
                                    {
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'space-between'
                                    }
                                  ]
                                }>
                                <Text style={{fontSize: 40}}>
                                  {item.flag}
                                </Text>
                                <Text style={{fontSize: 18}}>
                                  {item.name} ({item.dial_code})
                                </Text>
                              </View>
                            </TouchableWithoutFeedback>
                        }
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => hideModal()}
                      style={styles.closeButtonStyle}>
                      <Text style={styles.textStyle}>
                        Close
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Modal>

              </Container>
            </View>

          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#b44666',
    padding: 14,
    marginBottom: 10,
    borderRadius: 3,
  },
  textStyle: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  countryStyle: {
    flex: 1,
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
  }
})

export default ModalCountriesFlatList;
