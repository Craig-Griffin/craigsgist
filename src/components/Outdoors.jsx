import React from "react";

import BlogPost from "./BlogPost"
import {Link, Route, Routes} from "react-router-dom";


export const Outdoors = () => {
    return (
        <div className={"container"}>


            <div className={"text-center my-5"}>
                <h1 className={"fw-bolder"}>Outdoor Pursuits</h1></div>


            <h2>Vehicles Reviewed From an Outdoors Enthusiasts Perspective</h2>
            <p>
                Most car reviews focus on things like brake horse power and torque. Reviews on this website will be
                completely different. Cars will be reviewed based on their most important aspects, including practically,
                sleeping comfort, back seat dining room setup.</p>

            <div className={"row"}>

                <div className={"col-md"}>
                    <h3>SAAB 9-3 (2009)</h3>
                    <p>
                        The first Car that I purchased. I owned my SAAB 9-3 for just under 2 years and it was a great
                    machine. I would have happily kept for a long time but a dramatically bad MOT saw the SAAB meet its maker.
                    </p>



                    <Link
                        className="btn btn-info"
                        role="button"
                        to="saab"

                    >
                        Read the Full Review
                    </Link>
                </div>
                <div className={"col-md"}>
                    <img className={"img-fluid"}
                         src={"https://parkers-images.bauersecure.com/Scale/pagefiles/202293/cut-out/450x300/saab_93sw05.jpg"}/>
                </div>
                <div className={"col-md"}>

                </div>
            </div>


            <br />

            <div className={"row"}>

                <div className={"col-md"}>
                    <h3>BMW FIVE SERIES (2012)</h3>
                    <p>
                     My current vehicle.
                    </p>

                    <Link
                        className="btn btn-info"
                        role="button"
                        to="bmw"

                    >
                        Read the Full Review
                    </Link>
                </div>
                <div className={"col-md"}>
                    <img className={"img-fluid"}
                         src={"https://parkers-images.bauersecure.com/Scale/pagefiles/202293/cut-out/450x300/saab_93sw05.jpg"}/>
                </div>
                <div className={"col-md"}>

                </div>
            </div>

            <Routes>
                <Route path="saab" element={<BlogPost title={"SAAB"} />} />
                <Route path="bmw" element={<BlogPost title={"BMW"} />} />
            </Routes>


        </div>)
}