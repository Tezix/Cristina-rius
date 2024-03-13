import Hero from "../../components/Home/Hero/Hero"
import HomeAboutMe from "../../components/Home/HomeAboutMe/HomeAboutMe"
import HomeModalities from "../../components/Home/HomeModalities/HomeModalities"
import Services from "../../components/Home/HomeServices/HomeServices"
import HomeFaq from "../../components/Home/HomeFaq/HomeFaq"
import Footer from "../../components/Footer/Footer"
import "./HomePage.css"



const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <HomeAboutMe />
            <HomeModalities />
            <HomeFaq />
            <Footer />
        </>
    )
}
export default HomePage