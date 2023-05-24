
// import LoginForm from "./LoginForm";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import LoginRHF from "./LoginRHF"

export default function Login(props) {

    return (
        <>
            <Navbar />
            <h1>Login</h1>
            {/* <LoginForm onSubmit={handleClick} /> */}
            <LoginRHF />
            <Footer />
        </>
    )
}