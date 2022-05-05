import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsView: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    productName: {
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#1a42a7',
        width: '100%',
        borderWidth: 2,
        borderColor: '#007AFF',
    },
    detailsContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    productDescription: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 12,
        color: '#6b5b95',
        textAlign: 'justify',
    },
    productabout: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 12,
        color: '#6b5b95',
        textAlign: 'justify',
    },
    
});

export default styles;