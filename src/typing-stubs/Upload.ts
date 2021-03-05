import { Stream } from "stream";

export interface Upload {
    filename: string
    mimeType: string
    encoding: string
    createReadStream: () => Stream
}