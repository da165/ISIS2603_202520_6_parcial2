export interface Track {
    name: string;
    minutes: number;
    seconds: number;
    spotify_id?: string;
    loved?: boolean;
}

export interface album {
    id: number;
    title: string;
    bandId: number;
    releaseYear: number;
    tracks?: Track[];
}
