import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'; 
import React from 'react';
import Header2 from '../../components/HeaderProd2';
import Product2 from '../../components/Product2';

export default function Products2() {

const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Header2/>
            <Product2 
            name="Teclado Gamer Logitech G213 - Layout US"
            description
            about
            /> 
        </SafeAreaView>
    );
}