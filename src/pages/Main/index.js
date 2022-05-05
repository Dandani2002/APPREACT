import { useNavigation } from '@react-navigation/native';
import { SafeAreaView , View, Image} from 'react-native';
import React from 'react';
import Pagina from '../../components/Headermain';
import ButtonCart from '../../components/Button';


export default function Principal() {

  const navigation = useNavigation();
    return (
        <SafeAreaView>       
            <Pagina title="Teclando"
            intro = "Bem Vindo ao Teclando! um site focado em teclados mecânicos de qualidade, aqui falaremos sobre o que é um teclado mecânico e seu diferencial, e mostraremos produtos de marcas confiáveis."
            />
            
            <ButtonCart nome = "Sobre o Criador" onPress={() => navigation.navigate('About')}/>
            <ButtonCart nome = "O que é um teclado mecânico" onPress={() => navigation.navigate('Wiki')}/>
        </SafeAreaView>
  );
}
