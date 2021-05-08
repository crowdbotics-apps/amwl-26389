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
      <View style={styles.View_1_207}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb5e/a6ec/fea45d870e430a8f7687d700e4b4dd45"
          }}
          style={styles.ImageBackground_1_208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9a/36a8/7d426db585de99ac2b53d36477655bd0"
          }}
          style={styles.ImageBackground_1_209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff58/8068/904168020e0c6223b6c69f9d2bdf9d2e"
          }}
          style={styles.ImageBackground_1_210}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5799/513c/c18cd4514be820162efa3d6755939166"
          }}
          style={styles.ImageBackground_1_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17c9/0228/9e22a4462bcec25666ae8560291969a5"
          }}
          style={styles.ImageBackground_1_212}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c8/bf2f/898cda16969ec0c32558611a4f6c404f"
          }}
          style={styles.ImageBackground_1_213}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/4341/f10d67cdb77a52524fd730636392b4e9"
          }}
          style={styles.ImageBackground_1_214}
        />
      </View>
      <View style={styles.View_1_215}>
        <Text style={styles.Text_1_215}>Nikopolidis Papadopulus</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e636/ba52/b4d954320a7910b5138471bbb88955ce"
        }}
        style={styles.ImageBackground_1_231}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059c/aed5/91a54fbe4e8664cb80d8dffe9de31166"
        }}
        style={styles.ImageBackground_1_232}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c748/193a/c998cd31689012ab765d683b265f88d7"
        }}
        style={styles.ImageBackground_1_233}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d156/6286/47164cef791739f781671770bc340950"
        }}
        style={styles.ImageBackground_1_234}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a176/ac82/ca1c92ebe71d84e84b00bf7e1edba674"
        }}
        style={styles.ImageBackground_1_235}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/259b/04e4/17f47ed8f8b45b56270627ca67ff5629"
        }}
        style={styles.ImageBackground_1_236}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999b/7672/caebb5d2abed23b130810c79099cd74e"
        }}
        style={styles.ImageBackground_1_237}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d74/035a/ef7cfd92de16bcb7a0549958b723b7ca"
        }}
        style={styles.ImageBackground_1_238}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e34c/835d/da4a38d890692a6ec243bcef3809cc88"
        }}
        style={styles.ImageBackground_1_239}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa14/6964/11c76ec8bde272a4e823041ab9d73dd3"
        }}
        style={styles.ImageBackground_1_240}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d14/ab58/059bdcf7363cfd39762dc7bc224f80e2"
        }}
        style={styles.ImageBackground_1_241}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7276/aab5/25d35008ab9bc0bc82671ea32af2bed5"
        }}
        style={styles.ImageBackground_1_242}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f4/06fb/77e232c54a44b94e17b967f2a1514735"
        }}
        style={styles.ImageBackground_1_243}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85cb/1722/f66e68c4548b67814144f1274a7145f6"
        }}
        style={styles.ImageBackground_1_244}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a69/ed8e/ed29def580f7af72f6b062f7c5635647"
        }}
        style={styles.ImageBackground_1_245}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/101a/d59a/86f2e787713b492f42f9dd3ca1a86c36"
        }}
        style={styles.ImageBackground_1_246}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e4/678a/548324e8fc4bcaa7327baa277f2024e3"
        }}
        style={styles.ImageBackground_1_247}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b30/067d/a832da5fda107ed7ef38fb228fc1bbb8"
        }}
        style={styles.ImageBackground_1_248}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f188/11d4/77dd0106127fab115960f820ff2a063d"
        }}
        style={styles.ImageBackground_1_249}
      />
      <View style={styles.View_1_282}>
        <View style={styles.View_1_283} />
        <View style={styles.View_1_284}>
          <View style={styles.View_1_285}>
            <Text style={styles.Text_1_285}>
              Untitled // • Untitled // • Untitled // • Untitled // • Untitled
              // • Untitled // • Untitled // • Untitled //
            </Text>
          </View>
          <View style={styles.View_1_286} />
        </View>
      </View>
      <View style={styles.View_1_287}>
        <View style={styles.View_1_288} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0645/a165/44eb95cbe2fcf7986dd32cd973dfc35b"
          }}
          style={styles.ImageBackground_1_289}
        />
      </View>
      <View style={styles.View_1_292}>
        <View style={styles.View_1_293} />
        <View style={styles.View_1_294}>
          <Text style={styles.Text_1_294}>Bio</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_207: {
    width: wp("190.69444444444446%"),
    minWidth: wp("190.69444444444446%"),
    height: hp("940.0273224043715%"),
    minHeight: hp("940.0273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49.09721798366971%"),
    top: hp("39.75409836065574%")
  },
  ImageBackground_1_208: {
    width: wp("108.19444444444444%"),
    minWidth: wp("108.19444444444444%"),
    height: hp("204.64480874316942%"),
    minHeight: hp("204.64480874316942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.99999788072374%"),
    top: hp("0%")
  },
  ImageBackground_1_209: {
    width: wp("56.59722222222222%"),
    minWidth: wp("56.59722222222222%"),
    height: hp("106.9672131147541%"),
    minHeight: hp("106.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.99999788072374%"),
    top: hp("833.0601092896176%")
  },
  ImageBackground_1_210: {
    width: wp("60.69444444444444%"),
    minWidth: wp("60.69444444444444%"),
    height: hp("114.75409836065573%"),
    minHeight: hp("114.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.04166242811415%"),
    top: hp("153.96174863387978%")
  },
  ImageBackground_1_211: {
    width: wp("121.73611111111111%"),
    minWidth: wp("121.73611111111111%"),
    height: hp("248.77052515582307%"),
    minHeight: hp("248.77052515582307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0000021192762602595394%"),
    top: hp("188.11473742208844%")
  },
  ImageBackground_1_212: {
    width: wp("152.71431816948785%"),
    minWidth: wp("152.71431816948785%"),
    height: hp("305.05237683572403%"),
    minHeight: hp("305.05237683572403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.274819268120659%"),
    top: hp("496.44915471311475%")
  },
  ImageBackground_1_213: {
    width: wp("95.91380649142795%"),
    minWidth: wp("95.91380649142795%"),
    height: hp("184.00820539297303%"),
    minHeight: hp("184.00820539297303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333334%"),
    top: hp("741.120218579235%")
  },
  ImageBackground_1_214: {
    width: wp("122.84722222222221%"),
    minWidth: wp("122.84722222222221%"),
    height: hp("232.37704918032787%"),
    minHeight: hp("232.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.84721798366971%"),
    top: hp("349.59016393442624%")
  },
  View_1_215: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.25%"),
    top: hp("5.8743169398907105%")
  },
  Text_1_215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_231: {
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
  ImageBackground_1_232: {
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
  ImageBackground_1_233: {
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
  ImageBackground_1_234: {
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
  ImageBackground_1_235: {
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
  ImageBackground_1_236: {
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
  ImageBackground_1_237: {
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
  ImageBackground_1_238: {
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
  ImageBackground_1_239: {
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
  ImageBackground_1_240: {
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
  ImageBackground_1_241: {
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
  ImageBackground_1_242: {
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
  ImageBackground_1_243: {
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
  ImageBackground_1_244: {
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
  ImageBackground_1_245: {
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
  ImageBackground_1_246: {
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
  ImageBackground_1_247: {
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
  ImageBackground_1_248: {
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
  ImageBackground_1_249: {
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
  View_1_282: {
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
  View_1_283: {
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
  View_1_284: {
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
  View_1_285: {
    width: wp("94.86111111111111%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_1_286: {
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
  View_1_287: {
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
  View_1_288: {
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
  ImageBackground_1_289: {
    width: wp("1.484790775511%"),
    height: hp("3.5519169979408143%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3642035590277715%")
  },
  View_1_292: {
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
  View_1_293: {
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
  View_1_294: {
    width: wp("2.5%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("3.2786885245901636%")
  },
  Text_1_294: {
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
