import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function Product(props) {
 return (
     <View>
        <View style={styles.detailsView}>
            <Text style={styles.productName}>{props.name}</Text>
        <View>
            <Text style={styles.productDescription}>{props.description}</Text>
        </View>
        <View>
          <Text style = {styles.productabout}>{props.about}</Text>
      </View>
        <View>
            <Text style={styles.productPrice}>{props.price}</Text>
        </View>
      </View>
      </View>
  );
}