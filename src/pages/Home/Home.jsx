import {useLoaderData} from 'react-router-dom';

import Header from "../Sheard/Header/Header";
import LeftSideNav from "../Sheard/LeftsideNav/LeftSideNav";
import Navber from "../Sheard/Navbar/Navbar";
import RightSideNav from "../Sheard/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from './NewsCard';


const Home = () => {
    const news = useLoaderData()
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h2 className="text-3xl font-poppins font-bold">this is home pages</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 ">

                    {/* news container */}
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>

                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default Home;