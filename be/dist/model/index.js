"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = "mongodb+srv://harry:harry1997@cluster0.tmqvhdt.mongodb.net/?appName=Cluster0";
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
//# sourceMappingURL=index.js.map