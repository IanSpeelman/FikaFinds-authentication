import { Request, Response } from 'express'
import checkValidData from '../utils/checkValidData'
import User from '../models/userModel'

export function login(req: Request, res: Response) {
    res.json(req.body)
}
export async function register(req: Request, res: Response) {
    const user = checkValidData(req.body)
    if (user) {
        try {
            await User.create({ ...user, admin: false })
        } catch (err) {
            console.log("something went wrong saving this user", err)
        }
    }

    res.json(user)
}
