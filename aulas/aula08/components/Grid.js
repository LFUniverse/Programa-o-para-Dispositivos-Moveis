import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";

function Grid () {
    const categorias = [
        "Restaurantes",
        "Bares",
        "Lanchonetes",
        "Pizzarias",
        "Sorveterias",
        "Cafeterias",
        "Padarias",
        "Mercados"
    ];

    return (
        <View>
            <FlatList 
                data={categorias} 
                numColumns={2}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => 
                    <Button>{item}</Button>
                }
            />
        </View>
    );
}

export default Grid;