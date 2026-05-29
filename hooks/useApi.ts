import { useState } from 'react';
export const useApi = () => {
    const [loading, setLoading] = useState(true);

    return {
        loading
    }
}
