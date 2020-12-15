import { Router } from 'express'
import { getEvent, updateEvent, deleteEvent } from '../controllers'

const EVENT= "/event"

const router = Router()

export const routes = [
    router.get(EVENT, getEvent),
    router.post(EVENT, updateEvent),
    router.delete(EVENT, deleteEvent)
]
    