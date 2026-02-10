"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockToken = exports.Book = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = "mongodb://localhost:27017/";
const userModel_1 = __importDefault(require("./userModel"));
const bookModel_1 = __importDefault(require("./bookModel"));
const blockTokenModel_1 = __importDefault(require("./blockTokenModel"));
async function main() {
    await mongoose_1.default.connect(uri);
}
main()
    .then((res) => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.log("Connected to MongoDB failed");
});
exports.User = mongoose_1.default.model("User", userModel_1.default);
exports.Book = mongoose_1.default.model("Book", bookModel_1.default);
exports.BlockToken = mongoose_1.default.model("BlockToken", blockTokenModel_1.default);
//# sourceMappingURL=index.js.map