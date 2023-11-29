import SocialMediaSignIn from "../components/Login/SocialMediaSignIn.jsx";
import SignUpDivider from "../components/Register/SignUpDivider.jsx";
import RegisterIllustration from "../components/Register/RegisterIlustration.jsx";
import FormAndButton from "../components/Register/FormAndButton.jsx";

const RegisterPage = () => {
    return (
        <div
            className="mx-auto w-full lg:max-w-screen rounded-3xl ring-1 ring-gray-200 lg:flex items-center justify-center">
            <div className="p-8 lg:m-8 sm:p-10 lg:flex-auto">
                <h3 className="lg:text-3xl text-2xl font-bold tracking-tight text-gray-900">Sign up to Sepatu<span
                    className="text-primary">Ku</span>
                </h3>
                <SocialMediaSignIn/>
                <SignUpDivider/>
                <FormAndButton />
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-2xl lg:flex-shrink-0 hidden sm:block">
                <RegisterIllustration />
            </div>
        </div>
    )
}

export default RegisterPage;