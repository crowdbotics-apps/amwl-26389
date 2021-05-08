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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb5e/a6ec/fea45d870e430a8f7687d700e4b4dd45"
        }}
        style={styles.ImageBackground_76_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9a/36a8/7d426db585de99ac2b53d36477655bd0"
        }}
        style={styles.ImageBackground_76_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff58/8068/904168020e0c6223b6c69f9d2bdf9d2e"
        }}
        style={styles.ImageBackground_76_103}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5799/513c/c18cd4514be820162efa3d6755939166"
        }}
        style={styles.ImageBackground_76_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6a7/a8ab/cca54c57bcda15ffa0f8a4fa7f931978"
        }}
        style={styles.ImageBackground_76_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c8/bf2f/898cda16969ec0c32558611a4f6c404f"
        }}
        style={styles.ImageBackground_76_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d061/4341/f10d67cdb77a52524fd730636392b4e9"
        }}
        style={styles.ImageBackground_76_107}
      />
      <View style={styles.View_76_108}>
        <Text style={styles.Text_76_108}>Sophia Vitko</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ec/ab06/c25dfac1a6ecb0742854bcfc7edd3fa5"
        }}
        style={styles.ImageBackground_76_110}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c6/7928/7582ecc862f15c849b64356b1170b254"
        }}
        style={styles.ImageBackground_76_111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/270f/8b96/566d5679f40c515a3132455e6ed5a900"
        }}
        style={styles.ImageBackground_76_112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5954/0a04/b51424d38ae7c06b447c549f3ccab5fb"
        }}
        style={styles.ImageBackground_76_113}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b14f/7890/8bccdca39854252e7b926a118e6e40ce"
        }}
        style={styles.ImageBackground_76_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e0/90b2/6a6d6390b7c4052648d1df0de3413c29"
        }}
        style={styles.ImageBackground_76_115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aadc/1559/ab66a0c9ac2974544990878b34dddc0f"
        }}
        style={styles.ImageBackground_76_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c8/1454/75acc3345b75ebaf73b0db1f7ead784e"
        }}
        style={styles.ImageBackground_76_117}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7f/6d88/85ac0e26f1fdcd03f09a7728ff1cdb86"
        }}
        style={styles.ImageBackground_76_118}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2341/9207/034ef54acc37c2268c9f2e2fc5b80b8a"
        }}
        style={styles.ImageBackground_76_119}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f35/7ea4/efd3b0dfdf05ef3d2a4319383d2be53e"
        }}
        style={styles.ImageBackground_76_120}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7618/01fd/e807363cdaeda9e95373aee78c9afcc4"
        }}
        style={styles.ImageBackground_76_121}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b683/4e27/f8a94df9029ed82a149071c53cac200b"
        }}
        style={styles.ImageBackground_76_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63e1/9563/be350ea89ea2646d7350967e7b94724b"
        }}
        style={styles.ImageBackground_76_123}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d667/cebe/a81a91cfee313db93083fe040982350a"
        }}
        style={styles.ImageBackground_76_124}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9920/b8e1/02cf137cb429cfa490398cc1d81f9fe1"
        }}
        style={styles.ImageBackground_76_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/602a/144b/158926761b5cec0e55357a26029f33ba"
        }}
        style={styles.ImageBackground_76_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a94a/b66d/b83a989f7e700b59125a1212dd187c08"
        }}
        style={styles.ImageBackground_76_127}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb05/089c/e3dd5f97532eba215d82b89dae2a34bd"
        }}
        style={styles.ImageBackground_76_128}
      />
      <View style={styles.View_76_129}>
        <View style={styles.View_76_130} />
        <View style={styles.View_76_131} />
        <View style={styles.View_76_132} />
        <View style={styles.View_76_133} />
        <View style={styles.View_76_134} />
        <View style={styles.View_76_135} />
        <View style={styles.View_76_136} />
        <View style={styles.View_76_137} />
        <View style={styles.View_76_138} />
        <View style={styles.View_76_139} />
        <View style={styles.View_76_140} />
        <View style={styles.View_76_141} />
        <View style={styles.View_76_142} />
        <View style={styles.View_76_143} />
        <View style={styles.View_76_144} />
        <View style={styles.View_76_145} />
        <View style={styles.View_76_146} />
        <View style={styles.View_76_147} />
        <View style={styles.View_76_148} />
      </View>
      <View style={styles.View_76_181}>
        <View style={styles.View_76_182}>
          <Text style={styles.Text_76_182}>Flow // • Flow </Text>
        </View>
        <View style={styles.View_76_183}>
          <Text style={styles.Text_76_183}>Sun will shine // • Sun </Text>
        </View>
        <View style={styles.View_76_184}>
          <Text style={styles.Text_76_184}>
            Fiery // • Fiery // • Fiery // • Fie
          </Text>
        </View>
      </View>
      <View style={styles.View_76_198}>
        <View style={styles.View_76_150} />
        <View style={styles.View_76_151}>
          <View style={styles.View_76_152}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e6/a252/d2746803cf51a71763b08cf4ceb39119"
              }}
              style={styles.ImageBackground_76_153}
            />
          </View>
          <View style={styles.View_76_163}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959d/c1fd/994e439555a4944188ec3fdb0296ffc4"
              }}
              style={styles.ImageBackground_76_164}
            />
          </View>
        </View>
        <View style={styles.View_76_170}>
          <Text style={styles.Text_76_170}>powered by</Text>
        </View>
        <View style={styles.View_76_171}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a69/2411/c7f5d7efc46af3cc41186e69ff0dab78"
            }}
            style={styles.ImageBackground_76_172}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f53/3c82/bfdbbea6b1118e9d34dfd627f1b428bc"
            }}
            style={styles.ImageBackground_76_173}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a17/b54c/43f9eceacf1a6ce1cbfb288419d00c4c"
            }}
            style={styles.ImageBackground_76_174}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1902/3f9d/739d35b90fe38ea402fd2082407991b9"
            }}
            style={styles.ImageBackground_76_175}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e85f/d2d9/6e67bdd905fd567a222976f8e9b162c7"
            }}
            style={styles.ImageBackground_76_176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4129/6cb2/6367a4cd6ed07b6541d76063764062e3"
            }}
            style={styles.ImageBackground_76_177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/5c9c/0864ef14aa599c7240d8c502ed75b04b"
            }}
            style={styles.ImageBackground_76_179}
          />
        </View>
      </View>
      <View style={styles.View_76_185}>
        <View style={styles.View_76_186} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0645/a165/44eb95cbe2fcf7986dd32cd973dfc35b"
          }}
          style={styles.ImageBackground_76_187}
        />
      </View>
      <View style={styles.View_76_209}>
        <View style={styles.View_76_190}>
          <View style={styles.View_76_191} />
          <View style={styles.View_76_192}>
            <Text style={styles.Text_76_192}>Bio</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddfb/ee23/e0508ae642a5ce5042cf8aba2eea1545"
          }}
          style={styles.ImageBackground_76_208}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_76_101: {
    width: wp("108.19444444444444%"),
    minWidth: wp("108.19444444444444%"),
    height: hp("204.64480874316942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.097222222222221%"),
    top: hp("39.75409836065574%")
  },
  ImageBackground_76_102: {
    width: wp("56.59722222222222%"),
    minWidth: wp("56.59722222222222%"),
    height: hp("106.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.097222222222221%"),
    top: hp("872.8142076502733%")
  },
  ImageBackground_76_103: {
    width: wp("60.69444444444444%"),
    minWidth: wp("60.69444444444444%"),
    height: hp("114.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.94444444444444%"),
    top: hp("193.71584699453553%")
  },
  ImageBackground_76_104: {
    width: wp("121.73611111111111%"),
    minWidth: wp("121.73611111111111%"),
    height: hp("248.77052515582307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49.09722222222222%"),
    top: hp("227.8688524590164%")
  },
  ImageBackground_76_105: {
    width: wp("152.71431816948785%"),
    height: hp("305.05237683572403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-33.82239447699653%"),
    top: hp("536.2032530737705%")
  },
  ImageBackground_76_106: {
    width: wp("95.91380649142795%"),
    minWidth: wp("95.91380649142795%"),
    height: hp("184.00820539297303%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.48611111111111%"),
    top: hp("780.8743169398907%")
  },
  ImageBackground_76_107: {
    width: wp("122.84722222222221%"),
    minWidth: wp("122.84722222222221%"),
    height: hp("232.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.75%"),
    top: hp("389.344262295082%")
  },
  View_76_108: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("5.8743169398907105%")
  },
  Text_76_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_76_110: {
    width: wp("27.98611111111111%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("891.5300546448087%")
  },
  ImageBackground_76_111: {
    width: wp("40%"),
    height: hp("78.82513661202186%"),
    minHeight: hp("78.82513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.986111111111114%"),
    top: hp("867.896174863388%")
  },
  ImageBackground_76_112: {
    width: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("796.8579234972677%")
  },
  ImageBackground_76_113: {
    width: wp("28.055555555555557%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97222222222222%"),
    top: hp("765.3005464480874%")
  },
  ImageBackground_76_114: {
    width: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("757.3770491803278%")
  },
  ImageBackground_76_115: {
    width: wp("23.958333333333336%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("670.6284153005464%")
  },
  ImageBackground_76_116: {
    width: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("662.7049180327868%")
  },
  ImageBackground_76_117: {
    width: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("552.3224043715846%")
  },
  ImageBackground_76_118: {
    width: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("552.3224043715846%")
  },
  ImageBackground_76_119: {
    width: wp("23.958333333333336%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("473.3606557377049%")
  },
  ImageBackground_76_120: {
    width: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.986111111111114%"),
    top: hp("449.7267759562842%")
  },
  ImageBackground_76_121: {
    width: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("378.6885245901639%")
  },
  ImageBackground_76_122: {
    width: wp("20%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("362.9781420765027%")
  },
  ImageBackground_76_123: {
    width: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.98611111111111%"),
    top: hp("323.4972677595629%")
  },
  ImageBackground_76_124: {
    width: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("252.45901639344262%")
  },
  ImageBackground_76_125: {
    width: wp("40%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("236.74863387978144%")
  },
  ImageBackground_76_126: {
    width: wp("60%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("134.15300546448088%")
  },
  ImageBackground_76_127: {
    width: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("71.03825136612022%")
  },
  ImageBackground_76_128: {
    width: wp("36.041666666666664%"),
    height: hp("63.114754098360656%"),
    top: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%")
  },
  View_76_129: {
    width: wp("84.02777777777779%"),
    minWidth: wp("84.02777777777779%"),
    height: hp("867.896174863388%"),
    minHeight: hp("867.896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("86.74863387978142%")
  },
  View_76_130: {
    width: wp("15.76388888888889%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18055555555556%"),
    top: hp("23.770491803278688%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_131: {
    width: wp("24.930555555555557%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_132: {
    width: wp("32.083333333333336%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.027777777777779%"),
    top: hp("110.5191256830601%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_133: {
    width: wp("19.23611111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.375%"),
    top: hp("197.26775956284155%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_134: {
    width: wp("25.694444444444443%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("228.82513661202182%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_135: {
    width: wp("24.02777777777778%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("297.8142076502732%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_136: {
    width: wp("16.875%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%"),
    top: hp("315.57377049180326%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_137: {
    width: wp("24.02777777777778%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("350.1366120218579%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_138: {
    width: wp("39.58333333333333%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.20833333333333%"),
    top: hp("420.7650273224043%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_139: {
    width: wp("23.958333333333336%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.027777777777779%"),
    top: hp("428.9617486338798%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_140: {
    width: wp("32.013888888888886%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("524.4535519125683%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_141: {
    width: wp("32.013888888888886%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.013888888888886%"),
    top: hp("522.9508196721312%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_142: {
    width: wp("23.958333333333336%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.04166666666666%"),
    top: hp("631.0109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_143: {
    width: wp("32.916666666666664%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.541666666666668%"),
    top: hp("639.0710382513661%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_144: {
    width: wp("15%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("749.5901639344263%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_145: {
    width: wp("19.23611111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.402777777777779%"),
    top: hp("852.1857923497266%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_146: {
    width: wp("37.98611111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.04166666666667%"),
    top: hp("859.9726775956284%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_147: {
    width: wp("28.055555555555557%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("740.983606557377%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_148: {
    width: wp("15.138888888888888%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.45833333333333%"),
    top: hp("710.1092896174863%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_181: {
    width: wp("65.625%"),
    minWidth: wp("65.625%"),
    height: hp("115.02732240437159%"),
    minHeight: hp("115.02732240437159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.26388888888889%"),
    top: hp("87.97814207650273%")
  },
  View_76_182: {
    width: wp("13.541666666666666%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.08333333333333%"),
    top: hp("23.63387978142076%")
  },
  Text_76_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_76_183: {
    width: wp("22.708333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.527777777777775%"),
    top: hp("0%")
  },
  Text_76_183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_76_184: {
    width: wp("29.930555555555554%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110.38251366120218%")
  },
  Text_76_184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_76_198: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("70.90163934426229%"),
    minHeight: hp("70.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_76_150: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("70.90163934426229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_76_151: {
    flexGrow: 1,
    width: wp("12.013914320203993%"),
    height: hp("10.341682850988835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("25.136612021857925%")
  },
  View_76_152: {
    width: wp("10.921263164944119%"),
    height: hp("2.2753163113620114%"),
    top: hp("8.066379567964482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5394829644097285%")
  },
  ImageBackground_76_153: {
    width: wp("10.921263164944119%"),
    height: hp("2.2753163113620114%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_163: {
    width: wp("12.013914320203993%"),
    height: hp("6.205482170230052%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_164: {
    width: wp("12.013914320203993%"),
    height: hp("6.205482170230052%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_76_170: {
    flexGrow: 1,
    width: wp("10.069444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("14.617486338797814%")
  },
  Text_76_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_76_171: {
    flexGrow: 1,
    width: wp("12.01388888888889%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("47.81420765027323%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_76_172: {
    width: wp("11.854945288764105%"),
    height: hp("6.525831795781037%"),
    top: hp("0.15222101263660903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07924397786459281%")
  },
  ImageBackground_76_173: {
    width: wp("12.013793521457249%"),
    height: hp("6.83002211357075%"),
    top: hp("0.0005336407103726515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_76_174: {
    width: wp("11.854945288764105%"),
    height: hp("6.525831795781037%"),
    top: hp("0.15222101263660903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07924397786459281%")
  },
  ImageBackground_76_175: {
    width: wp("1.8481164508395727%"),
    height: hp("4.35731319781861%"),
    top: hp("1.0620784238387913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1390177408854214%")
  },
  ImageBackground_76_176: {
    width: wp("6.405001216464573%"),
    height: hp("6.830022634704257%"),
    top: hp("0.00033352544398468353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.608927408854171%")
  },
  ImageBackground_76_177: {
    width: wp("7.09888776143392%"),
    height: hp("2.9711809314665247%"),
    top: hp("3.0745709528688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.777974446614593%")
  },
  ImageBackground_76_179: {
    width: wp("6.531156963772244%"),
    height: hp("1.1933619858788662%"),
    top: hp("1.1195782103825067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8486395941840357%")
  },
  View_76_185: {
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
  View_76_186: {
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
  ImageBackground_76_187: {
    width: wp("1.484790775511%"),
    minWidth: wp("1.484790775511%"),
    height: hp("3.5519169979408143%"),
    minHeight: hp("3.5519169979408143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3642035590277715%"),
    top: hp("2.1857923497267757%")
  },
  View_76_209: {
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
  View_76_190: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_76_191: {
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
  View_76_192: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("3.2786885245901636%")
  },
  Text_76_192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_76_208: {
    width: wp("5.661191410488552%"),
    minWidth: wp("5.661191410488552%"),
    height: hp("7.377316521816566%"),
    minHeight: hp("7.377316521816566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8324517144097143%"),
    top: hp("2.459016393442623%")
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
