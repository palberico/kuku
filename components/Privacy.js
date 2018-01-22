import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'
import { NativeRouter, Switch, Route } from 'react-router-native';
import Nav from './Nav'

class Privacy extends Component {

  return = () => {
    this.props.history.push('/shop')
      }

  openSettings = () => {
    this.props.history.push('/settings')
      }

  render() {
    return (
      <Container>
        <Nav />
          <Content style={styles.container}>
            <View style={{height: 25}} />

{/* Privacy Policy text below: */}

<Text style={styles.title}>Privacy Policy </Text>
<View style={{height: 15}} />
<Text>KUKU, LLC (“Kuku”, “we”, “us”, “our”) is committed to protecting and respecting your privacy. This policy (together with our Terms and Conditions and any other documents referred to in it) explains how we will process any personal data we collect from you, or that you provide to us. By visiting and using our website, digital app or platform (the “Service”), you are accepting and consenting to this policy and agree to abide by it. If you do not agree to this policy, please do not use the Service. We may, from time to time, make changes to this policy and these will be posted on this page and, where appropriate, e-mailed to you. Please check back frequently to see any updates or changes to this policy.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Information We May Collect</Text>
<View style={{height: 15}} />
<Text>We may collect and process the following data about you:</Text>
<View style={{height: 15}} />
<Text>Information that you provide when you use the Service. This may include any information you give us by filling in forms on the Service, including when you register to use our Service, download our app, place an order through the Service, post material or request further services or information. The information you give us may include your name, address, e-mail address, phone number, financial information and personal description. All credit card information is entered into the payment system of our payment providers and Kuku does not see or keep these details;</Text>
<View style={{height: 15}} />
<Text>Information that third parties provide to us about you. For example, when you connect your account via a social network such as Facebook, we may collect personal information from the social network in accordance with your privacy settings on that social network;</Text>
<View style={{height: 15}} />
<Text>If you contact us, we may keep a record of that correspondence and your contact details;</Text>
<View style={{height: 15}} />
<Text>Information that you upload to, or choose to share through, our Service including profile information, your interests, likes and dislikes or any other personal information in data that you upload</Text>
<View style={{height: 15}} />
<Text>Information that you provide us by completing surveys on our Service or as carried out by our approved third parties; and</Text>
<View style={{height: 15}} />
<Text>Technical information which we may automatically collect, including your IP address, operating system, browser type and details of your visits to, and use of, our Service including, but not limited to, the pages and products you view or search for on the Service, page interaction information, traffic data, location data, weblogs and other communication data.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Uses Made Of The Information</Text>
<View style={{height: 15}} />
<Text>We use information held about you in the following ways:</Text>
<Text>To ensure that content on our Service is presented in the most effective manner for you and for your mobile handset or computer;</Text>
<View style={{height: 15}} />
<Text>To provide you or permit selected third parties to provide you with information, products or services that you request from us or which we feel may interest you, where you have consented to be contacted for such purposes;</Text>
<View style={{height: 15}} />
<Text>To carry out our obligations arising from any contracts entered into between you and us</Text>
<View style={{height: 15}} />
<Text>To allow you to participate in the features of our Service, when you choose to do so;</Text>
<View style={{height: 15}} />
<Text>To allow you to carry out transactions with our retail and payment partners through our Service and third party websites</Text>
<View style={{height: 15}} />
<Text>To notify you about changes to our Service;</Text>
<View style={{height: 15}} />
<Text>To administer and improve our Service; and</Text>
<View style={{height: 15}} />
<Text>To measure or understand the effectiveness of advertising we serve you and to deliver relevant advertising to you.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Disclosure Of Your Information</Text>
<View style={{height: 15}} />
<Text>We may disclose your personal information to third parties:</Text>
<View style={{height: 15}} />
<Text>If we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets;</Text>
<View style={{height: 15}} />
<Text>If we or substantially all of our assets are acquired by a third party, in which case personal data held by it about our customers or users will be one of the transferred assets;</Text>
<View style={{height: 15}} />
<Text>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our Terms and Conditions and other agreements; or to protect our rights, property, or safety, our users, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.</Text>
<View style={{height: 15}} />
<Text>We do not disclose information about identifiable individuals to our advertisers, retail partners or third parties, but we may provide them with aggregate information about our users (for example, we may inform them that 500 women aged under 30 have clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target (for example, women following the trend “Monochrome”). We may make use of the personal data we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Cookies</Text>
<View style={{height: 15}} />
<Text>The Service uses cookies to distinguish users from one another and to improve your overall experience. When you use the Service, certain information may be stored locally on your device using ‘cookies’. A cookie is a small text file that is stored on your browser or your device’s local storage. Cookies store limited information about the user of the device, such as the device model, manufacturer, screen resolution, device capabilities, service provider and country and city location data. This helps us to identify how users use our Service so that we can continue to develop and improve it and so that we can provide you with content which is more relevant to your interests. We may also use this information for reporting and analytics purposes.</Text>
<View style={{height: 15}} />
<Text>You have the right to choose whether or not to accept or refuse cookies and you can exercise this choice by not accepting our Terms and Conditions and this privacy policy, however, you should note that by doing this, you will not be able to use our Service. By using our Service, you accept the use of cookies in accordance with this privacy policy.</Text>
<View style={{height: 15}} />
<Text>Please note that our advertisers may also use cookies, over which we have no control.</Text>
<View style={{height: 15}} />
<Text>For more information about what cookies are and how they can be controlled, please visit the third party educational resource www.allaboutcookies.org.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Where We Store Your Personal Data</Text>
<View style={{height: 15}} />
<Text>The data that we collect from you is stored on information technology systems located in the EEA which are operated by us. Some data processing in relation to web and email services is carried out on our behalf by a third party which may operate outside the EEA. By submitting your personal data, you agree to this transfer, storing or processing.</Text>
<View style={{height: 15}} />
<Text>All information you provide to us is stored on our secure servers. Where we have given you (or where you have chosen) a password which enables you to access certain parts of our Service, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.</Text>
<View style={{height: 15}} />
<Text>Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Service; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.</Text>
<View style={{height: 15}} />
<Text>Certain parts of our Service may include social networking features. Please ensure that when you use these features, you do not submit any personal data that you do not want to be seen, collected or used by other users.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Your Rights</Text>
<View style={{height: 15}} />
<Text>You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise the right at any time by contacting us.</Text>
<View style={{height: 15}} />
<Text>Our Service may, from time to time, contain links to and from the websites of our retail partners, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>Access to Information</Text>
<View style={{height: 15}} />
<Text>The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee of £10 to meet our costs in providing you with details of the information we hold about you.</Text>
<View style={{height: 15}} />
<Text style={styles.title}>How to Contact Kuku</Text>
<View style={{height: 15}} />
<Text>If you have any questions, comments, feedback or complaints regarding this privacy policy or any requests for technical support, then please feel free to contact us.</Text>
<View style={{height: 15}} />
<Text>Kuku, LLC</Text>
<Text>2254 E. Wilson Ave.</Text>
<Text>Salt Lake City, Utah 84108</Text>
<Text>Email: support@kukukart.com</Text>
</Content>

    <Footer>
        <FooterTab style={styles.footer}>
          <Button vertical onPress={this.return} >
            <Icon name='ios-pricetags-outline' />
            <Text>Shop</Text>
          </Button>
          <Button vertical onPress={this.openSettings}>
            <Icon name='ios-settings-outline' />
            <Text>Settings</Text>
          </Button>
        </FooterTab>
      </Footer>

</Container>
    );
  }
}

const styles = {
title: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 20,
  },
container: {
    marginRight: 15,
    marginLeft: 15,
  },
}

export default Privacy;