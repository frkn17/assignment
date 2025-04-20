import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const fetchGoldPrice = async (): Promise<number> => {
    const url = process.env.GOLD_API_URL;
    const apiKey = process.env.GOLD_API_KEY;

    try {
        const response = await axios.get(url!, {
            headers: {
                'x-access-token': apiKey!,
                'Content-Type' : 'application/json'
            }
        });

        const price = response.data!.price;
        if (!price) {
            throw new Error("Invalid gold price response.");
        }

        return price;
    } catch (error) {
        console.error('Error fetching gold price:', error);
        throw new Error('Failed to fetch gold price.');
    }
}
