import { LocationSearching, PermIdentity, PhoneAndroid, MailOutline, CalendarToday, Publish } from '@material-ui/icons'
import './user.css'
import { Link } from 'react-router-dom'
const User = () => {
    return (
        <div className="user">
           <div className="userTitleContainer">
               <h1 className="userTitle">Edit User</h1>
               <Link to="/newUser">
                <button className="userAddBtn">Create</button>
               </Link>
           </div>
           <div className="userContainer">
               <div className="userShow">
                   <div className="userShowTop">
                       <img src="" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">John Cena</span>
                            <span className="userShowUserTitle">Software Developer</span>
                        </div>
                   </div>
                   <div className="userShowBottom">
                       <span className="userShowTitle">Account Details</span>
                       <div className="userShowInfo">
                           <PermIdentity className="userShowIcon"/>
                           <span className="userShowInfoTitle">joncena33</span>
                       </div>
                       <div className="userShowInfo">
                           <CalendarToday className="userShowIcon"/>
                           <span className="userShowInfoTitle">12-09-1978</span>
                       </div>
                       <span className="userShowTitle">Contact Details</span>
                       <div className="userShowInfo">
                           <PhoneAndroid className="userShowIcon"/>
                           <span className="userShowInfoTitle">+233 59 334 1780</span>
                       </div>
                       <div className="userShowInfo">
                           <MailOutline className="userShowIcon"/>
                           <span className="userShowInfoTitle">joncena33@gmail.com</span>
                       </div>
                       <div className="userShowInfo">
                           <LocationSearching className="userShowIcon"/>
                           <span className="userShowInfoTitle">Kasoa| Accra</span>
                       </div>
                   </div>
               </div>
               <div className="userUpdate">
                   <span className="userUpdateTitle">Edit</span>
                   <form className="userUpdateForm">
                       <div className="userUpdateLeft">
                           <div className="userUpdateItem">
                               <label>Username</label>
                               <input type="text" placeholder="joncena33" className="userUpdateInput"/>
                           </div>
                           <div className="userUpdateItem">
                               <label>Full Name</label>
                               <input type="text" placeholder="John Cena" className="userUpdateInput"/>
                           </div>
                           <div className="userUpdateItem">
                               <label>Email</label>
                               <input type="email" placeholder="joncena33@gmail.com" className="userUpdateInput"/>
                           </div>
                           <div className="userUpdateItem">
                               <label>Phone</label>
                               <input type="text" placeholder="+233 59 334 1780" className="userUpdateInput"/>
                           </div>
                           <div className="userUpdateItem">
                               <label>Address</label>
                               <input type="text" placeholder="Kasoa|Accra" className="userUpdateInput"/>
                           </div>
                       </div>
                       <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateRightBtn">Update</button>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    )
}

export default User
