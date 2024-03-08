import { AbstractFileService } from "@medusajs/medusa"
import fs from 'fs';
import {
    DeleteFileType,
    FileServiceGetUploadStreamResult,
    FileServiceUploadResult,
    GetUploadedFileType,
    UploadStreamDescriptorType,
} from "@medusajs/types"
import { VercelBlob } from "../core/blob-sdk";

class BlobFileService extends AbstractFileService {

    static identifier = 'blob-fileservice' as const;

    protected blobClient: VercelBlob;

    constructor(container, options: any) {
        super(container, options)

        if (!options.auth) {
            throw new Error("Missing authentication options.")
        }

        this.blobClient = new VercelBlob(options.auth)
    }


    async upload(
        fileData: Express.Multer.File
    ): Promise<FileServiceUploadResult> {

        if (!fileData.mimetype.startsWith('image/')) {
            throw new Error('Invalid file type. Only images are allowed.')
        }
        const suffix = fileData.originalname.split('.').pop();

        const buffer_data = fs.readFileSync(fileData.path)
        const blob = await this.blobClient.upload(`${fileData.filename}.${suffix}`, buffer_data)
        return {
            key: blob.url,
            url: blob.url
        }
    }
    async uploadProtected(
        fileData: Express.Multer.File
    ): Promise<FileServiceUploadResult> {
        if (!fileData.mimetype.startsWith('image/')) {
            throw new Error('Invalid file type. Only images are allowed.')
        }

        const suffix = fileData.originalname.split('.').pop();
        
        const buffer_data = fs.readFileSync(fileData.path)
        const blob = await this.blobClient.upload(`${fileData.filename}.${suffix}`, buffer_data)
        return {
            key: blob.url,
            url: blob.url
        }
    }
    async delete(fileData: DeleteFileType): Promise<void> {
        await this.blobClient.delete(fileData.fileKey)
    }
    async getUploadStreamDescriptor(
        fileData: UploadStreamDescriptorType
    ): Promise<FileServiceGetUploadStreamResult> {
        throw new Error("Method not implemented.")
    }
    async getDownloadStream(
        fileData: GetUploadedFileType
    ): Promise<NodeJS.ReadableStream> {
        throw new Error("Method not implemented.")
    }
    async getPresignedDownloadUrl(
        fileData: GetUploadedFileType
    ): Promise<string> {
        throw new Error("Method not implemented.")
    }
}

export default BlobFileService