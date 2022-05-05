import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'; 
import Info from "../../components/Info";

export default function Wiki() {

    const navigation = useNavigation();
      return (
          <SafeAreaView>       
            <Info title="O que é um Teclado Mecânico?"
              intro
              
              />
          </SafeAreaView>
      );
}