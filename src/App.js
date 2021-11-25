import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import {Home} from "./components/Home"
import {About} from "./components/About"
import {Outdoors} from "./components/Outdoors"
import {Photos} from "./components/Photos"
import {Lab} from "./components/Lab"
import {NotFound} from "./components/NotFound"

import  'react-bootstrap/Button';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import "./scss/custom.scss"

function App() {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className={"logo"}> <Link className={"logo"} to="/">Craig's Gist</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto"/>

                        <Nav>
                            <NavDropdown title="About" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link to="about">About</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="about">Goals of Craig's Gist</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="about">Career</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to="about">CV Download (PDF + TeX)</Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Outdoor Persuits" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><Link to="outdoors">Hill walking</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="outdoors">Mountain biking</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="outdoors">Rock climbing</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="outdoors">Road biking</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item ><Link to="outdoors">Gear Reviews</Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Photos" id="collasible-nav-dropdown">
                                <NavDropdown.Item ><Link to="photos">2021</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="photos">2020</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="photos">2019</Link></NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Lab" id="collasible-nav-dropdown">
                                <NavDropdown.Item > <Link to="lab">OS Map Integration</Link></NavDropdown.Item>
                                <NavDropdown.Item > <Link to="lab">Step File Viewer</Link></NavDropdown.Item>
                                <NavDropdown.Item > <Link to="lab">Dynamic React Component Loading</Link></NavDropdown.Item>

                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>







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