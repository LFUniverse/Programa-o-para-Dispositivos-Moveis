import { ScrollView,  StyleSheet,  View } from "react-native";
import { List } from "react-native-paper";

const Music = [
    {
        id: 1,
        musica: "Música 1",
        artista: "Artista 1",
    },
    {
        id: 2,
        musica: "Música 2",
        artista: "Artista 2",
    },
    {
        id: 3,
        musica: "Música 3",
        artista: "Artista 3",
    },
    {
        id: 4,
        musica: "Música 4",
        artista: "Artista 4",
    },
]

function MusicScreen ({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                {Music.map((Music) => (
                    <List.Item
                        key={Music.id}
                        title={Music.musica}
                        description={Music.artista}
                        left={ () => <List.Icon icon="music" />}
                        onPress={() => {} }
                    />
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});


export default MusicScreen;