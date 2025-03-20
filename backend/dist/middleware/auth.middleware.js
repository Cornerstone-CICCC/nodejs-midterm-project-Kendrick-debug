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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.checkLoggedIn = void 0;
const checkLoggedIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Session:", req.session);
    if (req.session && req.session.isLoggedIn) {
        next();
        return;
    }
    res.status(403).json({ message: "You are not allowed to access this resource!" });
});
exports.checkLoggedIn = checkLoggedIn;
// Middleware to check if the session contains a valid user
// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.session || !req.session.user) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   next();
// };
// // Export both middlewares
// export default { checkLoggedIn, authMiddleware };
const authMiddleware = (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({ message: "Unauthorized To access This Page !Soory" });
    }
    next();
};
exports.authMiddleware = authMiddleware;
exports.default = { checkLoggedIn: exports.checkLoggedIn, authMiddleware: exports.authMiddleware };
