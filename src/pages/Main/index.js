import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import Main from "../../components";


export default function Main() {

  const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Header title="Consoles"/>
            

        </SafeAreaView>
  );
}
