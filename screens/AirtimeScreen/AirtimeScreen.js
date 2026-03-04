import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Pressable } from 'react-native';
import HeaderNavigator from '../../template/HeaderNavigator';
import ToUpType from '../../template/ToUpType';
import { useNavigation } from '@react-navigation/native';

const image_path = {
    service : require("../../assets/Airtime Service assets/Service logo.png"),
    voucher : require("../../assets/Airtime Service assets/voucher logo.png"),
    advert : require("../../assets/Airtime Service assets/advert logo.png")
}

const AirtimeScreen = () => {

  const navigation = useNavigation();

  const Image_Text = ({image, text1,text2}) => {

        return (
            <View style = {{flexDirection: "row", alignItems: "flex-start", marginLeft: -15, marginTop: 10}}>
                <Image source={image} style ={{width: 63, height: 63}}/>
                <View style = {{justifyContent: "center", alignItems: "flex-start", marginTop: 10, gap: 5}}>
                    <Text style = {{fontSize: 14, color: "#ffffff", fontWeight: 800}}>{text1}</Text>
                    <Text style = {{fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: "800"}}>{text2}</Text>
                </View>
            </View>
        )
  }


  return (
    <View style={style.a_container}>
      <HeaderNavigator header_name= "Airtime" />
      <ScrollView 
        showsHorizontalScrollIndicator = {false}
        showsVerticalScrollIndicator ={false}
        style = {{flex: 1, width: "100%"}}
      >
        {/* After the header*/}
        <View style = {style.after_header_div}>

            {/**Advert IMage goes here */}
            <Image source={require("../../assets/Airtime Service assets/Mask group.png")} style={style.advert}></Image>
            

            {/** Phone Number Section*/}
            <View style = {style.contact}>
                <View style = {style.contact_1}>          
                    <View style ={style.phone_number}>
                        <Image source = {require("../../assets/Airtime Service assets/Airtel logo.png")} style ={{width: 58.87, height: 58.87}} />
                        <Image source = {require("../../assets/Airtime Service assets/Sort Down.png")} style ={{width: 12.18, height: 28.42}} />
                        <View style={{width: 3.04, height: 25.37, backgroundColor:"#1D1D1D", marginLeft: 5, marginRight: 7}}></View>
                        <TextInput
                            style ={ {fontSize: 21, color: "#ffffff" }}
                            placeholder = "09129485335"
                            placeholderTextColor= "rgba(255,255,255,0.6)"
                        ></TextInput>
                    </View>
                    <View style = {style.contact_list}>
                        <Image source = {require("../../assets/Airtime Service assets/Arrow down.png")} style ={{width: 25.37, height: 25.37}} />
                        <Image source = {require("../../assets/Airtime Service assets/user logo.png")} style ={{width: 71.05, height: 71.05}} />
                    </View>
                </View>
                <View style={{width: 360, height: 2.03, backgroundColor:"#232323", marginLeft: 10}}></View>
            </View>

        </View>

        {/** SECOND Section */}
        <View style = {style.second_sec}>

            {/**Top up */}
            <View style = {style.top_up}>
                <Text style ={style.text}>
                    Top up
                </Text>
                <View style= {{width: "100%", flexDirection:"row", flexWrap: "wrap", gap: 10, marginTop: 15}}>
                    <ToUpType Amount="50" cashback="1.75" />
                    <ToUpType Amount="100" cashback="3.5" />
                    <ToUpType Amount="200" cashback="7" />
                    <ToUpType Amount="500" cashback="10" />
                    <ToUpType Amount="1,000" cashback="20" />
                    <ToUpType Amount="2,000" cashback="40" />
                </View>
                <View style = {{flexDirection: "row",alignItems: "center", marginTop: "auto"}}>
                    <Text style={{fontSize: 20, color: "#ffffff", fontWeight: 700}}>₦</Text>
                    <TextInput
                        placeholder='50 - 500,000'
                        placeholderTextColor= "rgba(255,255,255,0.4)"
                        style= {{fontSize: 18, marginLeft: 10}}
                    ></TextInput>
                    <Pressable style = {{width: 64, height: 30, backgroundColor: "#115D48", borderRadius: 20, justifyContent: "center", alignItems: "center", marginLeft: 137}}>
                        <Text style = {{fontSize: 16, color: "rgba(0,0,0,0.6)"}}>Pay</Text>
                    </Pressable>
                </View>
                <View style={{width: 244, height: 2, backgroundColor:"#3A3A3A",marginBottom: 15}}></View>
            </View>

            {/**Service */}
            <View style = {style.service}>
                <Text style ={style.text}>Airtime Service</Text>
                <Image_Text image={image_path.service} text1= "USSD enquiry" text2= "Check phone balance and more" />
            </View>

            {/**More Events */}
            <View style = {style.more_event}>

                <Text style = {style.text}>More Events</Text>
                <Image_Text image={image_path.voucher} text1= "Super Voucher Package" text2= "Claim 15 Discounts with ₦99 on any Bill" />
                <Image_Text image={image_path.advert} text1= "Top UP with GENIEX Now!" text2= "Enjoy your fast airtime experience anywhere" />

            </View>

        </View>
      </ScrollView>

    </View>
  );
}

export default AirtimeScreen;

const style = StyleSheet.create({
    a_container: {
        flex: 1,
        backgroundColor: "#1B1B1B",
        alignItems: "flex-start",
        position: "relative",
    }, 
   after_header_div: {
        width: "100%",
        height: 273,
        backgroundColor: "#2C2C2B",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: "column",
        alignItems: "center"
   },
   advert: {
        width: 360,
        height: 83,
        borderRadius: 20,
        marginTop: 85,
        backgroundColor: "rgba(0,0,0,0)"
   }, 
   contact: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingRight: 5,
        paddingLeft: 5,
   },
   contact_1: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center", 
        justifyContent: "space-between" ,         

   }, 
   phone_number: {
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between" ,
        gap: 0      

   },
   contact_list: {
      
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between",       
        
   },
   second_sec: {
        flex: 1,
        width: "100%",
        backgroundColor: "#1B1B1B",
        alignItems: "center",
        padding: 10,
        gap: 10
   },
   top_up: {
        padding: 10,
        width: 360,
        height: 303,
        borderRadius: 20,
        backgroundColor: "#2C2C2C",
        paddingTop: 20
   },
   service: {
        width: 360,
        height: 122,
        borderRadius: 20,
        backgroundColor: "#2C2C2C",
        paddingTop: 20,
        paddingLeft: 15
   },
   more_event: {
        width: 360,
        height: 208,
        borderRadius: 20,
        backgroundColor: "#2C2C2C",
        paddingTop: 20,
        paddingLeft: 15
   }, 
   text : {
        color: "#fff",
        fontSize: 16,
   }

});