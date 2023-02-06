import {NextPage} from "next";
import React from "react";
import {useFindDoctors} from "../../hooks/api/doctor";
import DataTable from "react-data-table-component";

const Doctors: NextPage = ({}) => {
    const {data: doctors} = useFindDoctors();
    let doctorNumber = 0;
    if (doctors) {
        doctorNumber = doctors.length
    }

    const columns = [
        {
            name: 'Noms',
            selector: row => row.firstName + ' ' + row.lastName,
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phoneNumber',
            sortable: true,
        },
        {
            name: 'Spécialité',
            selector: 'speciality',
            sortable: true,
        },
    ];

    return (
        <section className='p-8'>
            <div className='space-y-8'>
                <div className='w-full border-x border-t rounded-lg'>
                    <DataTable
                        title={doctorNumber + " Médecins"}
                        columns={columns}
                        data={doctors}
                        pagination
                        responsive={true}
                        highlightOnHover
                    />
                </div>
            </div>
        </section>
    )
};

export default Doctors;
