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
      <View style={styles.View_99_731}>
        <View style={styles.View_99_732}>
          <View style={styles.View_99_733}>
            <View style={styles.View_99_734}>
              <View style={styles.View_I99_734_76_150} />
              <View style={styles.View_I99_734_76_151}>
                <View style={styles.View_I99_734_76_152}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87ab/04a0/4cac7b42c11d5d947170ea465b768f14"
                    }}
                    style={styles.ImageBackground_I99_734_76_153}
                  />
                </View>
                <View style={styles.View_I99_734_76_163}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/b404/5b273d8956aa7fc9e801aedaaaf425ff"
                    }}
                    style={styles.ImageBackground_I99_734_76_164}
                  />
                </View>
              </View>
              <View style={styles.View_I99_734_76_170}>
                <Text style={styles.Text_I99_734_76_170}>powered by</Text>
              </View>
              <View style={styles.View_I99_734_76_171}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc6c/054c/69ba084487ffb19f8e310de4021e933b"
                  }}
                  style={styles.ImageBackground_I99_734_76_172}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e73b/9e5e/3465c139731e76cc96ea1768798a24d7"
                  }}
                  style={styles.ImageBackground_I99_734_76_173}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436f/1d18/fd00fdf4f3b9f7139736f34be2ef8240"
                  }}
                  style={styles.ImageBackground_I99_734_76_174}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c35/85c0/74499f04bf89fc4eeb3521505a0dce61"
                  }}
                  style={styles.ImageBackground_I99_734_76_175}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0729/8586/845e815ee95cdba87953fdaa7f9557cc"
                  }}
                  style={styles.ImageBackground_I99_734_76_176}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b82c/a763/40c68f73ccb60738027daae25a895c4c"
                  }}
                  style={styles.ImageBackground_I99_734_76_177}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2252/37a5/a4b033566d1a778f49c9396e0f9900f2"
                  }}
                  style={styles.ImageBackground_I99_734_76_179}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_99_735}>
          <View style={styles.View_99_736} />
          <View style={styles.View_99_737}>
            <Text style={styles.Text_99_737}>x</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_99_731: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_732: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_733: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_734: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I99_734_76_150: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I99_734_76_151: {
    flexGrow: 1,
    width: wp("60.06957194010417%"),
    height: hp("14.585954245777502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("35.45280582365067%")
  },
  View_I99_734_76_152: {
    width: wp("54.60631510416667%"),
    height: hp("3.2091132168290857%"),
    top: hp("11.376879919415295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6973958333333385%")
  },
  ImageBackground_I99_734_76_153: {
    width: wp("54.60631510416667%"),
    height: hp("3.2091132168290857%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I99_734_76_163: {
    width: wp("60.06957194010417%"),
    height: hp("8.75223780321753%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I99_734_76_164: {
    width: wp("60.06957194010417%"),
    height: hp("8.75223780321753%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I99_734_76_170: {
    flexGrow: 1,
    width: wp("50.34722493489583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("20.61659599887556%")
  },
  Text_I99_734_76_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_I99_734_76_171: {
    flexGrow: 1,
    width: wp("60.06944173177084%"),
    height: hp("9.633905276365724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("67.4373506606072%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I99_734_76_172: {
    width: wp("59.274723307291666%"),
    height: hp("9.20405752476545%"),
    top: hp("0.21471197994752345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39609375000000213%")
  },
  ImageBackground_I99_734_76_173: {
    width: wp("60.068965657552084%"),
    height: hp("9.63308857656133%"),
    top: hp("0.0007320558470809146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I99_734_76_174: {
    width: wp("59.274723307291666%"),
    height: hp("9.20405752476545%"),
    top: hp("0.21471197994752345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39609375000000213%")
  },
  ImageBackground_I99_734_76_175: {
    width: wp("9.240582275390626%"),
    height: hp("6.145571089577281%"),
    top: hp("1.4979326742878527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.695052083333334%")
  },
  ImageBackground_I99_734_76_176: {
    width: wp("32.025004069010414%"),
    height: hp("9.633089720398589%"),
    top: hp("0.0005124390929580613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.044531250000006%")
  },
  ImageBackground_I99_734_76_177: {
    width: wp("35.49443359375%"),
    height: hp("4.190564191323528%"),
    top: hp("4.3363328101574155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.889843749999997%")
  },
  ImageBackground_I99_734_76_179: {
    width: wp("32.655786132812494%"),
    height: hp("1.6831222145275018%"),
    top: hp("1.5790444621439406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.243229166666666%")
  },
  View_99_735: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.995502248875562%"),
    minHeight: hp("8.995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_736: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.995502248875562%"),
    minHeight: hp("8.995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_99_737: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("7.34632683658171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.7496251874062968%")
  },
  Text_99_737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 667 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
