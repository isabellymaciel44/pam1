import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <scrollview>
    <View style={styles.container}>
      <Text>teste de tela</Text>
     </View>
      <View style={styles.cont_texto}>
       <text> ...
        </text> 
      </View>
     </scrollview>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margintop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
cont_text: {
  height: 1250,
  backgroundColor: "red",
},

});
