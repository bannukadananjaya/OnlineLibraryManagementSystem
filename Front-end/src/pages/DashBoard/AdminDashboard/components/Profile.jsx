import '../AdminDashboard.css';

const Profile = (user) => {
  return (
    <div>
        <div className="user-details-topbar">
            <img
                className="user-profileimage"
                src="./assets/images/Profile.png"
                alt=""
            ></img>
            <div className="user-info">
                <p className="user-name">ADMIN</p>
                <p className="user-id">
                {user.employeeId}
                </p>
                <p className="user-email">{user.email}</p>
                <p className="user-phone">{user.mobileNumber}</p>
            </div>
        </div>
        <div className="user-details-specific">
            <div className="specific-left">
                <div className="specific-left-top">
                    <p className="specific-left-topic">
                        <span style={{ fontSize: "18px" }}>
                        <b>Age</b>
                        </span>
                        <span style={{ fontSize: "16px" }}>
                        {user.age}
                        </span>
                    </p>
                    <p className="specific-left-topic">
                        <span style={{ fontSize: "18px" }}>
                        <b>Gender</b>
                        </span>
                        <span style={{ fontSize: "16px" }}>
                        {user.gender}
                        </span>
                    </p>
                </div>
                <div className="specific-left-bottom">
                    <p className="specific-left-topic">
                        <span style={{ fontSize: "18px" }}>
                        <b>DOB</b>
                        </span>
                        <span style={{ fontSize: "16px" }}>
                        {user.dob}
                        </span>
                    </p>
                    <p className="specific-left-topic">
                        <span style={{ fontSize: "18px" }}>
                        <b>Address</b>
                        </span>
                        <span style={{ fontSize: "16px" }}>
                        {user.address}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    
               
                    {/* <div className="dashboard-title-line"></div> */}
    </div>
  )
}

export default Profile