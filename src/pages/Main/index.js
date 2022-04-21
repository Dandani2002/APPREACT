import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from '../../components/HeaderProd';
import Product from '../../components/Product';


export default function Main () {

  const navigation = useNavigation();
 return (
    <SafeAreaView>
        <Header title="Consoles"/>
        

    </SafeAreaView>
  );
}