import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/styles';


import infosDatas from '../../datas.json';
interface UserInfos {
  id: number;
  name: string;
  salary: number;
  expenses: {
    id: number,
    name: string,
    amount: number,
  }[];

}
const infos = infosDatas as UserInfos;

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexDirection: 'row' }}
        horizontal={true}
        snapToAlignment='center'
        snapToInterval={400}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
      >

        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome, {infos.name}!</Text>
          <Text style={styles.salaryText}> Salary: ${infos.salary.toFixed(2)}</Text>

        </View>
        <View style={styles.header}>
          <Text style={styles.salaryText}> Expenses: ${infos.expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2)}
          </Text>

        </View>

        <View style={styles.header}>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}