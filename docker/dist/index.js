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
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/user', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, employee } = req.body;
        try {
            const user = yield db_1.User.create({
                name,
                email,
                employee
            });
            return res.status(200).json({
                msg: "Your data has been saved",
                id: user.id,
                name: user.name
            });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({
                mag: "there some issue in the databse"
            });
        }
    });
});
app.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_1.User.find({});
        return res.status(200).json(user);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            msg: "Some error in the databse"
        });
    }
}));
app.listen(3000, () => {
    console.log("post listening on 3000");
});
