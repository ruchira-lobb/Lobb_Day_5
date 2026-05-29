import { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { UserCard } from '../components/UserCard';
import { useApi } from '../hooks/useApi';
import { User } from '../schema/User.Schema';

export default function HomeScreen() {
    const { loading, data, error } = useApi();
    const [visibleCount, setVisibleCount] = useState(4);

    const handleEndReached = () => {
        if (visibleCount < data.length) {
            setVisibleCount((prev) => Math.min(prev + 4, data.length));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Lobb Day 5</Text>

            {loading ? (
                <View style={styles.statusContainer}>
                    <ActivityIndicator testID="loading-indicator" size="large" color="#1A202C" />
                </View>
            ) : error ? (
                <View style={styles.statusContainer}>
                    <Text testID="error-message" style={styles.errorText}>
                        Failed to load users.
                    </Text>
                </View>
            ) : (
                <FlatList<User>
                    data={data.slice(0, visibleCount)}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <UserCard user={item} />}
                    contentContainerStyle={styles.list}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.5}
                    initialNumToRender={4}
                    ListEmptyComponent={<Text style={styles.emptyText}>No users available.</Text>}
                    ListFooterComponent={() =>
                        visibleCount < data.length ? (
                            <Text style={styles.footerText}>Loading more users...</Text>
                        ) : null
                    }
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 16,
        color: '#1A202C',
    },
    statusContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: '#E53E3E',
    },
    list: {
        paddingBottom: 24,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 16,
        color: '#4A5568',
    },
    footerText: {
        textAlign: 'center',
        marginVertical: 12,
        color: '#4A5568',
    },
});

