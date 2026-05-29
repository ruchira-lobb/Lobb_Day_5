import React from 'react';
import { screen, render } from '@testing-library/react-native';
import { UserCard } from '../components/UserCard';

describe('UserCard component', () => {

    const mockUser = {
        "id": 2,
        "name": "Michael Williams",
        "company": "XYZ Corp",
        "username": "michael_williams",
        "email": "michael.williams@xyzcorp.com",
        "address": "456 Elm Ave",
        "zip": "67890",
        "state": "New York",
        "country": "USA",
        "phone": "+1-555-987-6543"
    };


    test('renders user identity headers correctly', () => {
        render(<UserCard user={mockUser} />);

        expect(screen.getByText('Michael Williams')).toBeTruthy();
        expect(screen.getByText('@michael_williams')).toBeTruthy();
    });


    test('renders specific company and email data values', () => {
        render(<UserCard user={mockUser} />);

        expect(screen.getByText('XYZ Corp')).toBeTruthy();
        expect(screen.getByText('michael.williams@xyzcorp.com')).toBeTruthy();
    });


});
