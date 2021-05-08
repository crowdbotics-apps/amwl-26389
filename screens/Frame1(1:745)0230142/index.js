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
      <View style={styles.View_1_746}>
        <View style={styles.View_1_747} />
        <View style={styles.View_1_748}>
          <View style={styles.View_1_749}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e6/a252/d2746803cf51a71763b08cf4ceb39119"
              }}
              style={styles.ImageBackground_1_750}
            />
          </View>
          <View style={styles.View_1_760}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959d/c1fd/994e439555a4944188ec3fdb0296ffc4"
              }}
              style={styles.ImageBackground_1_761}
            />
          </View>
        </View>
        <View style={styles.View_1_767}>
          <Text style={styles.Text_1_767}>powered by</Text>
        </View>
        <View style={styles.View_1_768}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a69/2411/c7f5d7efc46af3cc41186e69ff0dab78"
            }}
            style={styles.ImageBackground_1_769}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f53/3c82/bfdbbea6b1118e9d34dfd627f1b428bc"
            }}
            style={styles.ImageBackground_1_770}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a17/b54c/43f9eceacf1a6ce1cbfb288419d00c4c"
            }}
            style={styles.ImageBackground_1_771}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1902/3f9d/739d35b90fe38ea402fd2082407991b9"
            }}
            style={styles.ImageBackground_1_772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e85f/d2d9/6e67bdd905fd567a222976f8e9b162c7"
            }}
            style={styles.ImageBackground_1_773}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4498/5722/92b6925000c49127dae67004bcc9fd4b"
            }}
            style={styles.ImageBackground_1_774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/5c9c/0864ef14aa599c7240d8c502ed75b04b"
            }}
            style={styles.ImageBackground_1_776}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_746: {
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
  View_1_747: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_748: {
    width: wp("60.069571601019966%"),
    height: hp("14.585957315845526%"),
    top: hp("35.45279383429673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%")
  },
  View_1_749: {
    width: wp("54.606315824720596%"),
    height: hp("3.2091166472389063%"),
    top: hp("11.376859043834294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6974148220486143%")
  },
  ImageBackground_1_750: {
    width: wp("54.606315824720596%"),
    height: hp("3.2091166472389063%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_760: {
    width: wp("60.069571601019966%"),
    height: hp("8.752240748763773%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_761: {
    width: wp("60.069571601019966%"),
    height: hp("8.752240748763773%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_767: {
    width: wp("50.34722222222222%"),
    minWidth: wp("50.34722222222222%"),
    minHeight: hp("5.202312138728324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("20.616570327552985%")
  },
  Text_1_767: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_1_768: {
    width: wp("60.06944444444444%"),
    minWidth: wp("60.06944444444444%"),
    height: hp("9.633911368015415%"),
    minHeight: hp("9.633911368015415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("67.4373795761079%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_769: {
    width: wp("59.274726443820526%"),
    height: hp("9.204063342026434%"),
    top: hp("0.21469322013487613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3962198893229214%")
  },
  ImageBackground_1_770: {
    width: wp("60.06896760728624%"),
    height: hp("9.633094772897474%"),
    top: hp("0.0007526493256193589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_771: {
    width: wp("59.274726443820526%"),
    height: hp("9.204063342026434%"),
    top: hp("0.21469322013487613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3962198893229214%")
  },
  ImageBackground_1_772: {
    width: wp("9.240582254197863%"),
    height: hp("6.14557468362856%"),
    top: hp("1.4979603203275502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.695088704427086%")
  },
  ImageBackground_1_773: {
    width: wp("32.02500608232286%"),
    height: hp("9.63309550790658%"),
    top: hp("0.0004704058285085466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.044637044270836%")
  },
  ImageBackground_1_774: {
    width: wp("35.4944388071696%"),
    height: hp("4.190567325305388%"),
    top: hp("4.336389089595372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.889872233072914%")
  },
  ImageBackground_1_776: {
    width: wp("32.65578481886122%"),
    height: hp("1.683123263320482%"),
    top: hp("1.579058285163768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.243197970920143%")
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
