import { createContext, useState } from "react";
import { loginUser, logoutUser } from '../api/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRouter } from "expo-router";

export const UserContext = createContext();

function UserProvider({children}) {
    const router = useRouter();
    const navigation = useNavigation();
    const [loginErr, setLoginErr] = useState('');
    const [tokenValid, setTokenValid] = useState(false);

    async function handleLogin(number, pin) {
        try {
            const token = await loginUser(number, pin);
            await AsyncStorage.setItem("token", token.token);
            setTokenValid(true);
            setLoginErr('');
            return true;
        }
        catch (err) {
            setLoginErr(err.message);
            setTokenValid(false);
            return false;
        }
    }

    async function logoutHandler() {
        await AsyncStorage.removeItem("token");
        logoutUser();
        setTokenValid(false);
    }

    return (
        <UserContext.Provider value={{handleLogin, logoutHandler, loginErr, tokenValid, setTokenValid }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;