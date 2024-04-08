import { useParams } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import RightSideNav from "../Sheard/RightSideNav/RightSideNav";
import Navbar from "../Sheard/Navbar/Navbar";


const NewsDEtails = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 items-center justify-center">
                <div className="col-span-3">
                    <h2 className="5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDEtails;