import axios from "./axios";
import {apiRoutes} from "../constants";
import {INurse} from "../types/nurse";

export const findNurseByUserId = async ({queryKey}) => {
    const {data} = await axios.get<INurse>(`${apiRoutes.NURSES}/user/${queryKey[1]}`);
    return data;
}

export const findNurseByNurseId = async ({queryKey}) => {
    const {data} = await axios.get<INurse>(`${apiRoutes.NURSES}/${queryKey[1]}`);
    return data;
}

export const findNurses = async () => {
    // const {data} = await axios.get<INurse[]>(`${apiRoutes.NURSES}`);
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
