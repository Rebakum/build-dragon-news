import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className="p-4">
            <div className="*:my-2 mb-6">
            <h2 className="text-2xl text-center">Login with</h2>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="btn btn-outline w-full space-x-3">
                <FaGithub></FaGithub>
                Login with Github
            </button>
        </div>

        <div className=" mb-6">
            <h2 className="text-2xl text-center mb-6">Find us on</h2>
            <a className="flex p-4 gap-3 text-xl rounded-t-lg items-center border" href="">
                <FaFacebook></FaFacebook>
                Facebook
            </a>
            <a className="flex p-4 gap-3 text-xl  items-center border" href="">
               <FaTwitter></FaTwitter>
              Twiter
            </a>
            <a className="flex p-4 gap-3 text-xl  rounded-b-lg items-center border" href="">
                <FaInstagram></FaInstagram>
                Instagram
            </a>
        </div>
        {/* Q- Zone */}
        <div className=" mb-6">
            <h2 className="text-2xl text-center mb-6">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           
        </div>
        </div>
    );
};

export default RightSideNav;