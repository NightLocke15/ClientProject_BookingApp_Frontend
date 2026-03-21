import { registerUser } from "@/api/api";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function CreateAccount() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [unit, setUnit] = useState('');
    const [pin, setPin] = useState('');


    function login() {
        router.navigate('/accounts/login');
    }

    function createAccount() {
        registerUser(name, number, unit, pin);
        router.navigate('/accounts/login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#f5f5f5' />
            <View style={styles.logoHolder}>
                <Text style={styles.logoText}>Estate Facility Booking</Text>
            </View>
            <Text style={styles.registerText}>Register</Text>
            <View style={styles.formHolder}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput style={styles.input} placeholder="Name..." placeholderTextColor="#a3b18a" onChangeText={(e) => setName(e)} value={name} />
                <Text style={styles.inputLabel}>Cell Number</Text>
                <TextInput style={styles.input} placeholder="Cell Number..." placeholderTextColor="#a3b18a" onChangeText={(e) => setNumber(e)} value={number} />
                <Text style={styles.inputLabel}>House Number</Text>
                <TextInput style={styles.input} placeholder="House Number..." placeholderTextColor="#a3b18a" onChangeText={(e) => setUnit(e)} value={unit} />
                <Text style={styles.inputLabel}>PIN</Text>
                <TextInput style={[styles.input, {marginBottom: 0}]} placeholder="PIN..." placeholderTextColor="#a3b18a" onChangeText={(e) => setPin(e)} value={pin} secureTextEntry={true} />
                <Text style={styles.pinText}>Choose a 5 digit PIN</Text>
                <Pressable style={({pressed}) => [
                   pressed ? styles.buttonPressed : styles.button
                ]} onPress={createAccount}>
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
                <Text style={styles.bottomText}>Already registered?</Text>
                <Pressable onPress={login}>
                    <Text style={styles.link}>Log In</Text>
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
        flex: 0.25,
        marginTop: 60
    },
    logoText: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 40,
        textAlign: "center",
    },
    registerText: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 20,
        textAlign: "center",
        marginBottom: 25
    },
    formHolder: {
        width: "80%",
        marginLeft: 'auto',
        marginRight: 'auto',
        flex: 1,
    },
    inputLabel: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 16,
        marginLeft: 8,
        marginBottom: 5
    },
    input: {
        borderWidth: 0.9,
        borderColor: "#3A5A40",
        borderRadius: 15,
        height: 40,
        width: "100%",
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: '#f5f5f5',
        color: '#344E41',
        fontFamily: 'Figtree-VariableFont_wght',
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 20
    },
    pinText: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 15,
        marginLeft: 8,
        marginTop: 5
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
        marginTop: 30,
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
        marginTop: 30,
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
    },
    bottomText: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 5,
    },
    link: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#798366',
        fontSize: 16,
        textDecorationColor: '#798366',
        textDecorationLine: 'underline'
    },
})

export default CreateAccount;