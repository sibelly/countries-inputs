import React, {Component} from 'react'
import { 
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet, 
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput
} from 'react-native'
import {SearchBar} from 'react-native-elements';
// native base imports
import {
  Container,
  NativeBaseProvider
} from 'native-base'

import data from '../constants/countries'

import { MaterialIcons } from "@expo/vector-icons";

// Default render of country flag
const defaultFlag = data.filter(
  obj => obj.name === 'Chile'
  )[0].flag

const defaultDialCode = data.filter(
  obj => obj.name === 'Chile'
  )[0].dial_code

class CustomPhoneNumberInput extends Component {

  constructor(props) {
    super(props);
    this.phoneRef = React.createRef();
    this.dialCodeRef = React.createRef();
    this. state = {
      flag: defaultFlag,
      modalVisible: false,
      phoneNumber: '',
      dialCode: defaultDialCode,
      searchText: "",
      filteredData: [],
      data: data
    }
  }

  async onChangeDialCode(key, value) {
    let newValue = value;
    if (value != '' && !!value) {
      if (!value.includes('+')) {
        newValue = '+' + value
      }
    }

    const countryFlag = data.filter(
      obj => obj.dial_code === newValue
    )[0]?.flag

    // Update flag img
    this.setState({
      flag: countryFlag
    })

    // Update dialCode state
    this.setState({
      [key]: newValue
    })
    let fullNumber = this.state.dialCode + this.state.phoneNumber
    this.props.handlePhoneInput(fullNumber)
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
    let fullNumber = this.state.dialCode + value
    this.props.handlePhoneInput(fullNumber)
  }

  showModal() {
    this.setState({ modalVisible: true })
  }

  hideModal() {
    this.setState({ modalVisible: false })
    // Refocus on the Input field after selecting the country code
    this.phoneRef.getNativeRef().focus();
  }

  async getCountry(country) {
    const countryData = await data
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag
      // Set data from user choice of country
      this.setState({ dialCode: countryCode, flag: countryFlag })
      await this.hideModal()
    }
    catch (err) {
      console.log(err)
    }
  }

  search = (searchText) => {
    this.setState({searchText: searchText});

    let filteredData = this.state.data.filter(function (item) {
      let lowerCaseItem = item.name.toLocaleLowerCase()
      return lowerCaseItem.includes(searchText.toLocaleLowerCase());
    });

    this.setState({filteredData: filteredData});
  };

  render() {
    let { flag } = this.state
    const countryData = data
    return (
      <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <Container style={styles.infoContainer}>

                      {/* country flag */}
                      <TouchableOpacity
                        onPress={() => this.showModal()}
                      >
                        {flag ?
                          <Text style={{fontSize: 32}}>{flag}</Text>
                          :
                          <MaterialIcons name="cancel-presentation" size={32} color="#979797" />
                        }
                      </TouchableOpacity>

                      <TextInput
                        ref={input => {
                          this.dialCodeRef = input;
                        }}
                        style={{borderWidth: 0, width: 65}}
                        placeholder='+56'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'phone-pad'}
                        returnKeyType='done'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={false}
                        value={this.state.dialCode}
                        onChangeText={(val) => {
                            this.onChangeDialCode('dialCode', val)
                          }
                        }
                      />

                      <TextInput
                        ref={input => {
                          this.phoneRef = input;
                        }}
                        style={{borderWidth: 0, width: 150}}
                        placeholder='999999999'
                        placeholderTextColor='#adb4bc'
                        keyboardType={'phone-pad'}
                        returnKeyType='done'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={false}
                        value={this.state.phoneNumber}
                        onChangeText={(val) => {
                            this.onChangeText('phoneNumber', val)
                          }
                        }
                      />

                      {/* Modal for country code and flag */}
                      <Modal
                        animationType="slide" // fade
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <View style={{ flex: 1 }}>

                          <SearchBar
                            round={true}
                            lightTheme={true}
                            placeholder="Search..."
                            autoCapitalize="words"
                            autoCorrect={false}
                            onChangeText={this.search}
                            value={this.state.searchText}
                          />

                          <View style={{ flex: 10, paddingTop: 40 }}>
                            <FlatList
                              data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : countryData}
                              keyExtractor={(item, index) => index.toString()}
                              renderItem={
                                ({ item }) =>
                                  <TouchableWithoutFeedback
                                    onPress={() => this.getCountry(item.name)}>
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
                            onPress={() => this.hideModal()} 
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
    )
  }
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

export default CustomPhoneNumberInput;
