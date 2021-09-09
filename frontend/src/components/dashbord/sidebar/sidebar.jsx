import "./sidebar.css"
import home from "../../../img/dashbord/dashhome.jpg";
import manageemployee from "../../../img/dashbord/manageemployee.jpg";
import ownermanage from "../../../img/dashbord/ownermanage.jpg";
import shedulemanage from "../../../img/dashbord/shedulemanage.png";
import busmanagement from "../../../img/dashbord/busmanagement.jpg";
import empmanage from "../../../img/dashbord/calendar.png";
import packagemanage from "../../../img/dashbord/packagemanage.jpg";
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="toptag">
                        <MenuIcon/>
                        <h3 className="sidebarTitle">    
                                Quick Select
                        </h3>
                    </div>
                    <ul className="sidebarList">
                        <Link className="Link" to="/dashbord">
                        <li className="sidebarListItem active">
                        <i class="fas fa-home"></i>
                            DASHBORD
                        </li>
                        </Link>
                        <Link className="Link" to="./customermain">
                        <li className="sidebarListItem">
                        <i class="fas fa-users"></i>
                            USERS
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                        <i class="fas fa-walking"></i>
                            OWNERS
                        </li>

                        <Link to="/schedule">
                        <li className="sidebarListItem">
                        <i class="fas fa-clock"></i>
                            SCHEDULES
                        </li>
                        </Link>
                    


                        <Link className="Link" to="./employeemain">
                        <li className="sidebarListItem">
                        <i class="fas fa-bus"></i>
                            BUSSES
                        </li>
                        </Link>
                        <Link className="Link" to="./employeemain">
                        <li className="sidebarListItem">
                        <i class="fas fa-briefcase"></i>
                            EMPLOYEE
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                        <i class="fas fa-file-powerpoint"></i>
                            PACKAGES
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
