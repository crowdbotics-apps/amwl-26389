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
      <View style={styles.View_249_285}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96de/b36e/65b76244e9c75cc03ddee9efffde0194"
          }}
          style={styles.ImageBackground_249_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f1/40bd/f38bfbbe77b562969be96a9403d094a0"
          }}
          style={styles.ImageBackground_249_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28f1/40bd/f38bfbbe77b562969be96a9403d094a0"
          }}
          style={styles.ImageBackground_249_224}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/136c/762f/41db422840524a4ffd78b024f983518f"
          }}
          style={styles.ImageBackground_249_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f54a/9849/56d6d94e51fa3dc66dad960164cf00f7"
          }}
          style={styles.ImageBackground_249_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebac/ebf7/9ade2022af68e489bb9827365fbf5f27"
          }}
          style={styles.ImageBackground_249_220}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0af/93ee/e4b6db4763949a833413fad5939e466a"
          }}
          style={styles.ImageBackground_249_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55fb/037b/6b3d6dc563a6ff1190ef3f7de7fda93a"
          }}
          style={styles.ImageBackground_249_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad5/d2f8/7e992591ffde8fd35a921ea9df3c177a"
          }}
          style={styles.ImageBackground_249_221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/433f/3001/aa0ee841ba7b701f366947218dedac1c"
          }}
          style={styles.ImageBackground_249_223}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcf8/329c/2184d4c5cedf35a1f4e8ce6f77d3a8fb"
          }}
          style={styles.ImageBackground_249_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c69a/9133/26f0c977bf3c0dd9a6c4cc59f8dcec41"
          }}
          style={styles.ImageBackground_249_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7b/73cf/f0a8f6ee6b53435365fc5f149bab3fb1"
          }}
          style={styles.ImageBackground_249_222}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0d4/65a0/1cdd3e7260c124a077c0ffbcb1f3f035"
        }}
        style={styles.ImageBackground_249_225}
      />
      <View style={styles.View_249_134}>
        <Text style={styles.Text_249_134}>Sophia Vitko</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ec/ab06/c25dfac1a6ecb0742854bcfc7edd3fa5"
        }}
        style={styles.ImageBackground_249_135}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69c6/7928/7582ecc862f15c849b64356b1170b254"
        }}
        style={styles.ImageBackground_249_136}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/270f/8b96/566d5679f40c515a3132455e6ed5a900"
        }}
        style={styles.ImageBackground_249_137}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5954/0a04/b51424d38ae7c06b447c549f3ccab5fb"
        }}
        style={styles.ImageBackground_249_138}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b14f/7890/8bccdca39854252e7b926a118e6e40ce"
        }}
        style={styles.ImageBackground_249_139}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e0/90b2/6a6d6390b7c4052648d1df0de3413c29"
        }}
        style={styles.ImageBackground_249_140}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aadc/1559/ab66a0c9ac2974544990878b34dddc0f"
        }}
        style={styles.ImageBackground_249_141}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c8/1454/75acc3345b75ebaf73b0db1f7ead784e"
        }}
        style={styles.ImageBackground_249_142}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7f/6d88/85ac0e26f1fdcd03f09a7728ff1cdb86"
        }}
        style={styles.ImageBackground_249_143}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2341/9207/034ef54acc37c2268c9f2e2fc5b80b8a"
        }}
        style={styles.ImageBackground_249_144}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f35/7ea4/efd3b0dfdf05ef3d2a4319383d2be53e"
        }}
        style={styles.ImageBackground_249_145}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7618/01fd/e807363cdaeda9e95373aee78c9afcc4"
        }}
        style={styles.ImageBackground_249_146}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b683/4e27/f8a94df9029ed82a149071c53cac200b"
        }}
        style={styles.ImageBackground_249_147}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63e1/9563/be350ea89ea2646d7350967e7b94724b"
        }}
        style={styles.ImageBackground_249_148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d667/cebe/a81a91cfee313db93083fe040982350a"
        }}
        style={styles.ImageBackground_249_149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9920/b8e1/02cf137cb429cfa490398cc1d81f9fe1"
        }}
        style={styles.ImageBackground_249_150}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/602a/144b/158926761b5cec0e55357a26029f33ba"
        }}
        style={styles.ImageBackground_249_151}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a94a/b66d/b83a989f7e700b59125a1212dd187c08"
        }}
        style={styles.ImageBackground_249_152}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb05/089c/e3dd5f97532eba215d82b89dae2a34bd"
        }}
        style={styles.ImageBackground_249_153}
      />
      <View style={styles.View_249_154}>
        <View style={styles.View_249_155} />
        <View style={styles.View_249_156} />
        <View style={styles.View_249_157} />
        <View style={styles.View_249_158} />
        <View style={styles.View_249_159} />
        <View style={styles.View_249_160} />
        <View style={styles.View_249_161} />
        <View style={styles.View_249_162} />
        <View style={styles.View_249_163} />
        <View style={styles.View_249_164} />
        <View style={styles.View_249_165} />
        <View style={styles.View_249_166} />
        <View style={styles.View_249_167} />
        <View style={styles.View_249_168} />
        <View style={styles.View_249_169} />
        <View style={styles.View_249_170} />
        <View style={styles.View_249_171} />
        <View style={styles.View_249_172} />
        <View style={styles.View_249_173} />
      </View>
      <View style={styles.View_249_174}>
        <View style={styles.View_249_175}>
          <Text style={styles.Text_249_175}>Flow // • Flow </Text>
        </View>
        <View style={styles.View_249_176}>
          <Text style={styles.Text_249_176}>Sun will shine // • Sun </Text>
        </View>
        <View style={styles.View_249_177}>
          <Text style={styles.Text_249_177}>
            Fiery // • Fiery // • Fiery // • Fie
          </Text>
        </View>
      </View>
      <View style={styles.View_249_179}>
        <View style={styles.View_249_180} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0645/a165/44eb95cbe2fcf7986dd32cd973dfc35b"
          }}
          style={styles.ImageBackground_249_181}
        />
      </View>
      <View style={styles.View_249_184}>
        <View style={styles.View_249_185}>
          <View style={styles.View_249_186} />
          <View style={styles.View_249_187}>
            <Text style={styles.Text_249_187}>Bio</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddfb/ee23/e0508ae642a5ce5042cf8aba2eea1545"
          }}
          style={styles.ImageBackground_249_188}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_249_285: {
    width: wp("153.54159884982639%"),
    minWidth: wp("153.54159884982639%"),
    height: hp("873.7704918032787%"),
    minHeight: hp("873.7704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-37.43055555555556%"),
    top: hp("93.16939890710383%")
  },
  ImageBackground_249_127: {
    width: wp("43.541666666666664%"),
    minWidth: wp("43.541666666666664%"),
    height: hp("81.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("0%")
  },
  ImageBackground_249_128: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: hp("80.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.736111111111114%"),
    top: hp("601.0928961748633%")
  },
  ImageBackground_249_224: {
    width: wp("42.5%"),
    minWidth: wp("42.5%"),
    height: hp("80.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.736111111111114%"),
    top: hp("793.5792349726776%")
  },
  ImageBackground_249_129: {
    width: wp("48.125%"),
    minWidth: wp("48.125%"),
    height: hp("90.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105.41666666666667%"),
    top: hp("5.054644808743177%")
  },
  ImageBackground_249_130: {
    width: wp("53.928782145182296%"),
    minWidth: wp("53.928782145182296%"),
    height: hp("102.18459165812841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.972222222222225%"),
    top: hp("120.76502732240438%")
  },
  ImageBackground_249_220: {
    width: wp("45.27369605170356%"),
    minWidth: wp("45.27369605170356%"),
    height: hp("85.7300138212944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.23611111111111%"),
    top: hp("227.45901639344265%")
  },
  ImageBackground_249_131: {
    width: wp("77.45187547471788%"),
    height: hp("154.71293131510419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("299.31693989071044%")
  },
  ImageBackground_249_132: {
    width: wp("70.5806393093533%"),
    minWidth: wp("70.5806393093533%"),
    height: hp("135.40717786778518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.615234375%"),
    top: hp("440.038395449112%")
  },
  ImageBackground_249_221: {
    width: wp("52.14514838324653%"),
    minWidth: wp("52.14514838324653%"),
    height: hp("98.90581141404115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.875%"),
    top: hp("566.3934426229508%")
  },
  ImageBackground_249_223: {
    width: wp("42.06390804714627%"),
    minWidth: wp("42.06390804714627%"),
    height: hp("79.78432243639003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    top: hp("697.540950254013%")
  },
  ImageBackground_249_226: {
    width: wp("51.85618930392795%"),
    minWidth: wp("51.85618930392795%"),
    height: hp("98.35772905193392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.59722222222223%"),
    top: hp("749.1803278688525%")
  },
  ImageBackground_249_133: {
    width: wp("45.13888888888889%"),
    minWidth: wp("45.13888888888889%"),
    height: hp("85.38251366120218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.26388888888889%"),
    top: hp("369.67213114754094%")
  },
  ImageBackground_249_222: {
    width: wp("38.05555555555556%"),
    minWidth: wp("38.05555555555556%"),
    height: hp("71.99453551912568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107.15277777777777%"),
    top: hp("663.9344262295082%")
  },
  ImageBackground_249_225: {
    width: wp("55.56173960367838%"),
    minWidth: wp("55.56173960367838%"),
    height: hp("105.25295069960296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("11.612021857923498%")
  },
  View_249_134: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("5.8743169398907105%")
  },
  Text_249_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_249_135: {
    width: wp("27.98611111111111%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("891.5300546448087%")
  },
  ImageBackground_249_136: {
    width: wp("40%"),
    height: hp("78.82513661202186%"),
    minHeight: hp("78.82513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.986111111111114%"),
    top: hp("867.896174863388%")
  },
  ImageBackground_249_137: {
    width: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("796.8579234972677%")
  },
  ImageBackground_249_138: {
    width: wp("28.055555555555557%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97222222222222%"),
    top: hp("765.3005464480874%")
  },
  ImageBackground_249_139: {
    width: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("757.3770491803278%")
  },
  ImageBackground_249_140: {
    width: wp("23.958333333333336%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.02777777777777%"),
    top: hp("670.6284153005464%")
  },
  ImageBackground_249_141: {
    width: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("662.7049180327868%")
  },
  ImageBackground_249_142: {
    width: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("552.3224043715846%")
  },
  ImageBackground_249_143: {
    width: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("552.3224043715846%")
  },
  ImageBackground_249_144: {
    width: wp("23.958333333333336%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("473.3606557377049%")
  },
  ImageBackground_249_145: {
    width: wp("40%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.986111111111114%"),
    top: hp("449.7267759562842%")
  },
  ImageBackground_249_146: {
    width: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("378.6885245901639%")
  },
  ImageBackground_249_147: {
    width: wp("20%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("362.9781420765027%")
  },
  ImageBackground_249_148: {
    width: wp("24.02777777777778%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.98611111111111%"),
    top: hp("323.4972677595629%")
  },
  ImageBackground_249_149: {
    width: wp("32.013888888888886%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.01388888888889%"),
    top: hp("252.45901639344262%")
  },
  ImageBackground_249_150: {
    width: wp("40%"),
    height: hp("47.26775956284153%"),
    minHeight: hp("47.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("236.74863387978144%")
  },
  ImageBackground_249_151: {
    width: wp("60%"),
    height: hp("63.114754098360656%"),
    minHeight: hp("63.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("134.15300546448088%")
  },
  ImageBackground_249_152: {
    width: wp("20%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("71.03825136612022%")
  },
  ImageBackground_249_153: {
    width: wp("36.041666666666664%"),
    height: hp("63.114754098360656%"),
    top: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%")
  },
  View_249_154: {
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
  View_249_155: {
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
  View_249_156: {
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
  View_249_157: {
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
  View_249_158: {
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
  View_249_159: {
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
  View_249_160: {
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
  View_249_161: {
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
  View_249_162: {
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
  View_249_163: {
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
  View_249_164: {
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
  View_249_165: {
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
  View_249_166: {
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
  View_249_167: {
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
  View_249_168: {
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
  View_249_169: {
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
  View_249_170: {
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
  View_249_171: {
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
  View_249_172: {
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
  View_249_173: {
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
  View_249_174: {
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
  View_249_175: {
    width: wp("13.541666666666666%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.08333333333333%"),
    top: hp("23.63387978142076%")
  },
  Text_249_175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_249_176: {
    width: wp("22.708333333333332%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.527777777777775%"),
    top: hp("0%")
  },
  Text_249_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_249_177: {
    width: wp("29.930555555555554%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110.38251366120218%")
  },
  Text_249_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_249_179: {
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
  View_249_180: {
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
  ImageBackground_249_181: {
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
  View_249_184: {
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
  View_249_185: {
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
  View_249_186: {
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
  View_249_187: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("3.2786885245901636%")
  },
  Text_249_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_249_188: {
    width: wp("5.661191410488552%"),
    minWidth: wp("5.661191410488552%"),
    height: hp("7.377316521816566%"),
    minHeight: hp("7.377316521816566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.83251953125%"),
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
