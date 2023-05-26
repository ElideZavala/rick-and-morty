export interface Characters {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
    origin: {
        name: string;
        url: string;
    };
    location?: {
        name: string;
        url: string;
    };
    episode: string[];
    url: string;
    type: string;
}