import {IUser} from "./user";

export type IDoctor = {
    userId: string
    doctorId: string
    nationalOrderId: string
    specialtyId: string
    biography: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    nationality: string
    address: string
    city: string
    country: string
    bornOn: string
    placeOfBirth: string
    avatarId?: string
    hospitalIds: string[]
}

export type IDoctorWithDetails = IDoctor & IUser
