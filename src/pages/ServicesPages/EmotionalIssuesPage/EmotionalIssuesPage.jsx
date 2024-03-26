import EmotionalHero from "../../../components/EmotionalIssues/EmotionalHero/EmotionalHero";
import './EmotionalIssuesPage.css';
import EmotionalSymptons from "../../../components/EmotionalIssues/EmotionalSymtoms/EmotionalSymtoms";
import EmotionalTypes from "../../../components/EmotionalTypes/EmotionalTypes";


const EmotionalIssuesPage = () => {
    return (
        <>
            <EmotionalHero />
            <EmotionalSymptons />
            <EmotionalTypes />
        </>
    )
}
export default EmotionalIssuesPage;

