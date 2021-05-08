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
      <View style={styles.View_99_657}>
        <View style={styles.View_99_658} />
        <View style={styles.View_99_659} />
        <View style={styles.View_99_660} />
      </View>
      <View style={styles.View_99_661}>
        <Text style={styles.Text_99_661}>Nikopolidis Papadopulus</Text>
      </View>
      <View style={styles.View_99_662}>
        <View style={styles.View_99_663} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e42/465e/f3d5bf8452020862928266a212170634"
          }}
          style={styles.ImageBackground_99_664}
        />
      </View>
      <View style={styles.View_99_667}>
        <View style={styles.View_99_668} />
        <View style={styles.View_99_669}>
          <Text style={styles.Text_99_669}>Bio</Text>
        </View>
      </View>
      <View style={styles.View_99_670} />
      <View style={styles.View_99_671} />
      <View style={styles.View_99_672} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_99_657: {
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
  View_99_658: {
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
  View_99_659: {
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
  View_99_660: {
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
  View_99_661: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("2.185792349726776%")
  },
  Text_99_661: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_99_662: {
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
  View_99_663: {
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
  ImageBackground_99_664: {
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
  View_99_667: {
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
  View_99_668: {
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
  View_99_669: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("2.73224043715847%")
  },
  Text_99_669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_99_670: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("63.52459016393443%"),
    minHeight: hp("63.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_99_671: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("47.13114754098361%"),
    minHeight: hp("47.13114754098361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("139.34426229508196%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_99_672: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("32.78688524590164%"),
    minHeight: hp("32.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("96.31147540983606%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
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
