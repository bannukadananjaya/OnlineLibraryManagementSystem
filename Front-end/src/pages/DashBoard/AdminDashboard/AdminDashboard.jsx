import { useState,useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

import "./AdminDashboard.css"
import AddTransaction from './components/AddTransaction'
import AddMember from './components/AddMember'
import AddBook from './components/AddBook';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GetMember from './components/GetMember';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import Return from './components/Return';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Profile from './components/profile'


function AdminDashboard() {

    const { user} = useContext(AuthContext);
    const [active, setActive] = useState("profile")
    const [sidebar, setSidebar] = useState(false)

    /* Logout Function*/
    const logout = () => {
        localStorage.removeItem("user");
        // dispatch("LOG_OUT");
        window.location.reload();
    }


    return (
        <div className="dashboard">
            <div className="dashboard-card">
                <div className="sidebar-toggle" onClick={() => setSidebar(!sidebar)}> 
                    <IconButton>
                        {sidebar ? <CloseIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)"}} /> : <DoubleArrowIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} />}
                    </IconButton>
                </div>

                {/* Sidebar */}
                <div className={sidebar ? "dashboard-options active" : "dashboard-options"}>
                    <div className='dashboard-logo'>
                        <AccountCircleIcon style={{ fontSize: 50 }} />
                        <p className="logo-name">ADMIN</p>
                    </div>
                    <p className={`dashboard-option ${active === "active" ? "clicked" : ""}`} onClick={() => { setActive("profile"); }}><AccountCircleIcon className='dashboard-option-icon' /> Profile</p> 
                    <p className={`dashboard-option ${active === "addbook" ? "clicked" : ""}`} onClick={() => { setActive("addbook"); setSidebar(false) }}><BookIcon className='dashboard-option-icon' />Add Book</p>
                    <p className={`dashboard-option ${active === "addtransaction" ? "clicked" : ""}`} onClick={() => { setActive("addtransaction"); setSidebar(false) }}><ReceiptIcon className='dashboard-option-icon' /> Add Transaction </p>
                    <p className={`dashboard-option ${active === "getmember" ? "clicked" : ""}`} onClick={() => { setActive("getmember"); setSidebar(false) }}><AccountBoxIcon className='dashboard-option-icon' /> Get Member </p>
                    <p className={`dashboard-option ${active === "addmember" ? "clicked" : ""}`} onClick={() => { setActive("addmember"); setSidebar(false) }}><PersonAddIcon className='dashboard-option-icon' /> Add Member </p>
                    <p className={`dashboard-option ${active === "returntransaction" ? "clicked" : ""}`} onClick={() => { setActive("returntransaction"); setSidebar(false) }}><AssignmentReturnIcon className='dashboard-option-icon' /> Return </p>
                    <p className={`dashboard-option`} onClick={logout}><PowerSettingsNewIcon className='dashboard-option-icon' /> Log out </p>

                </div>

                {/* right side */}
                <div className="dashboard-option-content">
                
              
                        <div className='dashboard-profile-content' style={active!=="profile"?{display:'none'}:{}}>
                            <Profile user={user}/>
                        </div>
                        <div className="dashboard-addbooks-content" style={active !== "addbook" ? { display: 'none' } : {}}>
                            <AddBook />
                        </div>
                        <div className="dashboard-transactions-content" style={active !== "addtransaction" ? { display: 'none' } : {}}>
                            <AddTransaction />
                        </div>
                        <div className="dashboard-addmember-content" style={active !== "addmember" ? { display: 'none' } : {}}>
                            <AddMember />
                        </div>
                        <div className="dashboard-addmember-content" style={active !== "getmember" ? { display: 'none' } : {}}>
                            <GetMember />
                        </div>
                        <div className="dashboard-addmember-content" style={active !== "returntransaction" ? { display: 'none' } : {}}>
                            <Return />
                        </div>
                  
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard