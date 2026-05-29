import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    user: {
        id: number;
        name: string;
        company: string;
        username: string;
        email: string;
        address: string;
        zip: string;
        state: string;
        country: string;
        phone: string;
        photo?: string;
    }
}

export const UserCard = ({ user }: Props) => {
    return (
        <View style={styles.card} testID="user-card-container">
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
                <Text style={styles.label}>Company:</Text>
                <Text style={styles.value}>{user.company}</Text>
            </View>

            <View style={styles.infoRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{user.email}</Text>
            </View>

            <View style={styles.infoRow}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>{user.phone}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        margin: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1A202C',
    },
    username: {
        fontSize: 14,
        color: '#718096',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E8F0',
        marginVertical: 12,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    label: {
        width: 80,
        fontSize: 14,
        fontWeight: '500',
        color: '#4A5568',
    },
    value: {
        flex: 1,
        fontSize: 14,
        color: '#2D3748',
    },
});
