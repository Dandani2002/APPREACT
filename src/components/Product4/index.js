import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Product4(props) {
 return (
     <View>
        <View style={styles.detailsView}>
            <Text style={styles.productName}>{props.name}</Text>


            
        <View style={styles.productDescription}>
            <Text>Ângulo ajustável</Text>
            <Text>Cabo destacável</Text>
            <Text>Compacto, Ultraportátil e Durável</Text>
            <Text>Switches GX Brown Tactile</Text>
            <Text>LIGHTSYNC RGB</Text>
            <Text>Taxa de relátorio PRO-GRADE</Text>
            <Text>Design com a arte oficial K/DA do universo alternativo de League of Legends</Text>
        {props.description}</View>



        <View style={styles.productabout}>
        <Text>________________________________________________________</Text>
          <Text>Descrição do teclado: Jogos</Text>
          <Text>Características especiais: Mecânico </Text>
          <Text>Dispositivos compatíveis: Console de jogos</Text>
          <Text>Marca: Logitech G</Text>
          <Text>Cor: Branco e Preto</Text>
        {props.about}</View>
      </View>
      </View>
  );
}