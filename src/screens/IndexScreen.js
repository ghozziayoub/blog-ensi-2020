import React from "react"
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

    const blog = [
        { _id: "1", title: "title #1", content: "content #1" },
        { _id: "2", title: "title #2", content: "content #2" },
        { _id: "3", title: "title #3", content: "content #3" },
        { _id: "4", title: "title #4", content: "content #4" },
        { _id: "5", title: "title #5", content: "content #5" },
    ]

    return (
        <View>
            <FlatList
                data={blog}
                keyExtractor={blogPost => blogPost._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show')}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Feather style={styles.icon} name="trash" color="black" />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = () => {

    return {
        headerRight: () => {

            return (
                <View>
                    <Feather style={styles.iconHeader} name="plus" color="black" />
                </View>
            )

        }
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    icon: {
        fontSize: 24,
    },
    iconHeader: {
        fontSize: 24,
        marginRight: 10
    },
    title: {
        fontSize: 18
    }
})

export default IndexScreen