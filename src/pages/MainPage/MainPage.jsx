import About from "../../components/About/About"
import Clients from "../../components/Clients/Clients"
import Contacts from "../../components/Contacts/Contacts"
import FeaturesAdvice from "../../components/Features copy/Features"
import Features from "../../components/Features/Features"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const MainPage = () => {
    return (<section>
        <header>
            <Header />
        </header>
        <main>
            <section style={{ paddingLeft: 42, paddingRight: 42 }}>
                <Features />
            </section>
            <section>
                <FeaturesAdvice />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Clients />
            </section>
            <section>
                <Contacts />
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </section>)
}

export default MainPage