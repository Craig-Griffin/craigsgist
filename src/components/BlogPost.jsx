import React from "react";







class BlogPost extends React.Component {

    constructor(props) {
        super(props);



    }




    render() {
        return (


            <div className="container p-3">

                <h1>{this.props.title}</h1>








            </div>



        )
    }
}


export default BlogPost;