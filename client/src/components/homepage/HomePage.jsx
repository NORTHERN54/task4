import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/userList";
import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {useEffect} from "react";

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getUsers())
    })
    const userList = useSelector(state => state.users)
    //const userList = useEffect(() => {
    //    dispatch(getUsers())
    //})

    const columns = [
        {field: 'id', headerName: 'ID', width: 70} /*,
        {field: 'email', headerName: 'Email', width: 70}

        {field: 'firstName', headerName: 'First name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        },*/
    ];

    const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
        {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
        {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
        {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
        {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
        {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
    ];

    var rows1 ; // userList1 === undefined ? rows : Array.from(userList1);

    if (userList === undefined) {
        rows1 = rows
    } else {
        rows1 = Array.from(userList);
        console.log(userList)
    }

    /*
    const rows1 = [];
    for (let i = 1; i< userList.length + 1; i++){
        rows1[i] = userList[i];
    }*/
    // Object.assign(rows, [] );

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid rows={rows1} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    );
}
export default HomePage;