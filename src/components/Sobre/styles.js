import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Titulo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "green",
        borderWidth: 2,
        padding: 10,
    },

    Octane: {
        width: 200,
        height: 200,
        borderTopRightRadius: 90,
        borderTopLeftRadius: 90,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90, 
    },
    nome:{
        fontSize: 15,
    },
    matricula:{
        fontSize: 15,
    },
    instagram: {
        width: 80,
        height: 80,
        borderTopRightRadius: 90,
        borderTopLeftRadius: 90,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90, 
        alignItems: 'left',
        justifyContent: 'left',
    },
    inst:{
        fontSize: 15,
    }
});
export default styles;