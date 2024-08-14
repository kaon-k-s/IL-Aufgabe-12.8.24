import { fileURLToPath } from 'url';
import {join} from "path";
import * as fs from "fs";

const oldFilename = "wrongFilename.txt";
const newFilename = "correctFilename.txt";
const folder = "files";
const errorMessage = "Failed to find the file";
const basePath = join(fileURLToPath(import.meta.url), "..");
const oldPathToFile = join(basePath, folder, oldFilename);
const newPathToFile = join(basePath, folder, newFilename);

const rename = async () => {
    try {
        await fs.promises.rename(oldPathToFile, newPathToFile);
        console.log(`File ${oldFilename} renamed to ${newFilename}`);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await rename();


