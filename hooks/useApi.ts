import { useEffect, useState } from 'react';
import { API_CONFIG } from '../config/apiConfig';

export const useApi = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => { fetchFoods() }, []);
    const fetchFoods = async () => {
        try {
            const response = await fetch(`${API_CONFIG.BASE_URL}`)
            const json = await response.json();
            setData(json.user);
        }
        catch (err) { setError(true); }
        finally {

            setLoading(false);

        }

    }

    return { loading, data, error };

}