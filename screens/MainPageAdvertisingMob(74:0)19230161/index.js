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
      <View style={styles.View_99_654}>
        <View style={styles.View_99_392} />
        <View style={styles.View_99_393} />
        <View style={styles.View_99_394} />
      </View>
      <View style={styles.View_99_2}>
        <Text style={styles.Text_99_2}>Nikopolidis Papadopulus</Text>
      </View>
      <View style={styles.View_99_617}>
        <View style={styles.View_99_615} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e42/465e/f3d5bf8452020862928266a212170634"
          }}
          style={styles.ImageBackground_99_5}
        />
      </View>
      <View style={styles.View_99_618}>
        <View style={styles.View_99_616} />
        <View style={styles.View_99_11}>
          <Text style={styles.Text_99_11}>Bio</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0fa/5ceb/38a64e6a2009a4aeccb1d3bcbb74824d"
        }}
        style={styles.ImageBackground_99_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ad2/8e88/d1c7b1340160a394af032b22b8ce678a"
        }}
        style={styles.ImageBackground_99_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b849/3a3c/f80b4a6bf2516b7695044979470f29da"
        }}
        style={styles.ImageBackground_99_26}
      />
      <View style={styles.View_99_653}>
        <View style={styles.View_99_648}>
          <View style={styles.View_99_428}>
            <View style={styles.View_99_395}>
              <View style={styles.View_I99_395_76_150} />
              <View style={styles.View_I99_395_76_151}>
                <View style={styles.View_I99_395_76_152}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87ab/04a0/4cac7b42c11d5d947170ea465b768f14"
                    }}
                    style={styles.ImageBackground_I99_395_76_153}
                  />
                </View>
                <View style={styles.View_I99_395_76_163}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19c3/b404/5b273d8956aa7fc9e801aedaaaf425ff"
                    }}
                    style={styles.ImageBackground_I99_395_76_164}
                  />
                </View>
              </View>
              <View style={styles.View_I99_395_76_170}>
                <Text style={styles.Text_I99_395_76_170}>powered by</Text>
              </View>
              <View style={styles.View_I99_395_76_171}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc6c/054c/69ba084487ffb19f8e310de4021e933b"
                  }}
                  style={styles.ImageBackground_I99_395_76_172}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e73b/9e5e/3465c139731e76cc96ea1768798a24d7"
                  }}
                  style={styles.ImageBackground_I99_395_76_173}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436f/1d18/fd00fdf4f3b9f7139736f34be2ef8240"
                  }}
                  style={styles.ImageBackground_I99_395_76_174}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c35/85c0/74499f04bf89fc4eeb3521505a0dce61"
                  }}
                  style={styles.ImageBackground_I99_395_76_175}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0729/8586/845e815ee95cdba87953fdaa7f9557cc"
                  }}
                  style={styles.ImageBackground_I99_395_76_176}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b82c/a763/40c68f73ccb60738027daae25a895c4c"
                  }}
                  style={styles.ImageBackground_I99_395_76_177}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2252/37a5/a4b033566d1a778f49c9396e0f9900f2"
                  }}
                  style={styles.ImageBackground_I99_395_76_179}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_99_649}>
          <View style={styles.View_99_650} />
          <View style={styles.View_99_651}>
            <Text style={styles.Text_99_651}>x</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_99_654: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("163.9344262295082%"),
    minHeight: hp("163.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("196.72131147540983%")
  },
  View_99_392: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_99_393: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("116.80327868852459%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_99_394: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.77049180327867%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_99_2: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("2.185792349726776%")
  },
  Text_99_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_617: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("0%")
  },
  View_99_615: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_99_5: {
    width: wp("3.9471458435058593%"),
    minWidth: wp("3.9471458435058593%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3.9617486338797816%")
  },
  View_99_618: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("0%")
  },
  View_99_616: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_99_11: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("2.73224043715847%")
  },
  Text_99_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_99_24: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22.540983606557376%"),
    resizeMode: "cover"
  },
  ImageBackground_99_27: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("139.34426229508196%"),
    resizeMode: "cover"
  },
  ImageBackground_99_26: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("96.31147540983606%"),
    resizeMode: "cover"
  },
  View_99_653: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_648: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_428: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_395: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.12021857923497%"),
    minHeight: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I99_395_76_150: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("91.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I99_395_76_151: {
    flexGrow: 1,
    width: wp("60.06957194010417%"),
    height: hp("13.290753390619663%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("32.30467415898224%")
  },
  View_I99_395_76_152: {
    width: wp("54.60631510416667%"),
    height: hp("2.924150977629781%"),
    top: hp("10.366637850068308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6973958333333385%")
  },
  ImageBackground_I99_395_76_153: {
    width: wp("54.60631510416667%"),
    height: hp("2.924150977629781%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I99_395_76_163: {
    width: wp("60.06957194010417%"),
    height: hp("7.975058216866248%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I99_395_76_164: {
    width: wp("60.06957194010417%"),
    height: hp("7.975058216866248%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I99_395_76_170: {
    flexGrow: 1,
    width: wp("50.34722493489583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("18.785887337773225%")
  },
  Text_I99_395_76_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_I99_395_76_171: {
    flexGrow: 1,
    width: wp("60.06944173177084%"),
    height: hp("8.778435545540898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666664%"),
    top: hp("61.44906132599044%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I99_395_76_172: {
    width: wp("59.274723307291666%"),
    height: hp("8.3867573347248%"),
    top: hp("0.19564602544398468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39609375000000213%")
  },
  ImageBackground_I99_395_76_173: {
    width: wp("60.068965657552084%"),
    height: hp("8.777691366893997%"),
    top: hp("0.0006670508879764725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I99_395_76_174: {
    width: wp("59.274723307291666%"),
    height: hp("8.3867573347248%"),
    top: hp("0.19564602544398468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.39609375000000213%")
  },
  ImageBackground_I99_395_76_175: {
    width: wp("9.240582275390626%"),
    height: hp("5.5998578097650915%"),
    top: hp("1.364919526980863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.695052083333334%")
  },
  ImageBackground_I99_395_76_176: {
    width: wp("32.025004069010414%"),
    height: hp("8.777692409161011%"),
    top: hp("0.0004669356215742937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.044531250000006%")
  },
  ImageBackground_I99_395_76_177: {
    width: wp("35.49443359375%"),
    height: hp("3.818451250837149%"),
    top: hp("3.951275934938522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.889843749999997%")
  },
  ImageBackground_I99_395_76_179: {
    width: wp("32.655786132812494%"),
    height: hp("1.53366464083312%"),
    top: hp("1.4388287653688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.243229166666666%")
  },
  View_99_649: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_99_650: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_99_651: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.6830601092896175%")
  },
  Text_99_651: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 4851 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
