import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import IndexedSectionList from 'indexed-section-list';

export default function App() {
  return (
    <View style={styles.container}>
      <IndexedSectionList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
