import { useState } from "react";
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Circles from "../components/Circles";

export default function DashboardScreen({ navigation }) {
  const [data, setData] = useState([
    { key: 'Follow Oluwafisayomi.dev on Twitter.', check: true },
    { key: 'Learn Figma by 4pm.', check: true },
    { key: 'Coding at 9am.', check: false },
    { key: 'Watch Mr Beasts Videos.', check: false },
  ])

  const toggleBool = (index) => {
    let newData = [...data]
    newData[index].check = !newData[index].check
    setData(newData)
  };

  return (
    <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
      <View style={{ flex: 1 }}>
        <Circles />
        <Image source={require('../../assets/fondo_dashboard.png')} style={{ top: -50, width: Dimensions.get('window').width }} />
      </View>
      <View style={styles.viewHome}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/profile.png')} />
          <Text style={styles.title}>Welcome Fisayomi</Text>
          <Image source={require('../../assets/image4.png')} />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.subtitle}>Todo  Tasks.</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.containerTasks}>
            {/* ADD TASKS */}
            <View style={styles.containerAddTask}>
              <Text style={styles.textAddTask}>Dairy  Tasks.</Text>
              <Pressable onPress={() => { navigation.push('AddTodo') }}>
                <Image source={require('../../assets/btn_add.png')} />
              </Pressable>
            </View>
            {/* TASKS */}
            <FlatList
              data={data}
              extraData={data}
              renderItem={({ item, index }) =>
                <View style={styles.containerListTasks}>
                  <TouchableOpacity onPress={() => { toggleBool(index); }} key={index} >
                    <View style={[styles.btnCheckTask, { backgroundColor: item.check ? '#55847AF7' : '#ffffff' }]} />
                  </TouchableOpacity>
                  <View style={{ width: 15 }} />
                  <Text style={styles.textTask}>{item.key}</Text>
                </View>
              }
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewHome: {
    flex: 12,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: 20,
    marginTop: 20
  },
  subtitle: {
    fontFamily: 'Poppins_Bold',
    fontSize: 20,
    marginBottom: 10
  },
  containerTasks: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width * .9,
    height: 240,
    borderRadius: 50,
    padding: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  containerAddTask: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textAddTask: {
    color: '#000000',
    opacity: .47,
    fontFamily: 'Poppins_Regular',
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center"
  },
  containerListTasks: {
    flexDirection: 'row',
    marginTop: 15
  },
  btnCheckTask: {
    width: 20,
    height: 20,
    borderColor: '#000000',
    borderWidth: 2
  },
  textTask: {
    fontFamily: 'Poppins_Bold',
    fontSize: 13,
    textAlign: 'center',
    color: '#000000'
  }
})