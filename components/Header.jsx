import { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import styles from '../styles/Header.module.scss';


const nav_link = [
    {
        path: "/",
        display: "Home",
    },
    {
        path: "#about",
        display: "About",
    },
    {
        path: "#services",
        display: "Services",
    },
    {
        path: "#portfolio",
        display: "Portfolio",
    },
    {
        path: "#contact",
        display: "Contact",
    },
];

const Header = () => {


    const headerRef = useRef(null);

    const menuRef = useRef(null);

    const HeaderFun = () =>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add(`${styles.header_sticky}`)
        }else{
            headerRef.current.classList.remove(`${styles.header_sticky}`)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',HeaderFun);
        return ()=> window.removeEventListener('scroll',HeaderFun);
    },[]);


    const ToggleMenu = () =>{
        menuRef.current.classList.toggle(`${styles.menu_active}`)
    }

    return (
        <header className={`${styles.header}`} ref={headerRef}>
            <Container>
                <div className={`${styles.nav}`}>
                    {/* logo */}
                    <div className={`${styles.logo}`}>
                        <h1><span>Port</span>Folio</h1>
                    </div>
                    {/* Menu */}
                    <div className={`${styles.navigation}`} ref={menuRef} onClick={ToggleMenu}>
                        <div className={`${styles.nav_menu}`}>
                            {nav_link.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}
                            <div className={`${styles.nav_phone}`}>
                            {" "}
                                <p className="d-flex align-item-center gap-3 mb-0"><i className="ri-phone-line"></i>+963981413522 {" "}</p>
                            </div>
                        </div>
                    </div>
                    <span className={`${styles.mobile_menu}`}>
                        <i className="ri-menu-line" onClick={ToggleMenu}></i>
                    </span>
                </div>
            </Container>
        </header>
    );
}

export default Header;