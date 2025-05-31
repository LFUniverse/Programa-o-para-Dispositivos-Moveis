import { ScrollView,  StyleSheet,  View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";


function RecoverScreen ({ navigation }) {
return (
    <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="E-mail" mode="outlined" style={styles.input}/>
        <Button mode="contained" onPress={() => {}} style={styles.input}>Recuperar Senha</Button>
        <Text onPress={() => navigation.navigate("Login")} style={styles.info}>Voltar para o Login</Text>
    </ScrollView>
);
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16
    },

    input: {
        marginBottom: 16
    },

    info: {
        textAlign: "center",
        marginBottom: 16,
        color: "#6750A4"
    },

})

export default RecoverScreen;