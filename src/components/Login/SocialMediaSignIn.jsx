import {Button, Image} from "@nextui-org/react";

const SocialMediaSignIn = () => {
    return (
        <div className="flex gap-5 items-center justify-center mt-8">
            <Button isIconOnly radius="sm" aria-label="Google Account" className="bg-gray-100 p-1">
                <Image radius="none" src="src\assets\google-icon.svg"/>
            </Button>
            <Button isIconOnly radius="sm" aria-label="Apple Account" className="bg-gray-100 p-2">
                <Image radius="none" src="src\assets\apple-icon.svg"/>
            </Button>
            <Button isIconOnly radius="sm" aria-label="Facebook Account" className="bg-gray-100 p-2">
                <Image radius="none" src="src\assets\facebook-icon.svg"/>
            </Button>
            <Button isIconOnly radius="sm" aria-label="Twitter/X Account" className="bg-gray-100 p-2">
                <Image radius="none" src="src\assets\x-icon.svg"/>
            </Button>
        </div>
    )
}

export default SocialMediaSignIn;