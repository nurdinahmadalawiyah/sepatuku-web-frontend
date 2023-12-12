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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

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

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarBrand>
                    <Link href="/" className={`text-decoration-none color-inherit cursor-pointer`}>
                        <p className="font-bold text-xl mr-20">Sepatu<span className="text-primary">Ku</span></p>
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="/#featured">
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
                            key="sneakers"
                            startContent={icons.scale}
                        >
                            Sneakers
                        </DropdownItem>
                        <DropdownItem
                            key="sandal"
                            startContent={icons.scale}
                        >
                            Sandal
                        </DropdownItem>
                        <DropdownItem
                            key="boots"
                            startContent={icons.scale}
                        >
                            Boots
                        </DropdownItem>
                        <DropdownItem
                            key="sepatu-formal"
                            startContent={icons.scale}
                        >
                            Sepatu Formal
                        </DropdownItem>
                        <DropdownItem
                            key="sepatu-olahraga"
                            startContent={icons.scale}
                        >
                            Sepatu Olahraga
                        </DropdownItem>
                        <DropdownItem
                            key="flat-shoes"
                            startContent={icons.scale}
                        >
                            Flat Shoes
                        </DropdownItem>
                        <DropdownItem
                            key="wedges"
                            startContent={icons.scale}
                        >
                            Wedges
                        </DropdownItem>
                        <DropdownItem
                            key="slip-on"
                            startContent={icons.scale}
                        >
                            Slip-on
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link color="foreground" href="/product">
                        Products
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[20rem] h-10 sm:w-full",
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
                <Link href="/cart" className={`text-decoration-none color-inherit cursor-pointer`}>
                    <Button isIconOnly color="transparent">
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </Button>
                </Link>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="primary"
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
                        <DropdownItem href="/transaction" key="settings">Transaksi</DropdownItem>
                        <DropdownItem href="/wishlist" key="team_settings">Wishlist</DropdownItem>
                        <DropdownItem href="/login" key="logout" color="danger">
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