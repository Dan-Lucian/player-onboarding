import { IMA_AD_URL, VIDEO_AD_URL, VPAID_AD_URL } from 'mocks/adUrls';
import { getRandomValueFromArray } from 'utils/generalUtils';

// TODO: move to sepparate module
export class AdService {
    private adUrls = [VPAID_AD_URL, VIDEO_AD_URL, IMA_AD_URL];

    public static async requestAdByUrl(url: string): Promise<string> {
        let response;
        try {
            response = await fetch(url, {
                method: 'GET'
            });
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert('Ad request failed, disable ad blockers and try again');
        }

        if (!response) {
            throw new Error('Empty response');
        }

        const decodedResponse = await response.text();
        if (!response.ok) {
            throw new Error(decodedResponse);
        }

        return decodedResponse;
    }

    public getRandomAdUrl(): string {
        return getRandomValueFromArray(this.adUrls);
    }
}
