import { Request, Response, NextFunction } from 'express'

export const checkLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Session:", req.session);
  if (req.session && req.session.isLoggedIn) {
    next()
    return
  }
  res.status(403).json({ message: "You are not allowed to access this resource!" })
}


// Middleware to check if the session contains a valid user
// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   if (!req.session || !req.session.user) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   next();
// };

// // Export both middlewares
// export default { checkLoggedIn, authMiddleware };



export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if(!req.session || !req.session.user) {
    return res.status(401).json({message: "Unauthorized To access This Page !Soory"})
  }
  next()
}

export default {checkLoggedIn, authMiddleware}