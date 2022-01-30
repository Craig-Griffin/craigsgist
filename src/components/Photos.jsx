import React from "react";
import ModalImage from "react-modal-image";


import photoData from "./../data/photos.json"


class Photos extends React.Component {

    constructor(props) {
        super(props);

        this.photoData = JSON.parse(JSON.stringify(photoData))

    }

    renderCaption() {
        let outputHTML = []

        for (let i = 0; i < this.photoData.twentyOne.length; i++) {
            outputHTML.push(<div><h3>{this.photoData.twentyOne[i].Title}</h3>
                <p>{this.photoData.twentyOne[i].Description}</p>


                {this.renderImages(this.photoData.twentyOne[i].Images)}
                <br/></div>)
        }

        return outputHTML

    }


    renderImages(images) {
        let outputHTML = [];

        let tempConfig = [[images[0], images[1], images[2]], [images[3], images[4]]]


        let perChunk = 3

        let result = images.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / perChunk)

            if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
        }, [])


        for (let i = 0; i < result.length; i++) {
            outputHTML.push(
                <div className="row">
                    {this.renderRows(result[i])}
                </div>
            )


        }
        return outputHTML
    }


    renderRows(images) {
        let outputHTML = [];

        console.log(images)


        if (images.length === 3) {
            for (let i = 0; i < images.length; i++) {

                outputHTML.push(
                    <div className="col-md">
                        <ModalImage
                            className={"img-thumbnail img-fluid"}
                            small={images[i].src}
                            large={images[i].src}
                            alt={images[i].alt}
                            hideDownload={true}
                        />
                    </div>
                )
            }
        } else if (images.length === 2) {
            outputHTML.push(
                <>
                    <div className="col-md">
                        <ModalImage
                            className={"img-thumbnail img-fluid"}
                            small={images[0].src}
                            large={images[0].src}
                            alt={images[0].alt}
                            hideDownload={true}
                        />
                    </div>

                    <div className="col-md">
                        <ModalImage
                            className={"img-thumbnail img-fluid"}
                            small={images[1].src}
                            large={images[1].src}
                            alt={images[1].alt}
                            hideDownload={true}
                        />
                    </div>

                    <div className="col-md">

                    </div>
                </>
            )

        } else {
            outputHTML.push(
                <>
                    <div className="col-md">
                        <ModalImage
                            className={"img-thumbnail img-fluid"}
                            small={images[0].src}
                            large={images[0].src}
                            alt={images[0].alt}
                            hideDownload={true}
                        />
                    </div>

                    <div className="col-md">

                    </div>

                    <div className="col-md">

                    </div>
                </>
            )
        }


        return outputHTML
    }


    render() {
        return (

            <div>
                <header className={"py-5 bg-light border-bottom mb-4 header-background"}>

                    <div className={"container"}>
                        <div className={"text-center my-5"}>
                            <h1 className={"fw-bolder"} style={{color: "white"}}>Photos</h1>
                            <p className={"lead mb-0"} style={{color: "white"}}>Mostly hills!</p>
                        </div>
                    </div>
                </header>
                <div className="container p-3">

                    {this.renderCaption()}


                </div>
            </div>


        )
    }
}


export default Photos;