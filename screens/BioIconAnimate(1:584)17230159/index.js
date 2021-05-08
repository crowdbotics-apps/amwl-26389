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
      <View style={styles.View_1_585} />
      <View style={styles.View_1_586}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb5e/a6ec/fea45d870e430a8f7687d700e4b4dd45"
          }}
          style={styles.ImageBackground_1_587}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efa1/b11d/2123d01c0fa3118bdc77aaff7015917f"
        }}
        style={styles.ImageBackground_1_588}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974b/dd64/df71d1a2e6773ff036e092266f76f16a"
        }}
        style={styles.ImageBackground_1_589}
      />
      <View style={styles.View_1_593}>
        <Text style={styles.Text_1_593}>Nikopolidis Papadopulus</Text>
      </View>
      <View style={styles.View_1_594}>
        <View style={styles.View_1_595} />
        <View style={styles.View_1_596}>
          <Text style={styles.Text_1_596}>Bio</Text>
        </View>
      </View>
      <View style={styles.View_1_597}>
        <View style={styles.View_1_598} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0645/a165/44eb95cbe2fcf7986dd32cd973dfc35b"
          }}
          style={styles.ImageBackground_1_599}
        />
      </View>
      <View style={styles.View_1_602}>
        <View style={styles.View_1_603} />
        <View style={styles.View_1_604}>
          <View style={styles.View_1_605}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e6/a252/d2746803cf51a71763b08cf4ceb39119"
              }}
              style={styles.ImageBackground_1_606}
            />
          </View>
          <View style={styles.View_1_616}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/959d/c1fd/994e439555a4944188ec3fdb0296ffc4"
              }}
              style={styles.ImageBackground_1_617}
            />
          </View>
        </View>
        <View style={styles.View_1_623}>
          <Text style={styles.Text_1_623}>powered by</Text>
        </View>
        <View style={styles.View_1_624}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a69/2411/c7f5d7efc46af3cc41186e69ff0dab78"
            }}
            style={styles.ImageBackground_1_625}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f53/3c82/bfdbbea6b1118e9d34dfd627f1b428bc"
            }}
            style={styles.ImageBackground_1_626}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a17/b54c/43f9eceacf1a6ce1cbfb288419d00c4c"
            }}
            style={styles.ImageBackground_1_627}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f386/349a/04b4cfbb90c8d9bb1202b8cc8a394437"
            }}
            style={styles.ImageBackground_1_628}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e85f/d2d9/6e67bdd905fd567a222976f8e9b162c7"
            }}
            style={styles.ImageBackground_1_629}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0020/e55c/4cc249eb1151ade147000a454a76627c"
            }}
            style={styles.ImageBackground_1_630}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d1/5c9c/0864ef14aa599c7240d8c502ed75b04b"
            }}
            style={styles.ImageBackground_1_632}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/b7c5/c3b40e49b07643ec9c68324b3926f344"
        }}
        style={styles.ImageBackground_1_634}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_585: {
    width: wp("15.972222222222221%"),
    minWidth: wp("15.972222222222221%"),
    height: hp("41.57142857142857%"),
    minHeight: hp("41.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.04166666666666%"),
    top: hp("16.57142857142857%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_1_586: {
    width: wp("108.19444444444444%"),
    minWidth: wp("108.19444444444444%"),
    height: hp("214%"),
    minHeight: hp("214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.097222222222221%"),
    top: hp("50.28571428571429%")
  },
  ImageBackground_1_587: {
    width: wp("108.19444444444444%"),
    minWidth: wp("108.19444444444444%"),
    height: hp("214%"),
    minHeight: hp("214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_588: {
    width: wp("36.041666666666664%"),
    minWidth: wp("36.041666666666664%"),
    height: hp("66.71428571428571%"),
    minHeight: hp("66.71428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.98611111111111%"),
    top: hp("25%")
  },
  ImageBackground_1_589: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("41.57142857142857%"),
    minHeight: hp("41.57142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("75%")
  },
  View_1_593: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.25%"),
    top: hp("6.142857142857143%")
  },
  Text_1_593: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_594: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("12.571428571428573%"),
    minHeight: hp("12.571428571428573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.18055555555556%"),
    top: hp("4%")
  },
  View_1_595: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("12.571428571428573%"),
    minHeight: hp("12.571428571428573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_596: {
    width: wp("2.5%"),
    minHeight: hp("3.8571428571428568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("3.428571428571429%")
  },
  Text_1_596: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1_597: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.285714285714285%"),
    minHeight: hp("8.285714285714285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.09722222222223%"),
    top: hp("6.142857142857143%")
  },
  View_1_598: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("8.285714285714285%"),
    minHeight: hp("8.285714285714285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_599: {
    width: wp("1.484790775511%"),
    height: hp("3.714290346418108%"),
    top: hp("2.2857142857142856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3642035590277715%")
  },
  View_1_602: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("74.14285714285714%"),
    minHeight: hp("74.14285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("16.57142857142857%")
  },
  View_1_603: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("74.14285714285714%"),
    minHeight: hp("74.14285714285714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_604: {
    width: wp("12.013914320203993%"),
    height: hp("10.814445495605469%"),
    top: hp("26.285714285714285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%")
  },
  View_1_605: {
    width: wp("10.921263164944119%"),
    height: hp("2.3793307713099887%"),
    top: hp("8.435128348214292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5394744873047017%")
  },
  ImageBackground_1_606: {
    width: wp("10.921263164944119%"),
    height: hp("2.3793307713099887%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_616: {
    width: wp("12.013914320203993%"),
    height: hp("6.489161355154854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_617: {
    width: wp("12.013914320203993%"),
    height: hp("6.489161355154854%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_623: {
    width: wp("10.069444444444445%"),
    minWidth: wp("10.069444444444445%"),
    minHeight: hp("3.8571428571428568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("15.285714285714288%")
  },
  Text_1_623: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.75,
    textTransform: "capitalize"
  },
  View_1_624: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("7.142857142857142%"),
    minHeight: hp("7.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_625: {
    width: wp("11.854945288764105%"),
    height: hp("6.82415553501674%"),
    top: hp("0.159214564732153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07923550075956598%")
  },
  ImageBackground_1_626: {
    width: wp("12.013793521457249%"),
    height: hp("7.142251695905413%"),
    top: hp("0.0005580357142775938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_627: {
    width: wp("11.854945288764105%"),
    height: hp("6.82415553501674%"),
    top: hp("0.159214564732153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07923550075956598%")
  },
  ImageBackground_1_628: {
    width: wp("1.8481164508395727%"),
    height: hp("4.556504658290319%"),
    top: hp("1.1106305803571388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1390262179904624%")
  },
  ImageBackground_1_629: {
    width: wp("6.405001216464573%"),
    height: hp("7.142252240862165%"),
    top: hp("0.00038364955356939845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.608918931749145%")
  },
  ImageBackground_1_630: {
    width: wp("7.09888776143392%"),
    height: hp("3.1070063454764227%"),
    top: hp("3.215087890625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.777982923719634%")
  },
  ImageBackground_1_632: {
    width: wp("6.531156963772244%"),
    height: hp("1.2479156766619002%"),
    top: hp("1.1707589285714306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8486311170789946%")
  },
  ImageBackground_1_634: {
    width: wp("6.290190484788683%"),
    minWidth: wp("6.290190484788683%"),
    height: hp("8.57170922415597%"),
    minHeight: hp("8.57170922415597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.69852362738716%"),
    top: hp("6.142857142857143%")
  },
  View_2: { height: 700 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
