import { useRouter } from "expo-router";
import { Pressable, StatusBar, StyleSheet, Text } from "react-native";
import { View } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";


function WelcomeScreen() {
    const router = useRouter();

    function login() {
        router.navigate('/accounts/login');
    }

    function createAccount() {
        router.navigate('/accounts/createAccount')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#f5f5f5' />
            <View style={styles.logoHolder}>
                <Text style={styles.logoText}>Estate Facility Booking</Text>
            </View>
            <View style={styles.buttonHolder}>
                <Pressable style={({pressed}) => [
                    pressed ? styles.buttonPressed : styles.button,
                ]} onPress={login}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
                <Pressable style={({pressed}) => [
                    pressed ? styles.buttonPressed : styles.button,
                ]} onPress={createAccount}>
                    <Text style={styles.buttonText}>Register</Text>
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
    logoHolder: {
        flex: 1,
        marginTop: 150
    },
    logoText: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 40,
        textAlign: "center",
    },
    buttonHolder: {
        flex: 1,
    },
    button: {
        backgroundColor: "#588157",
        padding: 15,
        borderRadius: 25,
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonPressed: {
        backgroundColor: "#4c684b",
        padding: 15,
        borderRadius: 25,
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        fontFamily: 'Figtree-VariableFont_wght',
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    }
})

export default WelcomeScreen;