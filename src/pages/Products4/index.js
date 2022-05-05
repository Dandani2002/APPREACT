import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'; 
import React from 'react';
import Header4 from '../../components/HeaderProd4';
import Product4 from '../../components/Product4';

export default function Products4() {

const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Header4/>
            <Product4 
            name="Teclado Mecânico Gamer Logitech G PRO K/DA - Edição Oficial League of Legends KDA - Layout US"
            description
            about
            /> 
        </SafeAreaView>
    );
}