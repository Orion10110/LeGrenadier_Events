import { Document } from 'mongoose';

interface Token {
    fingerprint: string,
    token: string
}

export interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    tokens: Array<Token>
}

interface IBackground {
    source: string;
    type: string;
} 

export interface IEvent {
    userId: string;
    status: string;
    eventInfo: {
        invitationText: string;
        place: string;
        datetime: Date;
        mailMessage: string;
        mailSubject: string;
    }
    displayConfig: {
        fontSize: number;
        background: IBackground;
        cardBackground: IBackground;
    }
}

export interface IEventDocument extends IEvent, Document {}