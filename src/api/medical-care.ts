import axios from "./axios";
import {apiRoutes} from "../constants";
import {IMedicalCare, IMedicalCareCreate} from "../types/medical-care";

export const findPatientMedicalCares = async ({queryKey}) => {
    const params = {
        page: queryKey[2].page,
        size: queryKey[2].size
    }
    const {data, headers} = await axios.get<IMedicalCare[]>(
        `${apiRoutes.NURSES}/medical-cares/patient/${queryKey[1]}`,
        {params}
    );
    return {
        medicalCares: data,
        itemsCount: headers['x-total-count']
    };
}

export const findNurseMedicalCares = async ({queryKey}) => {
    const params = {
        page: queryKey[2].page,
        size: queryKey[2].size
    }
    const {data, headers} = await axios.get<IMedicalCare[]>(
        `${apiRoutes.NURSES}/medical-cares/nurse/${queryKey[1]}`,
        {params}
    );
    return {
        medicalCares: data,
        itemsCount: headers['x-total-count']
    };
}

export const findMedicalCares = async ({queryKey}) => {
    const params = {
        page: queryKey[2].page,
        size: queryKey[2].size
    }
    const {data, headers} = await axios.get<IMedicalCare[]>(
        `${apiRoutes.NURSES}/medical-cares/hospital/${queryKey[1]}`,
        {params}
    );
    return {
        medicalCares: data,
        itemsCount: headers['x-total-count']
    };
}

export const findMedicalCare = async ({queryKey}) => {
    const {data} = await axios.get<IMedicalCare>(`${apiRoutes.NURSES}/medical-cares/${queryKey[1]}`);
    return data;
}

export const createMedicalCare = async (medicalCare: IMedicalCareCreate) => {
    const {data} = await axios.post<IMedicalCare>(`${apiRoutes.NURSES}/medical-cares`, medicalCare);
    return data;
}

export const findMedicalCaress = async () => {
    // const {data} = await axios.get<IMedicalCare[]>(`${apiRoutes.NURSES}`);
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