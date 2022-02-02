<<<<<<< HEAD
import { Link, Card } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import VacanciesTable from 'Components/templates/DataTable';

const VacanciesData = () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title' },
        { field: 'company', headerName: 'Company' },
        { field: 'salary', headerName: 'Salary' },
        { field: 'date_application', headerName: 'Date' },
        {
            field: 'Actions',
            renderCell: (cellValues) => {
                return (
                    <Link
                        href={`#${cellValues.row.url}`}
                        key={cellValues.row.id}
                        to={`/vacancies/${cellValues.row.id}`}
                    >
                        {' '}
                        <EditIcon />{' '}
                    </Link>
                );
            },
        },
    ];

    return (
        <Card>
            <VacanciesTable columns={columns} endpoint={endpoint} />
        </Card>
    );
};

export default VacanciesData;
=======
import React, { useEffect, useState } from 'react';
import { Link, Card } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getVacancies } from '../../modules/vacancies/vacancy.request';

const VacanciesData = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        const getVacanciesData = async () => {
            const currentVacancies = await getVacancies();
            setVacancies(currentVacancies);
        };
        getVacanciesData();
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title' },
        { field: 'company', headerName: 'Company' },
        { field: 'link', headerName: 'Link' },
        { field: 'salary', headerName: 'Salary' },
        { field: 'notes', headerName: 'Notes' },
        { field: 'date_application', headerName: 'Date' },
        {
            field: 'Actions',
            renderCell: (cellValues) => {
                return (
                    <Link
                        href={`/vacancies/${cellValues.row.id}`}
                        key={cellValues.row.id}
                        to={`/vacancies/${cellValues.row.id}`}
                    >
                        <EditIcon />{' '}
                    </Link>
                );
            },
        },
    ];

    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };

    return (
        <Card>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={vacancies}
                    columns={columns}
                    checkboxSelection
                    onCellClick={handleCellClick}
                    onRowClick={handleRowClick}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </Card>
    );
};

export default VacanciesData;
>>>>>>> platzimaster/deploy
