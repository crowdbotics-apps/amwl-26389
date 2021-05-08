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
      <View style={styles.View_1_787}>
        <Text style={styles.Text_1_787}>Nikopolidis Papadopulus</Text>
      </View>
      <View style={styles.View_1_779}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb5e/a6ec/fea45d870e430a8f7687d700e4b4dd45"
          }}
          style={styles.ImageBackground_1_780}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9a/36a8/7d426db585de99ac2b53d36477655bd0"
          }}
          style={styles.ImageBackground_1_781}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff58/8068/904168020e0c6223b6c69f9d2bdf9d2e"
          }}
          style={styles.ImageBackground_1_782}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5799/513c/c18cd4514be820162efa3d6755939166"
          }}
          style={styles.ImageBackground_1_783}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d02a/364f/25d246487e26754678f01152dde46346"
          }}
          style={styles.ImageBackground_1_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c8/bf2f/898cda16969ec0c32558611a4f6c404f"
          }}
          style={styles.ImageBackground_1_785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/4341/f10d67cdb77a52524fd730636392b4e9"
          }}
          style={styles.ImageBackground_1_786}
        />
      </View>
      <View style={styles.View_1_788}>
        <View style={styles.View_1_789} />
        <View style={styles.View_1_790} />
        <View style={styles.View_1_791} />
        <View style={styles.View_1_792} />
        <View style={styles.View_1_793} />
        <View style={styles.View_1_794} />
        <View style={styles.View_1_795} />
        <View style={styles.View_1_796} />
        <View style={styles.View_1_797} />
        <View style={styles.View_1_798} />
        <View style={styles.View_1_799} />
        <View style={styles.View_1_800} />
        <View style={styles.View_1_801} />
        <View style={styles.View_1_802} />
        <View style={styles.View_1_803} />
        <View style={styles.View_1_804} />
        <View style={styles.View_1_805} />
        <View style={styles.View_1_806} />
        <View style={styles.View_1_807} />
      </View>
      <View style={styles.View_1_905}>
        <View style={styles.View_1_877}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb5e/a6ec/fea45d870e430a8f7687d700e4b4dd45"
            }}
            style={styles.ImageBackground_1_878}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9a/36a8/7d426db585de99ac2b53d36477655bd0"
            }}
            style={styles.ImageBackground_1_879}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff58/8068/904168020e0c6223b6c69f9d2bdf9d2e"
            }}
            style={styles.ImageBackground_1_880}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5799/513c/c18cd4514be820162efa3d6755939166"
            }}
            style={styles.ImageBackground_1_881}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d02a/364f/25d246487e26754678f01152dde46346"
            }}
            style={styles.ImageBackground_1_882}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c8/bf2f/898cda16969ec0c32558611a4f6c404f"
            }}
            style={styles.ImageBackground_1_883}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/4341/f10d67cdb77a52524fd730636392b4e9"
            }}
            style={styles.ImageBackground_1_884}
          />
        </View>
        <View style={styles.View_1_885}>
          <View style={styles.View_1_886} />
          <View style={styles.View_1_887} />
          <View style={styles.View_1_888} />
          <View style={styles.View_1_889} />
          <View style={styles.View_1_890} />
          <View style={styles.View_1_891} />
          <View style={styles.View_1_892} />
          <View style={styles.View_1_893} />
          <View style={styles.View_1_894} />
          <View style={styles.View_1_895} />
          <View style={styles.View_1_896} />
          <View style={styles.View_1_897} />
          <View style={styles.View_1_898} />
          <View style={styles.View_1_899} />
          <View style={styles.View_1_900} />
          <View style={styles.View_1_901} />
          <View style={styles.View_1_902} />
          <View style={styles.View_1_903} />
          <View style={styles.View_1_904} />
        </View>
      </View>
      <View style={styles.View_1_864}>
        <View style={styles.View_1_865} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0645/a165/44eb95cbe2fcf7986dd32cd973dfc35b"
          }}
          style={styles.ImageBackground_1_866}
        />
      </View>
      <View style={styles.View_1_869}>
        <View style={styles.View_1_870} />
        <View style={styles.View_1_871}>
          <Text style={styles.Text_1_871}>Bio</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddfb/ee23/e0508ae642a5ce5042cf8aba2eea1545"
        }}
        style={styles.ImageBackground_1_872}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_787: {
    width: wp("17.430555555555554%"),
    minWidth: wp("17.430555555555554%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("5.8743169398907105%")
  },
  Text_1_787: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_779: {
    width: wp("190.69444444444446%"),
    minWidth: wp("190.69444444444446%"),
    height: hp("940.0273224043715%"),
    minHeight: hp("940.0273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49.09722222222222%"),
    top: hp("39.75409836065574%")
  },
  ImageBackground_1_780: {
    width: wp("108.19444444444444%"),
    minWidth: wp("108.19444444444444%"),
    height: hp("204.64480874316942%"),
    minHeight: hp("204.64480874316942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  ImageBackground_1_781: {
    width: wp("56.59722222222222%"),
    minWidth: wp("56.59722222222222%"),
    height: hp("106.9672131147541%"),
    minHeight: hp("106.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("833.0601092896176%")
  },
  ImageBackground_1_782: {
    width: wp("60.69444444444444%"),
    minWidth: wp("60.69444444444444%"),
    height: hp("114.75409836065573%"),
    minHeight: hp("114.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.04166666666666%"),
    top: hp("153.96174863387978%")
  },
  ImageBackground_1_783: {
    width: wp("121.73611111111111%"),
    minWidth: wp("121.73611111111111%"),
    height: hp("248.77052515582307%"),
    minHeight: hp("248.77052515582307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("188.11475409836066%")
  },
  ImageBackground_1_784: {
    width: wp("152.71431816948785%"),
    minWidth: wp("152.71431816948785%"),
    height: hp("305.05237683572403%"),
    minHeight: hp("305.05237683572403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.274793836805557%"),
    top: hp("496.44915471311475%")
  },
  ImageBackground_1_785: {
    width: wp("95.91380649142795%"),
    minWidth: wp("95.91380649142795%"),
    height: hp("184.00820539297303%"),
    minHeight: hp("184.00820539297303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("741.120218579235%")
  },
  ImageBackground_1_786: {
    width: wp("122.84722222222221%"),
    minWidth: wp("122.84722222222221%"),
    height: hp("232.37704918032787%"),
    minHeight: hp("232.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.84722222222223%"),
    top: hp("349.59016393442624%")
  },
  View_1_788: {
    width: wp("84.02777777777779%"),
    minWidth: wp("84.02777777777779%"),
    height: hp("923.0874316939892%"),
    minHeight: hp("923.0874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("23.633879781420767%")
  },
  View_1_789: {
    width: wp("27.98611111111111%"),
    minWidth: wp("27.98611111111111%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("867.896174863388%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_790: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("78.82513661202186%"),
    minHeight: hp("78.82513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("844.2622950819672%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_791: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("773.224043715847%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_792: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("741.6666666666666%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_793: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("733.7431693989071%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_794: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.04166666666666%"),
    top: hp("646.9945355191256%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_795: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("639.0710382513661%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_796: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.013888888888886%"),
    top: hp("528.6885245901639%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_797: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("528.6885245901639%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_798: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("449.72677595628414%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_799: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("426.0928961748634%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_800: {
    width: wp("24.02777777777778%"),
    minWidth: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("355.05464480874315%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_801: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("339.34426229508193%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_802: {
    width: wp("24.02777777777778%"),
    minWidth: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("299.8633879781421%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_803: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("228.82513661202185%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_804: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.027777777777786%"),
    top: hp("213.11475409836066%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_805: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110.51912568306011%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_806: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("47.404371584699454%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_807: {
    width: wp("36.041666666666664%"),
    minWidth: wp("36.041666666666664%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_905: {
    width: wp("190.69444444444446%"),
    minWidth: wp("190.69444444444446%"),
    height: hp("956.1475409836065%"),
    minHeight: hp("956.1475409836065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49.09722222222222%"),
    top: hp("986.2021857923498%")
  },
  View_1_877: {
    width: wp("190.69444444444446%"),
    minWidth: wp("190.69444444444446%"),
    height: hp("940.0273224043715%"),
    minHeight: hp("940.0273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.120218579234916%")
  },
  ImageBackground_1_878: {
    width: wp("108.19444444444444%"),
    minWidth: wp("108.19444444444444%"),
    height: hp("204.64480874316942%"),
    minHeight: hp("204.64480874316942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  ImageBackground_1_879: {
    width: wp("56.59722222222222%"),
    minWidth: wp("56.59722222222222%"),
    height: hp("106.9672131147541%"),
    minHeight: hp("106.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("833.0601092896177%")
  },
  ImageBackground_1_880: {
    width: wp("60.69444444444444%"),
    minWidth: wp("60.69444444444444%"),
    height: hp("114.75409836065573%"),
    minHeight: hp("114.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111.04166666666666%"),
    top: hp("153.96174863387978%")
  },
  ImageBackground_1_881: {
    width: wp("121.73611111111111%"),
    minWidth: wp("121.73611111111111%"),
    height: hp("248.77052515582307%"),
    minHeight: hp("248.77052515582307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("188.11474576022442%")
  },
  ImageBackground_1_882: {
    width: wp("152.71431816948785%"),
    minWidth: wp("152.71431816948785%"),
    height: hp("305.05237683572403%"),
    minHeight: hp("305.05237683572403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.274793836805557%"),
    top: hp("496.4491547131147%")
  },
  ImageBackground_1_883: {
    width: wp("95.91380649142795%"),
    minWidth: wp("95.91380649142795%"),
    height: hp("184.00820539297303%"),
    minHeight: hp("184.00820539297303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.58333333333333%"),
    top: hp("741.1202185792349%")
  },
  ImageBackground_1_884: {
    width: wp("122.84722222222221%"),
    minWidth: wp("122.84722222222221%"),
    height: hp("232.37704918032787%"),
    minHeight: hp("232.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.84722222222223%"),
    top: hp("349.5901639344261%")
  },
  View_1_885: {
    width: wp("84.02777777777779%"),
    minWidth: wp("84.02777777777779%"),
    height: hp("923.0874316939892%"),
    minHeight: hp("923.0874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.08333333333333%"),
    top: hp("0%")
  },
  View_1_886: {
    width: wp("27.98611111111111%"),
    minWidth: wp("27.98611111111111%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("867.8961748633876%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_887: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("78.82513661202186%"),
    minHeight: hp("78.82513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("844.2622950819671%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_888: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("773.2240437158471%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_889: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("741.6666666666663%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_890: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("733.7431693989072%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_891: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.04166666666666%"),
    top: hp("646.9945355191257%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_892: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("639.071038251366%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_893: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.013888888888886%"),
    top: hp("528.6885245901638%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_894: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("528.6885245901638%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_895: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("449.726775956284%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_896: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("426.0928961748632%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_897: {
    width: wp("24.02777777777778%"),
    minWidth: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("355.054644808743%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_898: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("339.34426229508176%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_899: {
    width: wp("24.02777777777778%"),
    minWidth: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("299.8633879781421%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_900: {
    width: wp("32.013888888888886%"),
    minWidth: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("228.82513661202165%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_901: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.027777777777786%"),
    top: hp("213.11475409836066%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_902: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110.51912568306011%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_903: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("47.40437158469945%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_904: {
    width: wp("36.041666666666664%"),
    minWidth: wp("36.041666666666664%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_1_864: {
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
  View_1_865: {
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
  ImageBackground_1_866: {
    width: wp("1.484790775511%"),
    height: hp("3.5519169979408143%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3642035590277715%")
  },
  View_1_869: {
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
  View_1_870: {
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
  View_1_871: {
    width: wp("2.5%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("3.2786885245901636%")
  },
  Text_1_871: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1_872: {
    width: wp("5.661191410488552%"),
    minWidth: wp("5.661191410488552%"),
    height: hp("7.377316521816566%"),
    minHeight: hp("7.377316521816566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.01300726996527%"),
    top: hp("6.284153005464481%")
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
