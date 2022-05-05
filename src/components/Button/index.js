import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';

export default function ButtonCart(props) {
 return (
    <View style={styles.cartArea}>
        <Button
        onPress={props.onPress}
        title = {props.nome}
        color="#008080"
        />
    </View>
  );
}