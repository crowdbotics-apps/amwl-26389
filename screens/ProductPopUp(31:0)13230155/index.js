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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c57/9d82/55f817df93ae2f11f93ea9e31383988c"
        }}
        style={styles.ImageBackground_31_1}
      />
      <View style={styles.View_31_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e86/e32c/20dc7eca16681d2726b838f392d850e7"
          }}
          style={styles.ImageBackground_31_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0d4/7824/9e305b0de2c69254070c0a0a01f43d5b"
          }}
          style={styles.ImageBackground_31_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f31/4706/57f7a163c50cd968b42b2c5ceb8cddf1"
          }}
          style={styles.ImageBackground_31_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3825/da0a/e8f6aa21e630bc8750d2d54b71ca58da"
          }}
          style={styles.ImageBackground_31_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3825/da0a/e8f6aa21e630bc8750d2d54b71ca58da"
          }}
          style={styles.ImageBackground_31_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de66/41f6/e4944b35b41885103fd8dcd615fb16c7"
          }}
          style={styles.ImageBackground_31_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d456/d57c/ff1337f5d943153432a9c699419427d3"
          }}
          style={styles.ImageBackground_31_9}
        />
      </View>
      <View style={styles.View_31_13}>
        <View style={styles.View_31_14} />
        <View style={styles.View_31_15}>
          <Text style={styles.Text_31_15}>&gt;</Text>
        </View>
      </View>
      <View style={styles.View_31_16}>
        <Text style={styles.Text_31_16}>
          I believe that art should spark imagination and transfer the viewer
          into the realm of infinite possibilities that are yet not defined.
          Abstraction is perfect for conveying this message. It frees the viewer
          from reality. My atmospheric abstract paintings invite you to personal
          spiritual journey through the alchemy of colors, textures, and light.
          Oil on canvas Dimentions (100x70) $1300
        </Text>
      </View>
      <View style={styles.View_31_17}>
        <View style={styles.View_31_18} />
        <View style={styles.View_31_19}>
          <Text style={styles.Text_31_19}>&lt;</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bf/8cfb/89c5ed080742241705b20b90a1e48b1c"
        }}
        style={styles.ImageBackground_31_20}
      />
      <View style={styles.View_31_23}>
        <Text style={styles.Text_31_23}>Diferrent Place All and Together</Text>
      </View>
      <View style={styles.View_31_10}>
        <View style={styles.View_31_11} />
        <View style={styles.View_31_12}>
          <Text style={styles.Text_31_12}>x</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_31_1: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("83.42857142857143%"),
    minHeight: hp("83.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("8.285714285714285%")
  },
  View_31_2: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("31.571428571428573%"),
    minHeight: hp("31.571428571428573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13888888888889%"),
    top: hp("8.285714285714285%")
  },
  ImageBackground_31_3: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_31_4: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.571428571428571%")
  },
  ImageBackground_31_5: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.28571428571429%")
  },
  ImageBackground_31_6: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.142857142857146%")
  },
  ImageBackground_31_7: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.85714285714286%")
  },
  ImageBackground_31_8: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.42857142857143%")
  },
  ImageBackground_31_9: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    height: hp("4.142857142857142%"),
    minHeight: hp("4.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.714285714285715%")
  },
  View_31_13: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.88888888888889%"),
    top: hp("0%")
  },
  View_31_14: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_15: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("7.000000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9861111111111143%"),
    top: hp("46.57142857142857%")
  },
  Text_31_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_16: {
    width: wp("15.833333333333332%"),
    minWidth: wp("15.833333333333332%"),
    minHeight: hp("68.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.04166666666666%"),
    top: hp("7.285714285714286%")
  },
  Text_31_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_17: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("91.71428571428571%"),
    minHeight: hp("91.71428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.285714285714285%")
  },
  View_31_18: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("91.71428571428571%"),
    minHeight: hp("91.71428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_19: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("7.000000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333334%"),
    top: hp("38.285714285714285%")
  },
  Text_31_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_31_20: {
    width: wp("0.03484173781341977%"),
    minWidth: wp("0.03484173781341977%"),
    height: hp("83.42854527064732%"),
    minHeight: hp("83.42854527064732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.02777777777777%"),
    top: hp("8.285714285714285%")
  },
  View_31_23: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    minHeight: hp("22.857142857142858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.51388888888889%"),
    top: hp("7.142857142857142%")
  },
  Text_31_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 2.5,
    textTransform: "none"
  },
  View_31_10: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.714285714285715%"),
    minHeight: hp("8.714285714285715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.97222222222223%"),
    top: hp("-0.4285714285714286%")
  },
  View_31_11: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.285714285714285%"),
    minHeight: hp("8.285714285714285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4285714285714286%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_12: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("7.000000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("0%")
  },
  Text_31_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 700 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
