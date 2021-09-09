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
                            <img class="image1" src={home}/>
                            Dashbord
                        </li>
                        </Link>
                        <Link className="Link" to="./customermain">
                        <li className="sidebarListItem">
                            <img class="image1" src={manageemployee}/>
                            User Management
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <img class="image1" src={ownermanage}/>
                            Owner Management
                        </li>
<<<<<<< HEAD

                        <Link to="/schedule">
=======
<<<<<<< HEAD
                        <Link to="/schedule">
=======
                        
>>>>>>> 86fb8042cb8ae11c3313b172858c3fdcb0124ccf
>>>>>>> c09d256ac12da06ed2faba29f20d03a4b91ce579
                        <li className="sidebarListItem">
                            <img class="image1" src={shedulemanage}/>
                            Shedule Management
                        </li>
<<<<<<< HEAD
                        </Link>
                    


                        <Link className="Link" to="./employeemain">
=======
<<<<<<< HEAD
                        </Link>
                        <Link to="/bus">
=======

                        <Link className="Link" to="./employeemain">
>>>>>>> 86fb8042cb8ae11c3313b172858c3fdcb0124ccf
>>>>>>> c09d256ac12da06ed2faba29f20d03a4b91ce579
                        <li className="sidebarListItem">
                            <img class="image1" src={busmanagement}/>
                            Bus Management
                        </li>
                        </Link>
                        <Link className="Link" to="./employeemain">
                        <li className="sidebarListItem">
                            <img class="image1" src={empmanage}/>
                            Emp Management
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <img class="image1" src={packagemanage}/>
                            Package Management
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
