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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2578/494c/4972b9af2fd285fe6d4b4b1181022803"
        }}
        style={styles.ImageBackground_1_411}
      />
      <View style={styles.View_1_413}>
        <Text style={styles.Text_1_413}>
          I believe that art should spark imagination and transfer the viewer
          into the realm of infinite possibilities, that are yet not defined.
          Abstraction is perfect for conveying this message. It frees the viewer
          from reality. Atmospheric abstract paintings invite you to personal
          spiritual journey through the alchemy of colors, textures, and light.
          Being self-taught artist learning from experimenting, my favorite
          medium is acrylic on canvas. From time to time I love to experiment
          with new medium and techniques, including digital and
          three-dimensional art.
        </Text>
      </View>
      <View style={styles.View_1_423}>
        <Text style={styles.Text_1_423}>Sophia Vitko</Text>
      </View>
      <View style={styles.View_1_420}>
        <View style={styles.View_1_421} />
        <View style={styles.View_1_422}>
          <Text style={styles.Text_1_422}>x</Text>
        </View>
      </View>
      <View style={styles.View_162_4}>
        <Text style={styles.Text_162_4}>
          sofi.vitko@gmail.com +380979278290 Sophia Vitko 775 Westminster Avenue
          APT D5 Brooklyn, NY, 11230
        </Text>
      </View>
      <View style={styles.View_162_0}>
        <View style={styles.View_162_1} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20b9/3ef9/1feb39b6b1f913889f13a4510908b974"
          }}
          style={styles.ImageBackground_163_2}
        />
      </View>
      <View style={styles.View_163_19}>
        <View style={styles.View_99_628}>
          <View style={styles.View_99_626} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e900/a7f1/217c90f684393dff0495cec8c6fcea9a"
          }}
          style={styles.ImageBackground_163_8}
        />
      </View>
      <View style={styles.View_163_18}>
        <View style={styles.View_163_17}>
          <View style={styles.View_99_629}>
            <View style={styles.View_99_627} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e5e/92c8/f200fcfbcfa15aa72f7ee58f93727330"
          }}
          style={styles.ImageBackground_163_10}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1_411: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("83.42857142857143%"),
    minHeight: hp("83.42857142857143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("8.285714285714285%"),
    resizeMode: "cover"
  },
  View_1_413: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    minHeight: hp("66.71428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.94444444444444%"),
    top: hp("8.285714285714285%")
  },
  Text_1_413: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_423: {
    width: wp("18.055555555555554%"),
    minWidth: wp("18.055555555555554%"),
    minHeight: hp("15.714285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666667%"),
    top: hp("6.142857142857143%")
  },
  Text_1_423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_420: {
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
  View_1_421: {
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
  View_1_422: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("7.000000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("0%")
  },
  Text_1_422: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_4: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("24.857142857142858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777778%"),
    top: hp("71%")
  },
  Text_162_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_162_0: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.94444444444444%"),
    top: hp("83.28571428571429%")
  },
  View_162_1: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_163_2: {
    width: wp("1.8055555555555554%"),
    height: hp("4.4571429661342075%"),
    top: hp("1.857142857142847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%")
  },
  View_163_19: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.98611111111111%"),
    top: hp("83.28571428571429%")
  },
  View_99_628: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_626: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_163_8: {
    width: wp("2.5%"),
    height: hp("5.142857142857142%"),
    top: hp("1.5714285714285552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%")
  },
  View_163_18: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.06944444444444%"),
    top: hp("83.28571428571429%")
  },
  View_163_17: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_629: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_627: {
    width: wp("3.958333333333333%"),
    minWidth: wp("3.958333333333333%"),
    height: hp("8.428571428571429%"),
    minHeight: hp("8.428571428571429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_163_10: {
    width: wp("1.080725457933214%"),
    height: hp("4.285714285714286%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%")
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
