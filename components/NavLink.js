import { useRouter } from "next/router";
import { closeMenu, MENU_ROTATION_DURATION, MENU_ROTATION_DELAY, MENU_ROTATION_FIRST_LOAD_ONLY } from "./Menu";
import Link from "next/link";

function delayedNavigate(e, router, url, delay = (MENU_ROTATION_DURATION + MENU_ROTATION_DELAY) * 1000) {
    e.preventDefault();
    if (url !== router.pathname) {
        closeMenu();
        setTimeout(() => {
            router.push(url).then(() => window.scrollTo(0, 0));
        }, delay);
    }
}

const NavLink = ({ children, href, className }) => {
    const router = useRouter();
    return (
        MENU_ROTATION_FIRST_LOAD_ONLY ?
            <Link href={href}><a className={className ? className : ""}>{children}</a></Link>
            :
            <a className={className ? className : ""} href={href} onClick={e => delayedNavigate(e, router, href)}>{children}</a>
    );
}

export default NavLink;