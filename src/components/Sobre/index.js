import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Octane from '../../../assets/Octane.jpg';
import instagram from '../../../assets/instagram.png';



export default function Sobre(props) {
 return (
     <View>
     <View style={styles.Titulo}>

         <Text style={styles.Titulo}>Sobre o Criador{props.Titulo}</Text>
         <Image source={Octane} style={styles.Octane} ></Image>
         <View style={styles.container}>
         <Text style={styles.nome}>Nome: Daniel Cavalcante Pinheiro{props.nome}</Text>
         <Text style={styles.matricula}>Mátricula: 202001238387{props.matricula}</Text>
         <Text style={styles.sobre}>Faço ADS na Estácio de Sá, focando em Front End no momento.{props.sobre}</Text>
         </View>
         <View>

       
         <TouchableOpacity>
         <Image style={styles.instagram}source={instagram}/>
         <Text style={styles.inst}>@daniel_cvct{props.inst}</Text>
         </TouchableOpacity>
         </View>
     </View>
     </View>
  );
}
