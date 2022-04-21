import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';

import ButtonCart from '../../components/ButtonCart'; 
import Header from '../../components/HeaderProd';
import Product from '../../components/Product';

export default function Products() {

  const navigation = useNavigation();
 return (
    <SafeAreaView>
        <Header/>
        <Product 
        name="Teclado Mecânico Gamer RGB Logitech G PRO com Layout US, Design TKL, Cabo Destacável e Switch Exclusivo GX Blue Clicky"
        description="Desenvolvido por e para profissionais,
        Switches GX Blue Clicky de nível profissional,
        Design TKL, compacto e ultraportátil,
        LIGHTSYNC RGB, Cabo removível"
        about="Descrição do teclado: Jogos
        Características especiais: Mecânico 
        Dispositivos compatíveis: Console de jogos
        Marca: Logitech G
        Cor: Preto
        "
        price="R$ 680,85"
        />
        <ButtonCart onPress={() => navigation.navigate("Cart")}/>
    </SafeAreaView>
  );
}