import {NextPage} from "next";
import React from "react";
import {useFindNurses} from "../../hooks/api/nurse";
import DataTable from "react-data-table-component";
import {useFindMedicalCares, useFindMedicalCaress} from "../../hooks/api/medical-care";

const MedicalCaresList: NextPage = ({}) => {
    const {data: medicalCares} = useFindMedicalCaress()
    let medicalCareNumber = 0;
    if (medicalCares) {
        medicalCareNumber = medicalCares.length
    }

    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phoneNumber',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'DOB',
            selector: 'dob',
            sortable: false,
        },
    ];

    return (
        <section className='p-8'>
            <div className='space-y-8'>
                <div className='w-full border-x border-t rounded-lg'>
                    <DataTable
                        title={medicalCareNumber + " Prises en Charge"}
                        columns={columns}
                        data={medicalCares}
                        pagination
                        responsive={true}

                        highlightOnHover
                    />
                </div>
            </div>
        </section>
    )
};

export default MedicalCaresList;