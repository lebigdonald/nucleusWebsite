import {useQuery} from "react-query";
import {findPatientByPatientId, findPatientByUserId, findPatients} from "../../api/patient";
import {IPatient, IPatientWithDetails} from "../../types/patient";
import {findUser} from "../../api/user";
import {findDoctors} from "../../api/doctor";

export const useFindPatientByUserId = (patientUserId: string) => {
    return useQuery(["patients", patientUserId], findPatientByUserId, {
        enabled: !!patientUserId
    })
}

export const useFindPatientByPatientId = (patientId: string) => {
    return useQuery(["patients", patientId], findPatientByPatientId, {
        enabled: !!patientId
    })
}

export const useFindPatientWithDetails = (patient: IPatient) => {
    return useQuery(["patients", patient.userId], findUser, {
        enabled: !!patient,
        select: (user) => {
            return {
                ...patient,
                ...user
            } as IPatientWithDetails
        }
    })
}

export const useFindPatients = () => {
    return useQuery([], findPatients, {
        enabled: !! []
    })
}
