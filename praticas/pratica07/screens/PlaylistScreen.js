import { ScrollView,  StyleSheet,  View } from "react-native";
import { List } from "react-native-paper";

const PLaylistes = [
    {
        id: 1,
        Playlist: "Playlist 1",
        musicas: "10 músicas",
    },
    {
        id: 2,
        Playlist: "Playlist 2",
        musicas: "5 músicas",
    },
    {
        id: 3,
        Playlist: "Playlist 3",
        musicas: "8 músicas",
    },
]

function PlaylistScreen ({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                {PLaylistes.map((PLaylistes) => (
                    <List.Item
                        key={PLaylistes.id}
                        title={PLaylistes.Playlist}
                        description={PLaylistes.musicas}
                        left={ () => <List.Icon icon="folder-music-outline" />}
                        onPress={() => navigation.navigate("Music") }
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


export default PlaylistScreen;