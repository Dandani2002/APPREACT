import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsView: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    productName: {
        fontSize: 30,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#1a42a7',
        width: '100%',
    },
    detailsContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    productDescription: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 15,
        color: '#6b5b95',
        textAlign: 'justify',
    },
    productPrice: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontSize: 30,
        color: '#106510',
        fontWeight: 'bold',
    },
    productabout: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 15,
        color: '#6b5b95',
        textAlign: 'justify',
    },
});

export default styles;