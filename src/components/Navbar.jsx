import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
    Link,
    Dropdown,
    DropdownTrigger,
    Avatar,
    DropdownMenu,
    DropdownItem, Input, Button
} from "@nextui-org/react";
import {SearchIcon} from "../assets/SearchIcon.jsx";
import {ChevronDown, Scale} from "./Icons.jsx";
import {useLocation} from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    if (isLoginPage || isRegisterPage) return null;

    const menuItems = [
        "Featured",
        "Category",
        "All Product"
    ];

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16}/>,
        scale: <Scale className="text-warning" fill="currentColor" size={30}/>,
    };

    return (
        <NextUINavbar maxWidth="xl" className="fixed top-0 z-50">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-xl">Sepatu<span className="text-primary">Ku</span></p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Featured
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem isActive>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Category
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                        >
                            Autoscaling
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        All Products
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[20rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    radius="full"
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18}/>}
                    type="search"
                />
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Nurdin Ahmad Alawiyah</p>
                            <p className="font-semibold">nurdinahmada@gmail.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">Transaksi</DropdownItem>
                        <DropdownItem key="team_settings">Wishlist</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    )
}