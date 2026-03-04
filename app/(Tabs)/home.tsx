import { Text, View } from 'react-native';
import { styles } from '../../styles/styles';

export default function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Financial Control</Text>
      </View>
      
    </View>
  );
}