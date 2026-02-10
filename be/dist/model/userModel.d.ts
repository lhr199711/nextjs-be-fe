import mongoose from "mongoose";
interface IUser {
    name: string;
    password: string;
    role: string;
}
interface IUserMethods {
    matchPassword(enteredPassword: string): Promise<boolean>;
}
declare const userSchema: mongoose.Schema<IUser, mongoose.Model<IUser, {}, IUserMethods, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & Omit<IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "matchPassword"> & IUserMethods, any, IUser>, IUserMethods, {}, {}, {}, mongoose.DefaultSchemaOptions, IUser, mongoose.Document<unknown, {}, IUser, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "matchPassword" | "id"> & {
    id: string;
} & IUserMethods, {
    name?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "matchPassword" | "id"> & {
        id: string;
    } & IUserMethods>;
    password?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "matchPassword" | "id"> & {
        id: string;
    } & IUserMethods>;
    role?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "matchPassword" | "id"> & {
        id: string;
    } & IUserMethods>;
}, IUser>;
export default userSchema;
//# sourceMappingURL=userModel.d.ts.map