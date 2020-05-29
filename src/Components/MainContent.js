import React,{Fragment} from "react";
import image1 from "../Images/image1.jpg";
import Footer from "./Footer";
import SecondPage from "./SecondPage";

const MainContent = () => {

    const knowMoreFunc = () =>{
        window.open(SecondPage, '_blank');
    }

    return (
        <Fragment>
        <div className="container-fluid container-no-p bg-img-cnt1">
            <section className="text-center">
                <div className="display-4 text-center font-weight-bold ver-align"> 
                    Welcome to Digital learning!!!
                </div>
                <br/>
                <button type="button" className="btn btn-lg text-center text-white know-more-btn"
                onClick={knowMoreFunc}>
                    Know more
                </button>
            </section>
        </div>
            {/* <section className="d-flex p-5 bg-dark text-white justify-content-center">
                <div className="flex-fill text-center">
                    Web Development<br/>
                    <button>Know more</button>
                </div>
                <div className="flex-fill text-center">
                    Mobile Development
                    <br/>
                    <button>Know more</button>
                </div>
            </section> */}
            <Footer />
        </Fragment>

    )
}

export default MainContent;