import { Stream } from "stream";

export interface Upload {
    name: string
    mimeType: string
    file: string
    createReadStream: () => Stream
}