import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Product2(props) {
 return (
     <View>
        <View style={styles.detailsView}>
            <Text style={styles.productName}>{props.name}</Text>


            
        <View style={styles.productDescription}>
            <Text>Teclas com desempenho melhorado permitindo pressionamento simultâneo de diversas teclas</Text>
            <Text>Zonas de iluminação RGB nítidas e brilhantes</Text>
            <Text>Resistente a respingos e durável</Text>
            <Text>Apoio para as mãos integrado e inclinação ajustável</Text>
            <Text>Controle de mídia dedicado</Text>
        {props.description}</View>



        <View style={styles.productabout}>
        <Text>________________________________________________________</Text>
          <Text>Descrição do teclado: Jogos</Text>
          <Text>Características especiais: Mecânico </Text>
          <Text>Dispositivos compatíveis: Console de jogos</Text>
          <Text>Marca: Logitech G</Text>
          <Text>Cor: Preto</Text>
        {props.about}</View>
      </View>
      </View>
  );
}