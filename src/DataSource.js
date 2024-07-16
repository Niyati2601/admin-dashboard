export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'snow@gmail.com',
        status: 'active',
       age: 35,
    },
    {
        id: 2,
        username: 'Jamie Lannister',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'lannister@gmail',
        status: 'passive',
        age: 42,
    },
    {
        id: 3,
        username: 'Lannister',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'lannister@gmail',
        status: 'pending',
        age: 45,
    },
    {
        id: 4,
        username: 'Stark',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'stark@gmail',
        status: 'active',
        age: 16,
    },
    {
        id: 5,
        username: 'Targaryen',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'targaryen@gmail',
        status: 'passive',
        age: 22,
    },
    {
        id: 6,
        username: 'Melisandre',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'melisandre@gmail',
        status: 'active',
        age: 15,
    },
    {
        id: 7,
        username: 'Clifford',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'clifford@gmail',
        status: 'passive',
        age: 44,
    },
    {
        id: 8,
        username: 'Frances',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'frances@gmail',
        status: 'active',
        age: 36,
    },
    {
        id: 9,
        username: 'Roxie',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'roxie@gmail',
        status: 'pending',
        age: 65,
    },
    {
        id: 10,
        username: 'Jane',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'jane@gmail',
        status: 'active',
        age: 25,
    },
    {
        id: 11,
        username: 'John',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s',
        email: 'john@gmail',
        status: 'active',
        age: 35,
    },
];

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },  
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <span className={`cellWithStatus ${params.row.status}`}>{params.row.status}</span>
            );
        },
    },
];