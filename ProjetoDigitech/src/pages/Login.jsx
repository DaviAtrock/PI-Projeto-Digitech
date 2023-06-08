import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import LoginForm from "../pages/LoginForm"


export default function Login(props) {

    return (
        <>
            <Navbar />
            <h1>Login</h1>
            <LoginForm />
            <Footer />
        </>
    )
}