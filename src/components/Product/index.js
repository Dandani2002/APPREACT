import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Product(props) {
 return (
     <View>
        <View style={styles.detailsView}>
            <Text style={styles.productName}>{props.name}</Text>


            
        <View style={styles.productDescription}>
            <Text>Desenvolvido por e para profissionais</Text>
            <Text>Switches GX Blue Clicky de nível profissional</Text>
            <Text>Design TKL, compacto e ultraportátil</Text>
            <Text>LIGHTSYNC RGB</Text>
            <Text>Cabo removível</Text>
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