import "./sidebar.css"
import home from "../../../img/dashbord/dashhome.jpg";
import manageemployee from "../../../img/dashbord/manageemployee.jpg";
import ownermanage from "../../../img/dashbord/ownermanage.jpg";
import shedulemanage from "../../../img/dashbord/shedulemanage.png";
import busmanagement from "../../../img/dashbord/busmanagement.jpg";
import empmanage from "../../../img/dashbord/calendar.png";
import packagemanage from "../../../img/dashbord/packagemanage.jpg";
import MenuIcon from '@material-ui/icons/Menu';

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
                        <li className="sidebarListItem active">
                            <img class="image1" src={home}/>
                            Dashbord
                        </li>
                        <li className="sidebarListItem">
                            <img class="image1" src={manageemployee}/>
                            User Management
                        </li>
                        <li className="sidebarListItem">
                            <img class="image1" src={ownermanage}/>
                            Owner Management
                        </li>
                        <li className="sidebarListItem">
                            <img class="image1" src={shedulemanage}/>
                            Shedule Management
                        </li>
                        <li className="sidebarListItem">
                            <img class="image1" src={busmanagement}/>
                            Bus Management
                        </li>
                        <li className="sidebarListItem">
                            <img class="image1" src={empmanage}/>
                            Emp Management
                        </li>
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