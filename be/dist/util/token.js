"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const const_1 = require("./const");
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ id: userId }, const_1.JWT_SECRET, {
        expiresIn: const_1.JWT_EXPIRE,
    });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, const_1.JWT_SECRET);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map