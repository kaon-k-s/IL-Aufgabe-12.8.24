import { fileURLToPath } from 'url';
import {join} from "path";
import * as fs from "fs";

const filename = "fileToRead.txt";
const folder = "files";
const errorMessage = "Failed to read the file";
const pathToFile = join(fileURLToPath(import.meta.url), "..", folder, filename);

const read = async () => {
    try{
        const data = await fs.promises.readFile(pathToFile, 'utf8');
        console.log(data);
        return data;
    } catch (error){
        throw new Error(errorMessage);
    }
};

await read();

