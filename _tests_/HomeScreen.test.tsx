import { render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../app/HomeScreen';
import { useApi } from '../hooks/useApi';
import { User } from '../schema/User.Schema';

jest.mock('../hooks/useApi');
const mockedUseApi = useApi as jest.MockedFunction<typeof useApi>;

const sampleUsers: User[] = [
    {
        id: 2,
        name: 'Michael Williams',
        company: 'XYZ Corp',
        username: 'michael_williams',
        email: 'michael.williams@xyzcorp.com',
        address: '456 Elm Ave',
        zip: '67890',
        state: 'New York',
        country: 'USA',
        phone: '+1-555-987-6543',
        photo: undefined,
    },
];

describe('HomeScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading indicator while fetching', () => {
        mockedUseApi.mockReturnValue({ loading: true, data: [], error: false });
        const { getByTestId } = render(<HomeScreen />);

        expect(getByTestId('loading-indicator')).toBeTruthy();
    });

    test('renders user cards after data loads', () => {
        mockedUseApi.mockReturnValue({ loading: false, data: sampleUsers, error: false });
        const { getByText } = render(<HomeScreen />);

        expect(getByText('Michael Williams')).toBeTruthy();
        expect(getByText('XYZ Corp')).toBeTruthy();
        expect(getByText('@michael_williams')).toBeTruthy();
    });

    test('renders error message when API fails', () => {
        mockedUseApi.mockReturnValue({ loading: false, data: [], error: true });
        const { getByText } = render(<HomeScreen />);

        expect(getByText('Failed to load users.')).toBeTruthy();
    });
});

