import React from "react";
import ModalImage from "react-modal-image";



import photoData from "./../data/photos.json"
import Photos from "./Photos";
import {Link} from "react-router-dom";


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.photoData = JSON.parse(JSON.stringify(photoData))

    }


    renderImages(){
        let outputHTML=[]

        for(let i=0;  i < 5; i++){
            outputHTML.push(
                <div className="col-md">
                    <ModalImage
                        className={"img-thumbnail img-fluid"}
                        small={this.photoData.twentyOne[0].Images[i].src}
                        large={this.photoData.twentyOne[0].Images[i].src}
                        alt={this.photoData.twentyOne[0].Images[i].alt}
                        hideDownload={true}
                    /></div>

            )
        }

        return outputHTML

    }


    render() {
        return  (

            <div>
                <header className={"py-5 bg-light border-bottom mb-4"}>

                    <div className={"container"}>
                        <div className={"text-center my-5"}>
                            <h1 className={"fw-bolder"}>Welcome to Craig's Gist!</h1>
                            <p className={"lead mb-0"}> An intriguing mix of outdoor adventures, computer science and other madness   </p>
                        </div>
                    </div>
                </header>




                <div className="container p-3">

                    <h2>A Quick Introduction</h2>
                    <p>

                        Welcome to Craig's Gist! The personal website of Craig Griffin. The purpose of this website is to provide me with a
                        space that is fully controlled and governed by me. Hosting my own website allows me to bypass the limitations
                        of the modern Internet created by the reliance of websites like Facebook and LinkedIn. I can host whatever content I want here
                        with whatever CSS styling works for me and my needs. At the moment the main content that you will find on this website covers my
                        love of the outdoors and adventures, and more boring everyday stuff like my CV.

                    </p>
                    <h2>Latest Photos</h2>
                    <p>
                        Some photos from my latest trip: <strong>{this.photoData.twentyOne[0].Title}! </strong>
                        Check out my other photos in the <Link to={"/photos"}>Photos Section</Link>.

                    </p>
                    <p>
                    <div className="row">
                        {this.renderImages()}
                    </div></p>

                    <h2>Latest Blog Posts</h2>
                    <p>Work in progress. When I have time to start writing some blogs they will appear here in this section. </p>

                    <h2>TODO</h2>
                    <p><ul>
                        <li>Work on CSS styling for full website</li>
                        <li>Integrate CV and other personal data </li>
                        <li>Fix implementation for linking to blog posts </li>
                        <li>Create dynamic Blog post component </li>
                    </ul> </p>


                    <iframe height='454' width='300' frameBorder='0' allowTransparency='true' scrolling='no'
                            src='https://www.strava.com/athletes/19347221/latest-rides/dac8a596c973a42a9f7d7937222943fd84f75a8f'/>









                </div></div>)
    }

}

export default Home;