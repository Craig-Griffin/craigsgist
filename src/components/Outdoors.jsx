import React from "react";

import BlogPost from "./BlogPost"
import {Link, Route, Routes} from "react-router-dom";


export const Outdoors = () => {
    return (


        <div>
            <header className={"py-5 bg-light border-bottom mb-4 header-background"}>

                <div className={"container"}>
                    <div className={"text-center my-5"}>
                        <h1 className={"fw-bolder"} style={{color: "white"}}>Outdoor Pursuits</h1>
                        <p className={"lead mb-0"} style={{color: "white"}}>Hill walking, mountain biking and outdoor
                            projects</p>
                    </div>
                </div>
            </header>

            <div className="container p-3">

                <h2>Hill Walking Reports</h2>

                <p>I will try and document noteworthy hill walks that I go on so that other people can try them our for
                    themselves.</p>

                <h4>Latest Walk Reports</h4>
                <p>Temp</p>

                <h4>Future Walk Ideas</h4>
                <p>Temp</p>

                <h4>Hill Walking Stats</h4>


                <p>
                    <ul>
                        <li>Munro Count:</li>
                        <li>Corbett Count:</li>
                        <li>Donald Count:</li>
                        <li>Graham Count:</li>
                        <li>Sub 2 Count:</li>

                    </ul>

                    For the most up to date stats check me out on <a href={""}>Walk Highlands</a>
                </p>


                <h2>Mountain Biking</h2>


            </div>
        </div>)
}