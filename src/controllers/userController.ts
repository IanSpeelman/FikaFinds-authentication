import { Request, Response } from 'express'
import checkValidData from '../utils/checkValidData'
import User from '../models/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const jwtSecret = process.env.JWTSECRET ? process.env.JWTSECRET : "supersecure"

export async function login(req: Request, res: Response) {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email: email } })
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (passwordMatch) {
      const jwtPayload = { email, admin: user.admin, firstName: user.firstName }
      const token = jwt.sign(jwtPayload, jwtSecret)
      res.set('Authorization', token)
      res.status(200).end()
    }
    else {
      res.status(406).end()
    }
  }
}
export async function register(req: Request, res: Response) {
  const user = checkValidData(req.body)
  if (user) {
    try {
      bcrypt.hash(user.password, 1, async (err, password) => {
        await User.create({ ...user, password, admin: false })
      })
      const jwtPayload = { email: user.email, admin: false, firstName: user.firstName }
      const token = jwt.sign(jwtPayload, jwtSecret)
      res.status(201).set('Authorization', token).end()

    } catch (err) {
      console.log("something went wrong saving this user", err)
      res.status(500).end()
    }
  }
  else {
    res.status(406).end()
  }
}

export function checkJWT(req: Request, res: Response) {
  const header = req.get('Authorization')?.split(" ")[1]
  if (header) {
    try {
      const result = jwt.verify(header, jwtSecret);
      res.status(200).end()
    }
    catch (err) {
      console.log(err)
      res.status(500).end()
    }
  }
  else {
    res.status(406).end()
  }
}
