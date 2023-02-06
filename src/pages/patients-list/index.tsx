import {NextPage} from "next";
import React from "react";
import DataTable from "react-data-table-component";
import {useFindPatients} from "../../hooks/api/patient";

const PatientsList: NextPage = ({}) => {
    const {data: patients} = useFindPatients();
    let patientNumber = 0;
    if (patients) {
        patientNumber = patients.length
    }

    const columns = [
        {
            name: 'Noms',
            selector: row => row.firstName + ' ' + row.lastName,
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
            name: 'Sexe',
            selector: 'gender',
            sortable: false,
        },
        {
            name: 'Groupe Sanguin',
            selector: 'bloodGroup',
            sortable: false,
        },
        {
            name: 'Rhesus',
            selector: 'rhesusFactor',
            sortable: false,
        }
    ];

    return (
        <section className='p-8'>
            <div className='space-y-8'>
                <div className='w-full border-x border-t rounded-lg'>
                    <DataTable
                        title={patientNumber + " Patients"}
                        columns={columns}
                        data={patients}
                        pagination
                        responsive={true}
                        highlightOnHover
                    />
                </div>
            </div>
        </section>
    )
};

export default PatientsList;