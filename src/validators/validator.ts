import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';

function validateId (req: Request, res:Response, next:NextFunction) {

    const { contactId } = req.params;

    if( !Types.ObjectId.isValid( contactId ) ) throw Error("Id is not valid"); 

    next();
}

export default { validateId } ;