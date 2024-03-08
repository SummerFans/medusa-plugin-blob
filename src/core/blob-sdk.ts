import { put, del, PutBlobResult } from '@vercel/blob';

export class VercelBlob {

    private token: string;

    constructor(
        token: string
    ) {
        this.token = token;
    }
    async upload(name: string, file: Buffer | File): Promise<PutBlobResult> {
        try {
            const blob = await put(name, file, {
                access: 'public',
                token: this.token,
                addRandomSuffix: false

            });
            return blob;
        } catch (error) {
            throw error;
        }
    }
    async delete(url: string): Promise<void> {
        try {
            const blob = await del(url, {
                token: this.token
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}