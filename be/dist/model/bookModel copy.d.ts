import mongoose from "mongoose";
declare const bookSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
}, mongoose.Document<unknown, {}, {
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        createdAt: string;
        updatedAt: string;
        name?: string | null;
        author?: string | null;
        description?: string | null;
        topic?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt: string;
        updatedAt: string;
        name?: string | null;
        author?: string | null;
        description?: string | null;
        topic?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default bookSchema;
//# sourceMappingURL=bookModel%20copy.d.ts.map