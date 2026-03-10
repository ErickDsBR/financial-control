import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {                     
    backgroundColor: '#2b364a',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    alignContent: 'center',
    backgroundColor: '#f8f1e9',
    borderColor: '#000000',
    borderWidth: 2,
    elevation: 10,
            
    margin: 10,
    borderRadius: 10,
    width: 385,
    height: 180,

  },
  welcome: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
    padding: 10,


  },
  salaryText: {
    paddingLeft: 10,
    fontSize: 18,
  },
});