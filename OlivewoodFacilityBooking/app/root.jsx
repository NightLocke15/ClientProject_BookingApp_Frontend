import { UserContext } from '@/contexts/UserContext';
import { Stack } from 'expo-router';
import { useContext } from 'react';


function Root() {
    const { tokenValid } = useContext(UserContext);

    return (
        <Stack screenOptions={{ headerShown: false, headerTitle: "OlivewoodFacilityBooking", headerShadowVisible: false}}>
            {tokenValid ? [
                <Stack.Screen name='facilities/facilities' />,
                <Stack.Screen name='settings/settings' />
            ] : [
                <Stack.Screen name='index' />,
                <Stack.Screen name='accounts/login' />,
                <Stack.Screen name='accounts/createAccount' />,
                <Stack.Screen name='accounts/pinResetInfo' />,
                <Stack.Screen name='accounts/resetDenied' />
            ]}        
        </Stack>
    )
}

export default Root;

