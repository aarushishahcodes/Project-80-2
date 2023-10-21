import React, { Component } from 'react';
import { ImageBackground, Text, View } from 'react-native';

export default class DailyPicScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>DailyPic Screen!</Text>
            </View>
        )
    }
}

getAPOD = () => {
    axios
        .get("LfaG9RWh6XJZQgsBB9ZXJO4CZnZmsR46lVuimom1")
        .then(response => {
            this.setState({apod: response.data})

        })
        .catch(error => {
            Alert.alert(error.message)
        })
}

<View style = {styles.container}>
    <SafeAreaView style = {styles.droidSafeArea}/>
    <ImageBackground
        source={require(../assets/star-ImageBackground.jpg)} style={styles.backgroundImage}>
        <Text style={styles.routeText}> Astronomy picture of the day </Text>
        <Text style={styles.titleText}> {this.state.apod.title}</Text>
        <TouchableOpacity style={styles.listContainer}
        onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
        ></TouchableOpacity>

        <View style = {styles.iconContainer}>
            <Image source = {require('../assets/play-video.png')} style={( width:50, height:50)}></Image>
        </View>
        </TouchableOpacity>

        <Text style={style.explanationText}</Text>

        </ImageBackground>
        </View>