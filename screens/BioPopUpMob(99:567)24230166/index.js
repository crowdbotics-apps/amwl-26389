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
      <View style={styles.View_99_569}>
        <Text style={styles.Text_99_569}>Nikopolidis Papadopulus</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b2/de4b/7cc57d3870b487c387ed62c03badea5e"
        }}
        style={styles.ImageBackground_99_570}
      />
      <View style={styles.View_99_571}>
        <Text style={styles.Text_99_571}>
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
      <View style={styles.View_163_26}>
        <Text style={styles.Text_163_26}>
          sofi.vitko@gmail.com +380979278290 Sophia Vitko 775 Westminster Avenue
          APT D5 Brooklyn, NY, 11230
        </Text>
      </View>
      <View style={styles.View_99_572}>
        <View style={styles.View_99_573} />
        <View style={styles.View_99_574}>
          <Text style={styles.Text_99_574}>x</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_99_569: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.000000000000004%"),
    top: hp("2.0491803278688523%")
  },
  Text_99_569: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  ImageBackground_99_570: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18.442622950819672%"),
    resizeMode: "cover"
  },
  View_99_571: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("81.9672131147541%")
  },
  Text_99_571: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_163_26: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("140.98360655737704%")
  },
  Text_163_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_572: {
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
  View_99_573: {
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
  View_99_574: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("0.6830601092896175%")
  },
  Text_99_574: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1217 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
