import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { 
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Nav from './Nav';

class Terms extends Component {

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
          {/* Terms and Conditions text below: */}
          <Text style={styles.title}>Terms and Conditions</Text>
          <View style={{height: 15}} />
          <Text>This page (together with the documents referred to on it) tells you the terms of use (these “Terms”) which apply to the Kuku service and platform (the “Service”) provided to users (“you”, “your”, “Users”) by way of our website, wwn Kuku.com, and digital app. Please read these Terms carefully before you start to use the Service. By using our Service, you indicate that you accept these Terms and that you agree to abide by them. If you do not agree to these Terms, please do not use the Service.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>General</Text>
          <View style={{height: 15}} />
          <Text>Kuku may update these Terms from time to time and the latest version will appear on Kuku’s website with the date that they were updated. By using the Service after any changes have been posted, you agree to the new Terms.</Text>
          <View style={{height: 15}} />
          <Text>Please also read our Privacy and Cookie Policy, which sets out how Kuku will collect, process and use your information. If you do not agree to any of these Terms or our Privacy and Cookie Policy, please do not use the Service.</Text>
          <View style={{height: 15}} />
          <Text>Although Kuku is working to ensure that the Service is compatible across various devices, Kuku cannot guarantee that the Service will work with all devices. If you have any questions or any problems checking your device compatibility or installing the Kuku app on your device, please contact us.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Your account</Text>
          <View style={{height: 15}} />
          <Text>To use certain functions on the Service, including buying Products (as defined below), you will need to set up an account with Kuku. You need to be 18 or over to create an account and must be resident in the United Kingdom. If you are over 13 but under 18 then you can register to use the Service but only with your parent or guardian’s permission and you must get the bill payer’s permission before buying any Products. Kuku reserves the right to refuse to permit minors to use the Service at its discretion.</Text>
          <Text>You may be asked to provide information about yourself such as your name, address and email address. Please make sure this information is complete and accurate. We will use this information in accordance with the Kuku Privacy and Cookie Policy. You may set up an account with Kuku using your log-in details from third-party services approved by us (e.g. Facebook) and you give us permission to access and use your information from that service as permitted by that service.</Text>
          <View style={{height: 15}} />
          <Text>In all cases, you are responsible for your account, including making sure that your details are correct and kept up-to-date and ensuring that your password is secure. You are also responsible for all activity that takes place on your account. You must not share your account with any other person.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Purchasing Products</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>The Kuku Service</Text>
          <View style={{height: 15}} />
          <Text>Kuku acts only as a venue and marketplace which compiles, curates and displays a range of products (“Products”) from third party retailers (each a “Seller”) for you to discover great Products and transact with Sellers. While Kuku helps facilitate transactions that are carried out on the Service, Kuku does not provide or sell the Products and is not party to any transaction you may make with a Seller. This means that any contractual obligations arising out of a transaction using the Service are the responsibility of you and the Seller, not Kuku. These Terms, alongside the information found on the applicable product pages, form the basis of the contract between the Seller and you.</Text>
          <View style={{height: 15}} />
          <Text>Kuku does not have any responsibility for, or liability related to, any Product listed on the Service (including your order of the same). You should direct any questions, complaints or claims related to any Product to the relevant Seller.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Availability, prices, payment and delivery</Text>
          <View style={{height: 15}} />
          <Text>Unless otherwise stated, all prices on the Service are inclusive of any VAT payable but exclude delivery charges. We use our reasonable efforts to ensure that the prices of Products displayed on the Service are correct. However, despite our reasonable efforts, it may be possible that some of the Products on the Service may be incorrectly priced. If an error in the price of the Products you have ordered is discovered, you will be contacted and given the option of reconfirming your order at the correct price or cancelling it.</Text>
          <View style={{height: 15}} />
          <Text>All Products offered on the Service are subject to availability or while stocks last. If you order a Product which is not in stock, no payment will be taken for that Product and we will notify you by email that the Product is not available. The availability and prices of Products may change from time to time. Any changes to prices will not affect any order that has been confir</Text>
          <View style={{height: 15}} />
          <Text>Depending on the device you are using to access the Service and/or the particular Product you are purchasing, the Service may re-direct you to the website of the Seller of that Product in order to complete the transaction. Where you are re-directed to a third party website and once you leave the Service, we have no control over or responsibility for any purchase you make and the terms and conditions of that website will apply.</Text>
          <View style={{height: 15}} />
          <Text>By purchasing Products from the Service, you authorise Kuku to take payment for these Products through our payment processor partners (as described below). Kuku is authorised by the Sellers to accept your payment for Products purchased via the Service. You may pay for the Products using PayPal, Stripe and any other payment method which we may add to the Service from time to time. Although we offer a checkout on our site, the use of the checkout is for your convenience only. We act only as an agent on behalf of Sellers and payment in full will only be taken when the Seller has confirmed your order. Payment is made to the retailer on your behalf. Your use of any payment services to purchase Products will be subject to the terms and conditions of the applicable payment processor.</Text>
          <View style={{height: 15}} />
          <Text>After you place an order to purchase Products through the Service, we will send you an email acknowledging that we have received your order. However, please note that this does not mean that your order has been accepted. Nothing that Kuku does or says will amount to any acceptance of your order. The Seller will also send you an email confirming that it has received your order but nothing that the Seller does or says will amount to any acceptance of your order until you receive an email from the Seller notifying you that it has despatched the Product(s).</Text>
          <View style={{height: 15}} />
          <Text>Delivery will be made to the address specified when you complete the order. Delivery of the Products will be made by the Seller or the Seller’s delivery partner and, unless specified otherwise, should be made within 30 days of the order being placed. The Seller is responsible for delivery of its Products, not Kuku. Delivery charges and estimated timescales are specified during the purchase process.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Your rights of return, refund and cancellation</Text>
          <View style={{height: 15}} />
          <Text>If you are a consumer resident in the European Union, then you may have the right to return purchased Products for a refund within 14 days of you receiving the Products. Kuku is not a party to your transaction with the Seller and so you should contact the Seller directly regarding any cancellation, return or refund in relation to a Product. The Product(s) must be returned directly to the Seller and the Seller is responsible for issuing all refunds in relation to cancelled contracts and returned Products. These cancellation rights do not affect your legal rights.</Text>
          <View style={{height: 15}} />
          <Text>Although Kuku does not process any returns, refunds or cancellations of orders, you do have certain statutory rights to cancel a contract within 14 days from when you receive a Product. If, during this period, you change your mind or want to return a Product, you should notify the Seller, including details of your order, and return the Product to them. The Seller is responsible for refunding you the price you paid for the Product together with any standard delivery costs you paid (excluding any supplementary delivery costs paid such as for quicker delivery or gift wrapping). Any refund will be less any reduction in value of the Product which has been caused by your handling of it in any way which would not be permitted in a shop. You may wish to visit your local Citizens Advice Bureau for more information about your statutory rights.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Accessing the Service</Text>
          <Text>Kuku will do its best to make sure that the Service is uninterrupted and error free, although we cannot guarantee this. Access to our Service is permitted on a temporary basis, and we reserve the right to withdraw or amend the Service without notice (see below). If we need to suspend or restrict access to the Service or particular content, we will do our best to minimise any disruption to you and the Service. We may change or remove Products available on the Service from time to time. We will not be liable if for any reason the Service is unavailable at any time or for any period.</Text>
          <View style={{height: 15}} />
          <Text>We have the right to disable any user name or password if, in our opinion, you have failed to comply with any of the provisions of these Terms.</Text>
          <View style={{height: 15}} />
          <Text>You are responsible for making all arrangements necessary for you to have access to the Service. When accessing the Service over your mobile network, you will be using your data allowance. Kuku is not responsible for any charges you may incur in using the Service. You are also responsible for ensuring that all persons who access our Service through your internet connection are aware of these Terms, and that they comply with them.</Text>
          <View style={{height: 15}} />
          <Text>The legal rights (including the intellectual property rights) in the Service are owned by Kuku. Any content on the Service and the compilation of this content is owned by us or licensed to us by third parties. All Products are owned, controlled or licensed by the Sellers.</Text>
          <View style={{height: 15}} />
          <Text>Where we provide links from the Service to other sites, this will be for information purposes only or to enable you to transact directly with a Seller. Kuku has no control over, or responsibility for, the content on those sites.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Acceptable use of the Service</Text>
          <View style={{height: 15}} />
          <Text>You may use our Service for your own personal use and in accordance with these Terms and for lawful purposes. You may not usn Kuku’s trade marks, logos or other intellectual property without our express prior written permission. You may not use the Service for any illegal purpose or in any way that: (i) causes damage or harm to the Service, Kuku, any Seller or any other User; (ii) breaches any applicable local, national or international law or regulation; (iii) is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect; (iv) transmits, or procures the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam); or (v) knowingly transmits any data, sends or uploads any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</Text>
          <View style={{height: 15}} />
          <Text>You must not access without authority, modify, interfere, damage or disrupt the Service; any equipment or network used in the provision of the Service; any software used in the provision of the Service; or any equipment or network or software owned or used by a third party. You are responsible for compliance with local law and regulation when accessing the Service.</Text>
          <View style={{height: 15}} />
          <Text>Kuku will take any action it thinks is necessary to protect the Service ann Kuku’s Users. This may include Kuku suspending, restricting or terminating your account and access to the Service. You understand that if you breach these Terms, then we may decide to remove your access to the Service.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Interactive services</Text>
          <View style={{height: 15}} />
          <Text>We may from time to time provide interactive services on the Service.</Text>
          <View style={{height: 15}} />
          <Text>Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated and what form of moderation is used (including whether it is human or technical).</Text>
          <View style={{height: 15}} />
          <Text>We will do our best to assess any possible risks for Users (and in particular, for children) from third parties when they use any interactive service provided on the Service, and we will decide in each case whether it is appropriate to use moderation of the relevant service (including what kind of moderation to use) in the light of those risks. However, we are under no obligation to oversee, monitor or moderate any interactive service we provide on the Service, and we expressly exclude our liability for any loss or damage arising from the use of any interactive service by a User in contravention of our content standards, whether the service is moderated or not.</Text>
          <View style={{height: 15}} />
          <Text>The use of any of our interactive services by a minor is subject to the consent of their parent or guardian. We advise parents who permit their children to use an interactive service that it is important that they communicate with their children about their safety online. Minors who are using any interactive service should be made aware of the potential risks to them.</Text>
          <View style={{height: 15}} />
          <Text>Where we do moderate an interactive service, we will normally provide you with a means of contacting the moderator, should a concern or difficulty arise.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Our legal obligations</Text>
          <View style={{height: 15}} />
          <Text>If Kuku does not comply with its obligations to you under these Terms or is negligent in providing the Service, Kuku is responsible for any loss or damage that you suffer which is a “foreseeable result” of such breach or negligence. Loss or damage is a foreseeable result if it is an obvious consequence of our failure to comply with these Terms.</Text>
          <View style={{height: 15}} />
          <Text>BECAUSn Kuku IS NEITHER THE BUYER NOR THE SELLER OF THE PRODUCTS, IF A DISPUTE ARISES CONCERNING A PRODUCT, BOTH YOU AND THE APPLICABLE SELLER RELEASn Kuku (INCLUDING ITS EMPLOYEES, AGENTS AND GROUP COMPANIES) FROM CLAIMS, DEMANDS AND DAMAGES OF EVERY KIND AND NATURE ARISING OUT OF OR IN ANY WAY CONNECTED WITH SUCH DISPUTES.</Text>
          <View style={{height: 15}} />
          <Text>As a consumer, you are entitled to various statutory warranties (including, for example, that any service is carried out with reasonable skill and care, and any product purchased is of satisfactory quality). Nothing in these Terms shall have the effect of excluding or limiting those implied statutory warranties which may not be excluded or limited under applicable law.</Text>
          <View style={{height: 15}} />
          <Text>Nothing in these Terms limits or excludes our liability for: (i) death or personal injury caused by our negligence; (ii) fraudulent misrepresentation; or (iii) any other liability that cannot be excluded by law.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>Other important terms</Text>
          <View style={{height: 15}} />
          <Text>We may terminate these Terms at any time if: (a) you breach these Terms; (b) you become or threaten to become insolvent or bankrupt; or (c) we decide to suspend or terminate the Service.</Text>
          <View style={{height: 15}} />
          <Text>These Terms do not affect your legal rights. For more information about your legal rights in relation to any Product purchased that is faulty or is not as described, you may wish to visit your local Citizens Advice Bureau or Trading Standards Office.</Text>
          <View style={{height: 15}} />
          <Text>You agree to compensate and reimburse Kuku fully for any claims or legal proceedings which are brought against Kuku as a result of your breach of these Terms or misus</Text>
          <View style={{height: 15}} />
          <Text>No other person has any rights to enforce any of these Terms.</Text>
          <View style={{height: 15}} />
          <Text>You may not transfer your rights or obligations under these Terms to anyone else without our written permission. We may transfer our rights and obligations to another party, but this will not affect your rights or our obligations to you under these Terms.</Text>
          <View style={{height: 15}} />
          <Text>Each of the paragraphs in these Terms operates separately. If any courts or relevant authority decide that any of them are unlawful or unenforceable, the remaining paragraphs will remain in full force and effect.</Text>
          <View style={{height: 15}} />
          <Text>The User’s use of the Service, including any dispute or claim arising out of or in connection with it, will be governed by English law. Kuku and each User both agree that the courts of England and Wales shall have the non-exclusive jurisdiction.</Text>
          <View style={{height: 15}} />
          <Text style={styles.title}>How to contact Kuku</Text>
          <View style={{height: 15}} />
          <Text>If you have any feedback, questions or complaints or any requests for technical support, then please contact us. If your query concerns a Product, then please contact the relevant Seller first.</Text>
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
    )
  }
};

const styles = {
  title: {
    fontWeight: (Platform.OS === 'ios') ? '500' : '400',
    fontSize: 20,
  },
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
};

export default Terms;