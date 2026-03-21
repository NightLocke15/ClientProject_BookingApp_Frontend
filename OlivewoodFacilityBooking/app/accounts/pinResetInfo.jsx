import { getAllUsers } from "@/api/api";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function PinResetInfo() {
    const [access, setAccess] = useState(false);
    const router = useRouter();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [unit, setUnit] = useState('');
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        async function findAllUsers() {
            const data = await getAllUsers();
            console.log(data);
            setAllUsers(data);
        }
        findAllUsers();
    }, []);

    function pinResetAttempt() {
        const allow = allUsers.filter((user) => user.name === name && user.number === number && user.unit === parseInt(unit));
        console.log(allow[0] && allow[0].resetreq === true);
        if (allow[0].resetreq) {
            router.push(`/accounts/resetGranted/${allow[0] && allow[0].id}`);
        }
        else {
            router.navigate('/accounts/resetDenied')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#f5f5f5' />
                <View style={styles.logoHolder}>
                    <Text style={styles.logoText}>Estate Facility Booking</Text>
                </View>
                <Text style={styles.loginText}>PIN Reset</Text>
                <View style={styles.formHolder}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput style={styles.input} placeholder="Name..." placeholderTextColor="#a3b18a" onChangeText={(e) => setName(e)} value={name} />
                    <Text style={styles.inputLabel}>Cell Number</Text>
                    <TextInput style={styles.input} placeholder="Cell Number..." placeholderTextColor="#a3b18a" onChangeText={(e) => setNumber(e)} value={number} />
                    <Text style={styles.inputLabel}>House Number</Text>
                    <TextInput style={[styles.input, {marginBottom: 8}]} placeholder="House Number..." placeholderTextColor="#a3b18a" onChangeText={(e) => setUnit(e)} value={unit} />
                    <Pressable style={({pressed}) => [
                        pressed ? styles.buttonPressed : styles.button
                    ]} onPress={pinResetAttempt}>
                        <Text style={styles.buttonText}>Continue</Text>
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
        flex: 0.3,
        marginTop: 150
    },
    logoText: {
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#344E41',
        fontSize: 40,
        textAlign: "center",
    },
    loginText: {
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
    resetLink: {
        marginLeft: 'auto',
        marginRight: 8,
        fontFamily: 'Figtree-VariableFont_wght',
        color: '#798366',
        fontSize: 16,
        textDecorationColor: '#798366',
        textDecorationLine: 'underline'
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
        marginTop: 40,
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
        marginTop: 40,
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

export default PinResetInfo;