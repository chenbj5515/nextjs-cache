"use server"
import { promises as fs } from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function changeFile() {
    const filePath = path.join(process.cwd(), 'data.json');
    const newData = { sharedValue: Math.random() };

    try {
        await fs.writeFile(filePath, JSON.stringify(newData, null, 2));
        console.log("File written successfully:", filePath);
        revalidatePath("/other-route")
    } catch (error) {
        console.error("Error writing file:", error);
    }
}