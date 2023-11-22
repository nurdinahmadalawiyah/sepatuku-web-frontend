import {Button, Input, Link, Spacer} from "@nextui-org/react";

const FormAndButton = () => {
    return (
        <>
            <Input
                size="lg"
                type="email"
                label="Email or Username"
                placeholder="Enter your email or username"
                labelPlacement="outside"
            />
            <Spacer y="6"/>
            <Input
                size="lg"
                type="password"
                label="Password"
                placeholder="Enter your password"
                labelPlacement="outside"
            />
            <Spacer y="6"/>
            <p className="text-l tracking-tight text-black">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't have an account? <Link href="#" className="text-blue-600">Sign Up</Link>
            </p>
            <Spacer y="16"/>
            <Button className="bg-gray-900" size="lg" radius="full" fullWidth>
                <p className="text-lg font-bold text-white">Sign In</p>
            </Button>
        </>
    )
}

export default FormAndButton;