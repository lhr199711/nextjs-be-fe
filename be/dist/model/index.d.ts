import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    name: string;
    nickName?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    nickName?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    nickName?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    nickName?: string | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    nickName?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    nickName?: string | null;
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
        nickName?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        nickName?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    nickName?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    nickName?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Book: mongoose.Model<{
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
}, mongoose.Document<unknown, {}, {
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
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
        name?: string | null;
        author?: string | null;
        description?: string | null;
        publishAt?: number | null;
        bookNo?: string | null;
        cover?: string | null;
        stock?: number | null;
        category?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt: string;
        name?: string | null;
        author?: string | null;
        description?: string | null;
        publishAt?: number | null;
        bookNo?: string | null;
        cover?: string | null;
        stock?: number | null;
        category?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: string;
    name?: string | null;
    author?: string | null;
    description?: string | null;
    publishAt?: number | null;
    bookNo?: string | null;
    cover?: string | null;
    stock?: number | null;
    category?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=index.d.ts.map