import { Request, Response } from 'express'
import { IEvent } from 'types';
import { Event } from '../models';
import { decode } from '../services/jwt';

export const getUserEvent = async (userId: string): Promise<IEvent | null>  => {
    return await Event.findOne({ userId })
}

export const getEvent = async (req: Request, res: Response): Promise<void> => {
    const authorizationHeader = req.header('Authorization')
    if(!authorizationHeader) throw Error
    //todo verify
    const [, token] = authorizationHeader.split(" ");
    const { sub: userId } = await decode(token) || { sub : null}

    const event = await getUserEvent(userId);
    if(event) {
        res.status(200).send(event)
        return
    }
    const _event = new Event({ userId })

    await _event.save();
    res.status(200).send(_event)

}

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
    const eventInfo: IEvent = req.body
    const authorizationHeader = req.header('Authorization')
    if(!authorizationHeader) throw Error
    //todo verify
    const [, token] = authorizationHeader.split(" ");
    const { sub: userId } = await decode(token) || { sub : null}
    const result = await Event.findOneAndUpdate({ userId}, eventInfo)
    res.status(200).send(result)
}

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    const eventInfo: IEvent = req.body
    const authorizationHeader = req.header('Authorization')
    if(!authorizationHeader) throw Error
    //todo verify
    const [, token] = authorizationHeader.split(" ");
    const { sub: userId } = await decode(token) || { sub : null}
    const result = await Event.findOneAndRemove({ userId})
    res.status(200).send(result)
}