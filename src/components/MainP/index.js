import { useNavigation } from '@react-navigation/native';
import React from 'react';
import main from '../../../assets/main.png'
import styles from './styles';

export default function Main() {
    return ( 
        <View style={styles.headerView}>
        <Image source={main} style={styles.main} ></Image>
        </View>
    );
}

