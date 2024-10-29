"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const placeholder_1 = require("./placeholder");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});
app.get('/placeholder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, placeholder_1.fetchPlaceholderData)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch placeholder data" });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
