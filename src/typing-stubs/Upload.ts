import { Stream } from "stream";

export interface Upload {
    filename: string
    mimeType: string
    file: string
    createReadStream: () => Stream
}