import { fileURLToPath } from 'url';
import { join } from "path";
import * as fs from "fs";

const filename = "fileToRemove.txt";
const folder = "files";
const errorMessage = "Failed to delete the file";
const pathToFile = join(fileURLToPath(import.meta.url), "..", folder, filename);
const remove = async () => {
    try {
        await fs.promises.access(pathToFile, fs.constants.F_OK);
        await fs.promises.unlink(pathToFile);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await remove();


