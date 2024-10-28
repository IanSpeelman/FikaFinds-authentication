import { Request, Response } from 'express'

export function login(req: Request, res: Response) {
    res.json({ func: 'login' })
}
export function register(req: Request, res: Response) {
    res.json({ func: 'register' })
}
