import React from 'react'
import Sidebar from './dashbord/sidebar/sidebar'
import Topbar from './dashbord/topbar/tobbar'
import '../CSS/dashbord.css'
import Blocks from './dashbord/features/blocks'
import TinyBlock from './dashbord/features/tinyblocks'
import { useParams } from "react-router-dom";

export default function Tobbarcus() {

    const {id} = useParams();

    return ( 

        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="bottomBar">
                       <Blocks id={id}/>
                 </div>
                 <div className="bbBar">
                       <TinyBlock/>
                 </div>

            </div>     

        </div>


    )
}

