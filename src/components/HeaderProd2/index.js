import React from 'react';
import { View, Image } from 'react-native';
import header from '../../../assets/teclado2.png';
import styles from './styles';

export default function Header2(props) {
    return (
        <View style={styles.headerView}>
        <Image source={header} style={styles.header} ></Image>
        </View>
  );
}