import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Add Field
export const addField = async (field: {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    extentSize: number;
    fieldImage1: string | null;
    fieldImage2: string | null;
}) => {
    try {
        const newField = await prisma.field.create({
            data: {
                fieldCode: field.fieldCode,
                fieldName: field.fieldName,
                fieldLocation: field.fieldLocation,
                extentSize: field.extentSize,
                fieldImage1: field.fieldImage1 || null,
                fieldImage2: field.fieldImage2 || null,
            },
        });
        return newField;
    } catch (err) {
        console.error("Error adding field:", err);
        throw err;
    }
};

// Delete Field
export const deleteField = async (fieldCode: string) => {
    try {
        const deletedField = await prisma.field.delete({
            where: {
                fieldCode: fieldCode,
            },
        });
        console.log('Field deleted successfully!!', fieldCode);
        return deletedField;
    } catch (err) {
        console.log("Error deleting field:", err);
        throw err;
    }
};

// Update Field
export const updateField = async (fieldCode: string, field: {
    fieldName: string;
    fieldLocation: string;
    extentSize: number;
    fieldImage1: string | null;
    fieldImage2: string | null;
}) => {
    try {
        const updatedField = await prisma.field.update({
            where: {
                fieldCode: fieldCode,
            },
            data: {
                fieldName: field.fieldName,
                fieldLocation: field.fieldLocation,
                extentSize: field.extentSize,
                fieldImage1: field.fieldImage1 || null,
                fieldImage2: field.fieldImage2 || null,
            },
        });
        console.log("Field updated successfully!!", updatedField);
        return updatedField;
    } catch (err) {
        console.log("Error updating field:", err);
        throw err;
    }
};

// Get All Fields
export const getField = async () => {
    try {
        return await prisma.field.findMany();
    } catch (err) {
        console.log("Error getting fields:", err);
        throw err;
    }
};