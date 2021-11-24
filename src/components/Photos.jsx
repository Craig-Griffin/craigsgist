import React from "react";


export const Photos = () => {
    return (
        <section className="">


            <section className="">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <img
                                src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
                                className="w-100"
                            />
                            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal1">

                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <img
                                src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg"
                                className="w-100"
                            />
                            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal2">

                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <img
                                src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg"
                                className="w-100"
                            />
                            <a href="#!" data-mdb-toggle="modal" data-mdb-target="#exampleModal3">

                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">

                <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex="-1"
                    aria-labelledby="exampleModal1Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="ratio ratio-16x9">

                            </div>

                            <div className="text-center py-3">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="exampleModal2"
                    tabindex="-1"
                    aria-labelledby="exampleModal2Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="ratio ratio-16x9">

                            </div>

                            <div className="text-center py-3">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="modal fade"
                    id="exampleModal3"
                    tabIndex="-1"
                    aria-labelledby="exampleModal3Label"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="ratio ratio-16x9">

                            </div>

                            <div className="text-center py-3">
                                <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
        )
}