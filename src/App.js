import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Home from "./components/Home"
import {About} from "./components/About"
import {Outdoors} from "./components/Outdoors"
import Photos from "./components/Photos"
import {Lab} from "./components/Lab"
import {NotFound} from "./components/NotFound"

import  'react-bootstrap/Button';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import "./scss/custom.scss"
import {GearReviews} from "./components/GearReviews";

function App() {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className={"logo "}> <Link className={"logo"} to="/">Craig's Gist</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto"/>

                        <Nav>
                            <NavDropdown title="About" id="collapsible-nav-dropdown">
                                <NavDropdown.Item className={"dropdown-link"}><Nav.Link className={"dropdown-link"} as={Link} to="about">About</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link} to="about">Goals of Craig's Gist</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link} to="about">Career</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Nav.Link as={Link} to="about">CV Download (PDF + TeX)</Nav.Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Outdoor Pursuits" id="collapsible-nav-dropdown">
                                <NavDropdown.Item><Nav.Link as={Link} to="outdoors">Hill walking</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link} to="outdoors">Mountain biking</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link}  to="outdoors">Rock climbing</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link}  to="outdoors">Road biking</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Nav.Link as={Link} to="gear-reviews">Gear Reviews</Nav.Link></NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Photos" id="collapsible-nav-dropdown">
                                <NavDropdown.Item><Nav.Link as={Link}  to="photos">2021</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link}  to="photos">2020</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link}  to="photos">2019</Nav.Link></NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Lab" id="collapsible-nav-dropdown">
                                <NavDropdown.Item><Nav.Link as={Link}  to="lab">OS Map Integration</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link}  to="lab">Step File Viewer</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><Nav.Link as={Link}  to="lab">Dynamic React Component Loading</Nav.Link></NavDropdown.Item>

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
                    <Route path="outdoors/*" element={<Outdoors/>}/>
                    <Route path="gear-reviews/*" element={<GearReviews/>}/>
                    <Route path="photos" element={<Photos/>}/>
                    <Route path="lab" element={<Lab/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>

            <footer >


                    <div className={"text-center"}>

                        <p className={"lead"}> © Craig Griffin 2021    </p>
                    </div>

            </footer>


        </div>
    )
}



export default App