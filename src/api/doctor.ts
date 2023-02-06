import axios from "./axios";
import {apiRoutes} from "../constants";
import {IDoctor} from "../types/doctor";

export const findDoctorByUserId = async ({queryKey}) => {
    const {data} = await axios.get<IDoctor>(`${apiRoutes.DOCTORS}/user/${queryKey[1]}`);
    return data;
}

export const findDoctorByDoctorId = async ({queryKey}) => {
    const {data} = await axios.get<IDoctor>(`${apiRoutes.DOCTORS}/${queryKey[1]}`);
    return data;
}

export const findDoctors = async () => {
    // const {data} = await axios.get<IDoctor[]>(`${apiRoutes.DOCTORS}`);
    // return data;

    return [
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            speciality: "General"
        }
    ]
}
