import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'; 
import React from 'react';
import Header from '../../components/HeaderProd';
import Product from '../../components/Product';

export default function Products() {

const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Header/>
            <Product 
            name="Teclado Mecânico Gamer RGB Logitech G PRO com Layout US, Design TKL, Cabo Destacável e Switch Exclusivo GX Blue Clicky"
            description
            about
            /> 
        </SafeAreaView>
    );
}