import axios from "./axios";
import {apiRoutes} from "../constants";
import {IDiagnosis, IDiagnosisCreate} from "../types/diagnosis";
import {IPatient} from "../types/patient";

export const findPatientByUserId = async ({queryKey}) => {
    const {data} = await axios.get<IPatient>(`${apiRoutes.PATIENTS}/user/${queryKey[1]}`);
    return data;
}

export const findPatientByPatientId = async ({queryKey}) => {
    const {data} = await axios.get<IPatient>(`${apiRoutes.PATIENTS}/${queryKey[1]}`);
    return data;
}

export const findPatients = async () => {
    // const {data} = await axios.get<IPatient[]>(`${apiRoutes.PATIENTS}`);
    // return data;

    return [
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        },
        {
            firstName: "Uta",
            lastName: "STUART",
            email: "doctor@doc.com",
            phoneNumber: "+237685236985",
            gender: "M",
            bloodGroup: "O+",
            rhesusFactor: ""
        }
    ]
}
