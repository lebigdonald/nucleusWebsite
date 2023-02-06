import {useQuery} from "react-query";
import {findDoctorByDoctorId, findDoctorByUserId, findDoctors} from "../../api/doctor";
import {findUser} from "../../api/user";
import {IDoctor, IDoctorWithDetails} from "../../types/doctor";

export const useFindDoctorByUserId = (doctorUserId: string) => {
    return useQuery(["doctors", doctorUserId], findDoctorByUserId, {
        enabled: !!doctorUserId
    })
}

export const useFindDoctorByDoctorId = (doctorId: string) => {
    return useQuery(["doctors", doctorId], findDoctorByDoctorId, {
        enabled: !!doctorId
    })
}

export const useFindDoctorWithDetails = (doctor: IDoctor) => {
    return useQuery(["doctors", doctor?.userId], findUser, {
        enabled: !!doctor,
        select: (user) => {
            return {
                ...doctor,
                ...user
            } as IDoctorWithDetails
        }
    })
}

export const useFindDoctors = () => {
    return useQuery([], findDoctors, {
        enabled: !! []
    })
}
