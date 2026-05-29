import { waitFor, renderHook } from '@testing-library/react-native';
import { useApi } from '../hooks/useApi';

describe('useApi hook', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                user: [{
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
                }]
            })
        })) as jest.Mock;
    })

    test('initiate with loading state', async () => {
        const { result } = renderHook(() => useApi());
        expect(result.current.loading).toBe(true);
        await waitFor(() => expect(result.current.loading).toBe(false));
    });
    test('fetch data correctly', async () => {
        const { result } = renderHook(() => useApi());
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.data[0].id).toBe(2);
            expect(result.current.data[0].name).toBe('Michael Williams');

        });
    });
    test('handles error fetch correctly', async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error('Network error')));
        const { result } = renderHook(() => useApi());
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.error).toBe(true);
        })
    });

})