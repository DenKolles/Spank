import {url, basicAuth} from '../resources/Credentials';
import React, {Component} from 'react';

import {View, Text,TouchableOpacity} from 'react-native';
import styles from '../resources/css/Style';
import CirclePattern from "../components/CirclePattern";
import { ScrollView} from "react-native";
import RenderHTML from "react-native-render-html";
import UUIDGenerator from 'react-native-uuid-generator';

//TODO вынести тескт лицензии в отдельный файл + попросить у Сему реальный текст

export class LicenseScreen extends Component {
  render = () => {
    const {navigate} = this.props.navigation;
    console.log("age", this.props.route.params.age);
    console.log("gender", this.props.route.params.genderValue);
    console.log("search", this.props.route.params.searchValue);
    const contentWidth = 300;
    const CONTENT = `
        <p style="font-family: 'OpenSans-Regular'; font-size:18px; color: #353535">
        <b> Privacy Policy </b>
        </br>
        S. Samyal built the SomeApp app as a Freemium app. This SERVICE is provided by S. Samyal at no cost and is intended for use as is.
        This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
        If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at SomeApp unless otherwise defined in this Privacy Policy.
        Information Collection and Use
        For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to name, image, location. The information that I request will be retained on your device and is not collected by me in any way.
        The app does use third party services that may collect information used to identify you.
        Link to privacy policy of third party service providers used by the app
        </br>
         • Google Play Services
         </br>
         • Google Analytics for Firebase
         </br>
         • Firebase Crashlytics
         </br>
         • Amplitude
         </br>
         • Segment
         </br>
         • Mixpanel
        </br>
        </br> 
        Log Data
        </br>
        I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
        </br>
        </br>
        Cookies
        </br>
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
        This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
        </br>
        </br>
        Service Providers
        </br>
        I may employ third-party companies and individuals due to the following reasons:
        </br>
         • To facilitate our Service;
         </br>
         • To provide the Service on our behalf;
         </br>
         • To perform Service-related services; or
         </br>
         • To assist us in analyzing how our Service is used.
         </br>
        I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
        </br>
        </br>
        Security
        </br>
        I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
        Links to Other Sites
        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </br>
        Children’s Privacy</p>`;

      let headers = new Headers();
      headers.append("Content-Type","application/json");
      headers.append("Authorization", "Basic " + basicAuth);
      const MAX_RETRY = 3;
      let UUID;
      UUIDGenerator.getRandomUUID().then((uuid) => {UUID = uuid;});

      const fetchRetry = (retries) =>
          fetch(url, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({
                  uuid: UUID,
                  phone: '',
                  gender: this.props.route.params.genderValue,
                  gender_search: this.props.route.params.searchValue,
                  birthday: '30.11.2010'
              })
          })
              .then(response => {
                  if(response.status !== 201){
                      if (retries > 0) {
                          return fetchRetry(retries - 1)
                      }
                      throw new Error(response.status)}
                  else{ this.props.navigation.reset({
                      index: 0,
                      routes: [{ name: 'random_search', params: {genderValue: this.props.route.params.genderValue, searchValue: this.props.route.params.searchValue} }],
                  });}
              })
              .catch(error => {
                  console.error(error.message);
                  navigate('unexpected_error');
              })
              .done()

      return (
      <View style={styles.container}>
        <View style={{...styles.headerText, marginTop: '10%'}}>
          <Text style={styles.headerText}>End user license agreement</Text>
        </View>

        <ScrollView style={styles.licenseHtml}>
            <RenderHTML contentWidth={contentWidth} source={{html: CONTENT}} />
        </ScrollView>

        <View style={{...styles.alignCenter, marginTop: '5%'}}>
          <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                  fetchRetry(MAX_RETRY)
                  }}>
            <Text style={{...styles.submitButtonText, ...styles.backGroundColorRed}}>ACCEPT</Text>
            <CirclePattern width="9.5" height="7"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}
