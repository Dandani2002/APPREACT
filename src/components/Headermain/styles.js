import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
    },
    teclado: {
        width: 360 ,
        height: 140,
        borderBottomColor: '#008080',
        borderBottomWidth: 4,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        borderTopWidth: 4,
        borderTopColor: '#008080',
        alignSelf: "center",
        
    },
    title: {
        fontSize: 45,
        fontWeight: '200',
        color: '#008080',
        paddingTop: 40,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
    },
    intro: {
       fontSize: 15,
       fontWeight: '400',
       textAlign: 'center',
    },
    
    fotop: {
        width: 200,
        height: 120,


        borderBottomColor: '#008080',
        borderBottomWidth: 4,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        borderTopWidth: 4,
        borderTopColor: '#008080',
        borderWidth: 3,
        borderColor: '#008080',
        alignSelf: "left",
        
    },
    containerProd: {
        padding: 10,
        paddingHorizontal: 90,
        paddingVertical: 60,  
        alignSelf: "left",  
    },
    productName: {
        alignSelf: "left",
        fontSize: 12,
        fontWeight: 100,
        paddingHorizontal: 10,
        
    }
});
export default styles;
