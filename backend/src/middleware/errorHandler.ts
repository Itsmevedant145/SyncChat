import type { Request, Response, NextFunction } from 'express';
export const errorHandler = (err:Error,req:Request,res:Response,_next:NextFunction) => {
    console.log('Error in errorHandler middleware:', err);
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
        message: err.message || 'Server error',
        stack: process.env.NODE_ENV === 'Development' ? '🥞' : err.stack
    });
}
