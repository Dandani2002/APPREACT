import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'; 
import React from 'react';
import Header3 from '../../components/HeaderProd3';
import Product3 from '../../components/Product3';

export default function Products3() {

const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Header3/>
            <Product3 
            name="Teclado Mecânico Gamer Logitech G PRO X - Edição Shroud - Layout US"
            description
            about
            /> 
        </SafeAreaView>
    );
}