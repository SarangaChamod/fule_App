import { View, Text, Button,Style,StyleSheet} from 'react-native'
import React from 'react'

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
    
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    padding: 20,
    backgroundColor:'#f000ff'
  },

});

export default index