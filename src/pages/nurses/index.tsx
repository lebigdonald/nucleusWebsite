import {NextPage} from "next";
import React from "react";
import {useFindNurses} from "../../hooks/api/nurse";
import DataTable from "react-data-table-component";

const Nurses: NextPage = ({}) => {
    const {data: nurses} = useFindNurses();
    let nurseNumber = 0;
    if (nurses) {
        nurseNumber = nurses.length
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
        }
    ];

    return (
        <section className='p-8'>
            <div className='space-y-8'>
                <div className='w-full border-x border-t rounded-lg'>
                    <DataTable
                        title={nurseNumber + " Infirmier(e)s"}
                        columns={columns}
                        data={nurses}
                        pagination
                        responsive={true}
                        highlightOnHover
                    />
                </div>
            </div>
        </section>
    )
};

export default Nurses;
