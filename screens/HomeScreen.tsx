import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Kasir</Text>
      <Button
        title="Pesanan Baru"
        onPress={() => navigation.navigate('Order')}
      />
      <Button
        title="Daftar Pelanggan"
        onPress={() => navigation.navigate('Customers')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
