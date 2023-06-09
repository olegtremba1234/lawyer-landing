import About from "../../components/About/About"
import Clients from "../../components/Clients/Clients"
import Contacts from "../../components/Contacts/Contacts"
import PracticeFeatures from "../../components/PracticeFeatures/PracticeFeatures"
import Features from "../../components/Features/Features"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <Features />
                <PracticeFeatures />
                <About />
                <Clients />
                <Contacts />
            </main>
            <Footer />
        </>
    )
}

export default MainPage