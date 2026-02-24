import { Pressable, StatusBar, StyleSheet, Text } from "react-native";
import { View } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";

function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#f5f5f5' />
            <View>
                <Text style={styles.logoText}>Estate Facility Booking</Text>
            </View>
            <View>
                <Pressable>
                    <Text>Log In</Text>
                </Pressable>
                <Pressable>
                    <Text>Create an Account</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
    },
    logoText: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 40,
        textAlign: "center"
    }
})

export default WelcomeScreen;