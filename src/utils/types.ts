export type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface UserTypeComplete extends UserType {
    id: number,
    admin: boolean
}
