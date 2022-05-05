import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import mech from '../../../assets/mech.jpg';
import proc from '../../../assets/proc.jpg';

export default function Info(props) {
    return (
         <View style={styles.headerView}>
            <Image source={mech} style={styles.mech} ></Image>
            <Text style={styles.title}>{props.title}</Text>

            <View style={styles.box}>
            <Text style={styles.intro}>A diferença entre um teclado mecânico e um de membrana{props.intro}</Text>
            </View>


            <View style={styles.procstyle}>
            <Image source={proc} style={styles.proc}></Image>
            <View>
            <Text style={styles.linha1}>O teclado mecânico tem seu próprio processador e firmware que decodifica o sinal e o envia para as portas de E/S do seu computador.{props.linha1}</Text>
            <Text style={styles.linha2}>Porém, a parte do teclado que aciona esse fechamento do circuito é o que difere entre um teclado mecânico e um de membrana.{props.linha2}</Text>
            <Text style={styles.linha3}>Um teclado mecânico tem interruptores individuais embaixo de cada tecla que são operados por mola com pequenos contatos de metal que fecham o circuito quando você pressiona.{props.linha3}</Text>
            <Text style={styles.linha4}>Um teclado de membrana, por outro lado, consiste em uma membrana de silicone/poliuretano/borracha que percorre todo o comprimento da placa.{props.linha4}</Text>
            <Text style={styles.linha5}>Existem pequenas cúpulas sob cada tecla, com um material condutor por baixo. Essas cúpulas se comprimem durante o pressionamento de uma tecla e forçam a tampa da tecla para cima quando você a solta.{props.linha5}</Text>
            <Text style={styles.linha6}>Abaixo dessa camada superior está outra membrana equipada com uma camada de circuito. No meio, há uma camada de suporte não condutiva com orifícios colocados onde as chaves deveriam estar.
            Quando as membranas superior e inferior entram em contato, elas fecham o circuito e um pressionamento de tecla é registrado.{props.linha6}</Text>
            <Text style={styles.linha7}>Fabricar um teclado de membrana leva menos tempo e é mais barato, pois não há tantas peças e requisitos de mão de obra.
            Você pode simplesmente imprimir membranas em vez de construir e testar interruptores individuais. O design da membrana também é mais resistente à água. Na verdade, uma variante dele é usada em eletrodomésticos comuns, como micro-ondas e máquinas de lavar.{props.linha7}</Text>
            </View>

            <View style={styles.box}>
            <Text style={styles.intro}>Como funciona um teclado mecânico?{props.intro}</Text>
            <View>
            <Text style={styles.linhas1}>Expliquei anteriormente como um teclado mecânico possui interruptores individuais para cada tecla. Essas chaves são conectadas (soldadas) à matriz da chave por baixo. 
            Existem também componentes como um processador, um controlador de LED e ROM (os teclados mecânicos modernos têm perfis personalizáveis para macros, iluminação, etc.).{props.linhas1}</Text>
            
            <Text style={styles.linhas2}>No tipo de switch mais popular, o Cherry MX, você tem 4 componentes principais:{props.linhas2}</Text>
            <View style={styles.box}>
            <Text style={styles.linhas3}>- Tronco -{props.linhas3}</Text>
            <Text style={styles.linhas4}>- Slider -{props.linhas4}</Text>
            <Text style={styles.linhas5}>- Folhas de contato de metal (geralmente banhadas a ouro para melhor condutividade) -{props.linhas5}</Text>
            <Text style={styles.linhas6}>- Primavera -{props.linhas6}</Text>
            </View>
            <View>
            <Text style={styles.linhas7}>Todos os componentes são encaixados em um invólucro de interruptor de plástico com terminais que o conectam à matriz da chave.
             A haste é uma estrutura móvel semelhante a um pilar que está presa ao topo do controle deslizante e atua como uma base para a tecla.
             O controle deslizante é o que empurra as folhas de contato de metal para fechar ou abrir o circuito.{props.linhas7}</Text>
            <Text style={styles.linhas8}>Em sua posição de repouso, a chave mantém o circuito aberto, uma vez que ambos os contatos de metal são impedidos de se tocarem.{props.linhas8}</Text>
            <Text style={styles.linhas9}>Quando você empurra a tecla para baixo, uma das folhas de metal prende na pequena saliência entalhada no controle deslizante e sai do caminho.
             Depois que a saliência passa, ela se move de volta e se conecta à segunda folha de contato agora exposta.{props.linhas9}</Text>
            <Text style={styles.linhas10}>O ponto de ativação é definido como a distância percorrida do estado de repouso antes que os dois contatos de metal se encontrem, completando o circuito. 
            A taxa na qual uma tecla pode retornar e a força necessária para pressioná-la dependerá da rigidez da mola. 
            O controle deslizante tem uma pequena extensão em forma de haste na parte inferior que se encaixa na mola helicoidal para evitar que voe para fora da posição.{props.linhas10}</Text>
            <Text style={styles.linhas11}>Quando a força não é mais aplicada à chave, a mola a empurra de volta, fechando o circuito.
             A parte superior da haste é projetada para funcionar como uma base para a montagem da tampa da tecla, que geralmente é feita de plástico ABS ou PBT.
             A inscrição é feita por gravação a laser ou moldagem por injeção. Você pode aprender mais sobre a gravação de teclas aqui.{props.linhas11}</Text>
            </View>
            </View>




            </View>
            </View>
         </View>
        
  );
}