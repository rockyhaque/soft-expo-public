import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedConferences from "../FeaturedConferences/FeaturedConferences";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedConferences></FeaturedConferences>
        </div>
    );
};

export default Home;