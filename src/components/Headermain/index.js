import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import teclado from '../../../assets/main.jpg';
import teclado2 from '../../../assets/teclado2.png';
import teclado3 from '../../../assets/teclado3.png';
import teclado4 from '../../../assets/teclado4.png';
import styles from './styles';
import fotop from '../../../assets/header.png';

export default function Pagina(props) {
  const navigation = useNavigation();
    return (
        <View style={styles.headerView}>
        <Image source={teclado} style={styles.teclado} ></Image>
        <Text style={styles.title}>{props.title}</Text>      
        <Text style={styles.intro}>{props.intro}</Text>
        

        <View style={styles.containerProd}>
        <TouchableOpacity  onPress={() => navigation.navigate('Products')}>
        <Image style={styles.fotop}source={fotop}/>
        <Text style={styles.productName}>Teclado Mecânico Gamer Logitech G PRO - Layout US{props.productName}</Text>
        </TouchableOpacity>
        </View>
       
          
        <View style={styles.containerProd}>
        <TouchableOpacity  onPress={() => navigation.navigate('Products2')}>
        <Image style={styles.fotop} source={teclado2}/>
        <Text style={styles.productName}>Teclado Gamer Logitech G213 - Layout US{props.productName}</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.containerProd}>
        <TouchableOpacity  onPress={() => navigation.navigate('Products3')}>
        <Image style={styles.fotop} source={teclado3}/>
        <Text style={styles.productName}>Teclado Mecânico Gamer Logitech G PRO X - Edição Shroud - Layout US{props.productName}</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.containerProd}>
        <TouchableOpacity  onPress={() => navigation.navigate('Products4')}>
        <Image style={styles.fotop} source={teclado4}/>
        <Text style={styles.productName}>Teclado Mecânico Gamer Logitech G PRO K/DA - Edição Oficial League of Legends KDA - Layout US{props.productName}</Text>
        </TouchableOpacity>
        </View>




        </View>




  );
}
