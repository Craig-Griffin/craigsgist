import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import {Home} from "./components/Home"
import {About} from "./components/About"
import {Outdoors} from "./components/Outdoors"
import {Photos} from "./components/Photos"
import {Lab} from "./components/Lab"
import {NotFound} from "./components/NotFound"


function App() {
    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />


            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="outdoors">Outdoor Pursuits</Link>
                    </li>
                    <li>
                        <Link to="photos">Photos</Link>
                    </li>
                    <li>
                        <Link to="lab">Lab</Link>
                    </li>
                </ul>
            </nav>


            <div className="main">
                {/* Define all the routes */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="outdoors" element={<Outdoors/>}/>
                    <Route path="photos" element={<Photos/>}/>
                    <Route path="lab" element={<Lab/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>


        </div>
    )
}



export default App