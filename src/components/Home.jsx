import React from "react";
import ModalImage from "react-modal-image";

export const Home = () => {
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
            <iframe height='454' width='300' frameBorder='0' allowTransparency='true' scrolling='no'
                    src='https://www.strava.com/athletes/19347221/latest-rides/dac8a596c973a42a9f7d7937222943fd84f75a8f'/>
            <h2>A Quick Introduction</h2>
            <h2>Latest Blog Posts</h2>
            <h2>Latest Photos</h2>
            <div className="row">
                <div className="col-md">
                    <ModalImage
                        className={"img-thumbnail img-fluid"}
                        small={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        large={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        alt="Hello World!"
                        hideDownload={true}
                    /></div>
                <div className="col-md">
                    <ModalImage
                        className={"img-thumbnail img-fluid"}
                        small={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        large={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        alt="Hello World!"
                        hideDownload={true}
                    /></div>
                <div className="col-md">
                    <ModalImage
                        className={"img-thumbnail img-fluid"}
                        small={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        large={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        alt="Hello World!"
                        hideDownload={true}
                    /></div>
                <div className="col-md">
                    <ModalImage
                        className={"img-thumbnail img-fluid"}
                        small={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        large={"https://lh3.googleusercontent.com/_4Ri8dbMHUQiyVB-Xy5LlYsxZU3CqWxJXTFdYH7zGSEHLPTusbp2SVgfJL0g2iDp5-8mmExqreT015bgHi2HyGmgBWPGBHidT9c0g40i1hp18v_T1sPLtVbaBPnsASsfDLBV6wVmDQ=w2400"}
                        alt="Hello World!"
                        hideDownload={true}
                    /></div></div>





        </div></div>)
}