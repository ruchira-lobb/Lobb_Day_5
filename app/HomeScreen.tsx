import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Lobb Day 5</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
    },
});

