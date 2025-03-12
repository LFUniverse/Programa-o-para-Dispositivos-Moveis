import { View, Text, StyleSheet } from "react-native";

function GaleriaScreen () {
    return (
        <View style={{flex: 1}}>
            <View>
                <View style={styles.Photo}>
                    <Text>Foto 1</Text>
                </View>
                <View style={styles.Photo}>
                    <Text>Foto 2</Text>
                </View>
                <View style={styles.Photo}>
                    <Text>Foto 3</Text>
                </View>
                <View style={styles.Photo}>
                    <Text>Foto 4</Text>
                </View>
                <View style={styles.Photo}>
                    <Text>Foto 5</Text>
                </View>
                <View style={styles.Photo}>
                    <Text>Foto 6</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Photo: {
        height: 100,
        width: 100,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default GaleriaScreen;