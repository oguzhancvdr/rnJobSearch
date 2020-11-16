import {StyleSheet, Dimensions} from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#f0f0f0',
  },
});

export const introduction = StyleSheet.create({
  banner: {
    height: Dimensions.get('window').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export const jobItem = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdbdbd',
  },
  jobtext: {
    fontWeight: 'bold',
  },
});

export const jobs = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    height: Dimensions.get('window').height / 2,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  jobDesc: {
    flex: 5,
    margin: 5,
  },
});
