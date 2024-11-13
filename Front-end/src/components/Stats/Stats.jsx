//import React from 'react'
import './Stats.css'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookIcon from '@mui/icons-material/Book';
import { useEffect, useState } from 'react';
import api from '../../api/api';

function Stats() {

    const [data,setData] = useState({});

    useEffect(()=>{
        const getBookCount=async()=>{
            const response = await api.get("/books/");
            const numBooks = response.data.length;
            setData(prvState=>({...prvState,noBooks:numBooks}));

        }
        const getUserCount=async()=>{
            const response = await api.get("/users/allmembers")
            const numUsers = response.data.length;
            setData(prvState=>({...prvState,noUsers:numUsers}));

        }
        getBookCount();
        getUserCount();
    },[])
    console.log("np",data);
    return (
        <div className='stats position-absolute top-50'>
             <div className='stats-block'>
                <LibraryBooksIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Total Books</p>
                <p className='stats-count'>{data.noBooks}</p>
            </div>
            <div className='stats-block'>
                <LocalLibraryIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Total Members</p>
                <p className='stats-count'>{data.noUsers}</p>
            </div>
            <div className='stats-block'>
                <BookIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Reservations</p>
                <p className='stats-count'>54</p>
            </div> 
        </div>
    )
}

export default Stats