import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import Sobre from '../../components/Sobre';

export default function About() {
    
    const navigation = useNavigation();
        return (
            <SafeAreaView>
                <Sobre/>
            </SafeAreaView>
        );
}






