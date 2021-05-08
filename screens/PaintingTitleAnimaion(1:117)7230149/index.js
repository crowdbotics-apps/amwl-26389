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
      <View style={styles.View_1_126}>
        <Text style={styles.Text_1_126}>Nikopolidis Papadopulus</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e636/ba52/b4d954320a7910b5138471bbb88955ce"
        }}
        style={styles.ImageBackground_1_142}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059c/aed5/91a54fbe4e8664cb80d8dffe9de31166"
        }}
        style={styles.ImageBackground_1_143}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/830c/43e2/08621fce36ae3992a9974a4a4c16dc85"
        }}
        style={styles.ImageBackground_1_144}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d6/958f/c0dbe0e96f0d07938b78c57417f52cbe"
        }}
        style={styles.ImageBackground_1_145}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/504e/e576/559ef6c3304db1f3d4295db3cd82d00d"
        }}
        style={styles.ImageBackground_1_146}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8c5/8911/68a449868655cb6916f43404309a1e23"
        }}
        style={styles.ImageBackground_1_147}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/654c/ce24/384818388e57c1588ee140d5b1069f9e"
        }}
        style={styles.ImageBackground_1_148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f32/ba0b/5061bb93e63a2491b8f55801905c6b96"
        }}
        style={styles.ImageBackground_1_149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/babf/2fb4/5a2db92cae6bd98d29566700465eabff"
        }}
        style={styles.ImageBackground_1_150}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c32/4a5a/7cca3f0a9444ed093c5acab734e723f0"
        }}
        style={styles.ImageBackground_1_151}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cb3/2633/29fc05d7f8248f57687f22f376ba30e4"
        }}
        style={styles.ImageBackground_1_152}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a91/4200/98ffddfcdacaaf1806e7689d8cba2dd6"
        }}
        style={styles.ImageBackground_1_153}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8448/eb88/943e8c1100148e8507d2abed9f801ac0"
        }}
        style={styles.ImageBackground_1_154}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9170/87f2/b9c807eea04e6a068d98d69650171269"
        }}
        style={styles.ImageBackground_1_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a1/7d90/03edc1aa25f27ee806b7a024b0c8328f"
        }}
        style={styles.ImageBackground_1_156}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635e/fc96/096ba6c9b250b54e88a44a548de81583"
        }}
        style={styles.ImageBackground_1_157}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eded/c54a/7139acca05b550b79efe7c568966d969"
        }}
        style={styles.ImageBackground_1_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e34/d675/079ce40c3c83174c0aa69bb9582e4a90"
        }}
        style={styles.ImageBackground_1_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3956/68e7/839a79b83ac0b892e06d6dbbeda85c64"
        }}
        style={styles.ImageBackground_1_160}
      />
      <View style={styles.View_1_193}>
        <View style={styles.View_1_194} />
        <View style={styles.View_1_195}>
          <View style={styles.View_1_196}>
            <Text style={styles.Text_1_196}>
              Untitled // • Untitled // • Untitled // • Untitled // • Untitled
              // • Untitled // • Untitled // • Untitled //
            </Text>
          </View>
          <View style={styles.View_1_197} />
        </View>
      </View>
      <View style={styles.View_1_198}>
        <View style={styles.View_1_199} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0645/a165/44eb95cbe2fcf7986dd32cd973dfc35b"
          }}
          style={styles.ImageBackground_1_200}
        />
      </View>
      <View style={styles.View_1_203}>
        <View style={styles.View_1_204} />
        <View style={styles.View_1_205}>
          <Text style={styles.Text_1_205}>Bio</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_126: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.25%"),
    top: hp("5.8743169398907105%")
  },
  Text_1_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_142: {
    width: wp("27.98611111111111%"),
    minWidth: wp("27.98611111111111%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("891.5300546448087%")
  },
  ImageBackground_1_143: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("78.82513661202186%"),
    minHeight: hp("78.82513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.986111111111114%"),
    top: hp("867.896174863388%")
  },
  ImageBackground_1_144: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("796.8579234972677%")
  },
  ImageBackground_1_145: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97222222222222%"),
    top: hp("765.3005464480874%")
  },
  ImageBackground_1_146: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("757.3770491803278%")
  },
  ImageBackground_1_147: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("670.6284153005464%")
  },
  ImageBackground_1_148: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("662.7049180327868%")
  },
  ImageBackground_1_149: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("552.3224043715846%")
  },
  ImageBackground_1_150: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("552.3224043715846%")
  },
  ImageBackground_1_151: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("473.3606557377049%")
  },
  ImageBackground_1_152: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.986111111111114%"),
    top: hp("449.7267759562842%")
  },
  ImageBackground_1_153: {
    width: wp("24.02777777777778%"),
    minWidth: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("378.6885245901639%")
  },
  ImageBackground_1_154: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("362.9781420765027%")
  },
  ImageBackground_1_155: {
    width: wp("24.02777777777778%"),
    minWidth: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.98611111111111%"),
    top: hp("323.4972677595629%")
  },
  ImageBackground_1_156: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("252.45901639344262%")
  },
  ImageBackground_1_157: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("236.74863387978144%")
  },
  ImageBackground_1_158: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("134.15300546448088%")
  },
  ImageBackground_1_159: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("71.03825136612022%")
  },
  ImageBackground_1_160: {
    width: wp("36.041666666666664%"),
    minWidth: wp("36.041666666666664%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("23.633879781420767%")
  },
  View_1_193: {
    width: wp("95.83333333333334%"),
    minWidth: wp("95.83333333333334%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.27777777777778%"),
    top: hp("86.74863387978142%")
  },
  View_1_194: {
    width: wp("21.458333333333332%"),
    minWidth: wp("21.458333333333332%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_195: {
    width: wp("94.86111111111111%"),
    minWidth: wp("94.86111111111111%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222214%"),
    top: hp("1.2295081967213122%")
  },
  View_1_196: {
    width: wp("94.86111111111111%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_1_197: {
    width: wp("94.86111111111111%"),
    minWidth: wp("94.86111111111111%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_198: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.09722222222223%"),
    top: hp("5.8743169398907105%")
  },
  View_1_199: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_200: {
    width: wp("1.484790775511%"),
    height: hp("3.5519169979408143%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3642035590277715%")
  },
  View_1_203: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.18055555555556%"),
    top: hp("3.825136612021858%")
  },
  View_1_204: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_205: {
    width: wp("2.5%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("3.2786885245901636%")
  },
  Text_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_2: { height: 10973 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
