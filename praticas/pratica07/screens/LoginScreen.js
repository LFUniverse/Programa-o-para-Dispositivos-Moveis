import { ScrollView,  StyleSheet,  View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import RecoverScreen from "./RecoverScreen";

function LoginScreen ({ navigation }) {
return (
    <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="E-mail" mode="outlined" style={styles.input}/>
        <TextInput label="Senha" mode="outlined" style={styles.input}/>
        <Button mode="contained" onPress={() => navigation.navigate("Playlist") } style={styles.input}>Entrar</Button>
        <Text style={styles.info}>Esqueceu sua Senha? <Text onPress={() => navigation.navigate("RecuperarSenha")} style={styles.link}>Recuperar Senha</Text></Text>
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
        marginBottom: 16
    },

    link: {
        color: "#6750A4"
    },
})

export default LoginScreen;