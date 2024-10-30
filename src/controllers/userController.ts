import { Request, Response } from 'express'
import checkValidData from '../utils/checkValidData'
import User from '../models/userModel'
import { UserType } from '../utils/types'
import bcrypt from 'bcrypt'

export async function login(req: Request, res: Response) {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email: email } })
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (passwordMatch) {
      res.json({ status: "logging in success" }).end()
    }
    else {
      res.json({ status: "username and password combination do not match" }).end()
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

    } catch (err) {
      console.log("something went wrong saving this user", err)
    }
  }

  res.json(user)
}
