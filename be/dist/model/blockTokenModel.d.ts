import mongoose from "mongoose";
declare const blockTokenSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
}, mongoose.Document<unknown, {}, {
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
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
        token: string;
        userId: mongoose.Types.ObjectId;
        expiresAt: NativeDate;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        token: string;
        userId: mongoose.Types.ObjectId;
        expiresAt: NativeDate;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default blockTokenSchema;
//# sourceMappingURL=blockTokenModel.d.ts.map