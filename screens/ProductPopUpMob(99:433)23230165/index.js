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
      <View style={styles.View_99_435}>
        <Text style={styles.Text_99_435}>Diferrent Place All and Together</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5321/0a30/72e12692215cf7596f2befdb6f7b0976"
        }}
        style={styles.ImageBackground_99_440}
      />
      <View style={styles.View_99_470}>
        <Text style={styles.Text_99_470}>
          Oil on canvas Dimentions (100x70) $1300 I believe that art should
          spark imagination and transfer the viewer into the realm of infinite
          possibilities that are yet not defined. Abstraction is perfect for
          conveying this message. It frees the viewer from reality. My
          atmospheric abstract paintings invite you to personal spiritual
          journey through the alchemy of colors, textures, and light.
        </Text>
      </View>
      <View style={styles.View_99_485}>
        <View style={styles.View_99_486} />
        <View style={styles.View_99_487}>
          <Text style={styles.Text_99_487}>x</Text>
        </View>
      </View>
      <View style={styles.View_99_515}>
        <View style={styles.View_99_516} />
        <View style={styles.View_99_517}>
          <Text style={styles.Text_99_517}>&lt;</Text>
        </View>
      </View>
      <View style={styles.View_99_518}>
        <View style={styles.View_99_519} />
        <View style={styles.View_99_520}>
          <Text style={styles.Text_99_520}>&gt;</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/716a/49c5/baf1a1e8a22560117005729755b00762"
        }}
        style={styles.ImageBackground_99_507}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_99_435: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.000000000000004%"),
    top: hp("2.0491803278688523%")
  },
  Text_99_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  ImageBackground_99_440: {
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
  View_99_470: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("93.98907103825137%")
  },
  Text_99_470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_485: {
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
  View_99_486: {
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
  View_99_487: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.6830601092896175%")
  },
  Text_99_487: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_515: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081966%")
  },
  View_99_516: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_99_517: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.6830601092896185%")
  },
  Text_99_517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_518: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("14.344262295081966%")
  },
  View_99_519: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224
  },
  View_99_520: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.6830601092896185%")
  },
  Text_99_520: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_99_507: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("48.08743169398907%")
  },
  View_2: { height: 1110 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
