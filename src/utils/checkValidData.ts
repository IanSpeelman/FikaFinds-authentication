import { UserType } from "./types";

export default function checkValidData(body: UserType): UserType | false {
  const { email, password, firstName, lastName } = body

  if (email && password && firstName && lastName) {
    return {
      email,
      password,
      firstName,
      lastName
    }
  }

  return false
}
