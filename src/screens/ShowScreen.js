import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = () => {

    const blogPost = {
        _id: "1",
        title: "title #1",
        content: "content #1"
    }

    return (
        <View style={styles.container}>
            <Text>ID : {blogPost._id}</Text>
            <Text>Title : {blogPost.title}</Text>
            <Text>Content : {blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = () => {

    return {
        headerRight: () => {

            return (
                <View>
                    <FontAwesome style={styles.iconHeader} name="pencil" color="black" />
                </View>
            )

        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    iconHeader: {
        fontSize: 24,
        marginRight: 10
    },
})

export default ShowScreen