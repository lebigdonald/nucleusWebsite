import {useQuery} from "react-query";
import {findNurseByNurseId, findNurseByUserId, findNurses} from "../../api/nurse";

export const useFindNurseByUserId = (nurseUserId: string) => {
    return useQuery(["nurses", nurseUserId], findNurseByUserId, {
        enabled: !!nurseUserId
    })
}

export const useFindNurseByNurseId = (nurseId: string) => {
    return useQuery(["nurses", nurseId], findNurseByNurseId, {
        enabled: !!nurseId
    })
}

export const useFindNurses = () => {
    return useQuery([], findNurses, {
        enabled: !! []
    })
}
