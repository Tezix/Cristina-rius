import Hero from "../../components/Home/Hero/Hero"
import HomeAboutMe from "../../components/Home/HomeAboutMe/HomeAboutMe"
import Services from "../../components/Home/HomeServices/HomeServices"
import "./HomePage.css"



const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <HomeAboutMe />

        </>
    )
}
export default HomePage