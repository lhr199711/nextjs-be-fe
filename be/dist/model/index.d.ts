import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    password: string;
    role: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    password: string;
    role: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    password: string;
    role: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    password: string;
    role: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    password: string;
    role: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    password: string;
    role: string;
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
        name: string;
        password: string;
        role: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        password: string;
        role: string;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    password: string;
    role: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    password: string;
    role: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Book: mongoose.Model<{
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
}, mongoose.Document<unknown, {}, {
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
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
        customData: any;
        createdAt: string;
        updatedAt: string;
        name?: string | null;
        author?: string | null;
        description?: string | null;
        topic?: string | null;
        what?: string | null;
        how?: string | null;
        think?: string | null;
        why?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        customData: any;
        createdAt: string;
        updatedAt: string;
        name?: string | null;
        author?: string | null;
        description?: string | null;
        topic?: string | null;
        what?: string | null;
        how?: string | null;
        think?: string | null;
        why?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    customData: any;
    createdAt: string;
    updatedAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    topic?: string | null;
    what?: string | null;
    how?: string | null;
    think?: string | null;
    why?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const BlockToken: mongoose.Model<{
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
}>, {
    token: string;
    userId: mongoose.Types.ObjectId;
    expiresAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=index.d.ts.map