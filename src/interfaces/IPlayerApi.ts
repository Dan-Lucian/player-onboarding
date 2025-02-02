export interface IPlayerApi {
    cssSelector: string;
    playlist: { video: string; streamingManifest: string }[];
    shouldUseIma: boolean;
    isFloatingEnabled: boolean;
    volume: number;
}
