import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c04/a81d/c501f3d9da5a276c9f9ca55dc7d9e268"
        }}
        style={styles.ImageBackground_60_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3102/f20c/055962ab063126fb4f54d1a22546c355"
        }}
        style={styles.ImageBackground_60_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4745/1ef8/9d3e1dd837200661f8bb77212e464187"
        }}
        style={styles.ImageBackground_60_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e29/ce7d/05b1e781d8f85797c28d29d35ccaca0c"
        }}
        style={styles.ImageBackground_60_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560a/359c/1a05cbfa8f1253224237143ab3ebc29b"
        }}
        style={styles.ImageBackground_60_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69a5/033b/c53fc81687316eac573506e389fe3024"
        }}
        style={styles.ImageBackground_60_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adbe/eee6/6614f03410a97e8d3ef7fd993e1ce332"
        }}
        style={styles.ImageBackground_60_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e7/2232/dfb1204dd8c72c8eef74ca9319998226"
        }}
        style={styles.ImageBackground_60_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/682f/2df2/de5e0316748b5ee27dd78d9c402249be"
        }}
        style={styles.ImageBackground_60_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abba/3a8f/006c76317c57f21d8ad506998340a12d"
        }}
        style={styles.ImageBackground_60_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f455/3159/67279e6bae86525bd161cf5e99e8bdb2"
        }}
        style={styles.ImageBackground_60_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80aa/6070/0b2da4be274bf76f43ce6aeafb0f9109"
        }}
        style={styles.ImageBackground_60_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d55/dd48/991cf3c0f4247804819dfdf06854441d"
        }}
        style={styles.ImageBackground_60_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d55/dd48/991cf3c0f4247804819dfdf06854441d"
        }}
        style={styles.ImageBackground_60_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a974/cd57/75d8899fed1fd9da1cd7e76d87b55b3e"
        }}
        style={styles.ImageBackground_60_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/681a/806f/0fe0d487725356e2e1c9d5091cec7b00"
        }}
        style={styles.ImageBackground_60_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/853a/9798/2aa8fa21a7ff1ef7e4385f0e15f34365"
        }}
        style={styles.ImageBackground_60_18}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_60_1: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_60_3: {
    width: wp("3.0231303638882108%"),
    height: hp("2.486127144109766%"),
    top: hp("46.82965287813102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.48908148871528%")
  },
  ImageBackground_60_4: {
    width: wp("1.5543063481648765%"),
    height: hp("1.9658965182442196%"),
    top: hp("47.34954539980732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.362867567274307%")
  },
  ImageBackground_60_5: {
    width: wp("1.6228834788004558%"),
    height: hp("2.3718655683631384%"),
    top: hp("46.98168804190752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.50037299262153%")
  },
  ImageBackground_60_6: {
    width: wp("4.662847518920898%"),
    height: hp("2.4606928889691715%"),
    top: hp("46.855242955202314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.90665011935764%")
  },
  ImageBackground_60_7: {
    width: wp("3.1023022201326156%"),
    height: hp("2.65086620529263%"),
    top: hp("47.387930515414254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2808837890625%")
  },
  ImageBackground_60_8: {
    width: wp("5.720226632224189%"),
    height: hp("2.498651699294015%"),
    top: hp("46.86784983140655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.1065673828125%")
  },
  ImageBackground_60_9: {
    width: wp("3.023007843229506%"),
    height: hp("2.486127144109766%"),
    top: hp("46.82965287813102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.45515950520834%")
  },
  ImageBackground_60_10: {
    width: wp("2.079863018459744%"),
    height: hp("2.447977231417088%"),
    top: hp("46.88083303227361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.28401692708334%")
  },
  ImageBackground_60_11: {
    width: wp("2.0802074008517795%"),
    height: hp("2.447977231417088%"),
    top: hp("46.88083303227361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.0152587890625%")
  },
  ImageBackground_60_12: {
    width: wp("21.938314702775745%"),
    height: hp("8.574372219901553%"),
    top: hp("35.630607237475914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%")
  },
  ImageBackground_60_13: {
    width: wp("12.452565299140081%"),
    height: hp("8.574375159937981%"),
    top: hp("35.45279383429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.06000434027778%")
  },
  ImageBackground_60_14: {
    width: wp("8.77743297153049%"),
    height: hp("8.396917501166607%"),
    top: hp("35.630607237475914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.51255289713541%")
  },
  ImageBackground_60_15: {
    width: wp("8.799997965494793%"),
    height: hp("8.396917501166607%"),
    top: hp("35.630607237475914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.31798638237847%")
  },
  ImageBackground_60_16: {
    width: wp("6.445837020874023%"),
    height: hp("3.576877718945689%"),
    top: hp("35.630607237475914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.41562906901041%")
  },
  ImageBackground_60_17: {
    width: wp("43.86874834696452%"),
    height: hp("3.8574174649453576%"),
    top: hp("22.222912150770714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.48678927951389%")
  },
  ImageBackground_60_18: {
    width: wp("60.06979412502713%"),
    height: hp("9.633523283206888%"),
    top: hp("67.43775590077071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%")
  },
  View_2: { height: 519 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
