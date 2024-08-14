import { fileURLToPath } from 'url';
import {join} from "path";
import * as fs from "fs";

const successText = "I am fresh and young";
const filename = "fresh.txt";
const folder = "files";
const errorMessage = "FS Operation failed";
const pathToFile = join(fileURLToPath(import.meta.url), "..", folder, filename);
const data = new Uint8Array(Buffer.from(successText));
const create = async ()=> {
    try{
        await fs.promises.writeFile(pathToFile, data, {	flag: "wx" })
    } catch (error){
        throw new Error(errorMessage);
    }
};

await create();

