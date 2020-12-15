import * as mongoose from 'mongoose';
import { IEventDocument } from '../types'

const EventSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        default: 'created',
        trim: true
    },
    eventInfo: {
        invitationText: {
            type: String,
            default: '',
        },
        place: {
            type: String,
            default: '',
        },
        datetime: {
            type: Date,
        },
        mailMessage: {
            type: String,
            default: '',
        },
        mailSubject: {
            type: String,
            default: '',
        },
    },
    displayConfig: {
        fontSize: {
            type: Number,
            required: true,
            default: 14,
        },
        fontFamily: {
            type: String,
            required: true,
            default: 'Arial',
        },
        background: {
            source: {
                type: String,
            }, 
            type: {
                type: String,
            }
        },
        cardBackground: {
            source: {
                type: String,
            }, 
            type: {
                type: String,
            }
        }
    }
})

export const Event = mongoose.model<IEventDocument>('Event', EventSchema)
