import { ArtWorkData } from "../model/Models";
import '../styles/Content.css';

function Header() {
    return (
        <header className="g-header">
            <a href="#content" className="skip-nav f-body">Skip to Content</a>
            <div className="g-header__inner">
                <nav aria-label="primary">
                    <a className="g-header__logo" aria-label="Art Institute of Chicago" href="/">
                        <svg aria-hidden="true">
                            <use xlinkHref="#icon--logo--80"></use>
                            <use xlinkHref="#icon--logo--88"></use>
                            <use xlinkHref="#icon--logo--92"></use>
                        </svg>
                    </a>
                    <div className="g-header__nav-primary">
                        <h2 className="sr-only" id="h-nav-primary-header">Primary Navigation</h2>
                        <ul className="f-main-nav" aria-labelledby="h-nav-primary-header">
                            <li className="u-hide@small+">
                                <a href="https://sales.artic.edu/admissions" data-gtm-event-category="top-nav" data-gtm-event="buy-tickets">Buy Tickets</a>
                            </li>
                            <li>
                                <a href="https://www.artic.edu/visit" data-gtm-event-category="top-nav" data-gtm-event="visit">Visit</a>
                            </li>
                            <li className="u-show@small+">
                                <a href="https://www.artic.edu/exhibitions" data-gtm-event-category="top-nav" data-gtm-event="exhibitions-and-events">Exhibitions &amp; Events</a>
                            </li>
                            <li className="u-show@small+">
                                <a href="https://www.artic.edu/collection" data-gtm-event-category="top-nav" data-gtm-event="collection">The Collection</a>
                            </li>
                            <li className="u-show@small+"><button id="global-search-icon" data-behavior="globalSearchOpen" aria-label="Search site"><svg className="icon--search--24" aria-hidden="true"><use xlinkHref="#icon--search--24"></use></svg></button></li>
                        </ul>
                    </div>
                </nav>
                <nav className="g-header__nav-secondary" aria-label="secondary">
                    <h2 className="sr-only" id="h-nav-secondary-header">Secondary Navigation</h2>
                    <ul className="f-secondary" aria-labelledby="h-nav-secondary-header">
                        <li><a href="https://sales.artic.edu/admissions" data-gtm-event-category="top-nav" data-gtm-event="buy-tickets">Buy Tickets</a></li>
                        <li><a href="https://sales.artic.edu/memberships" data-gtm-event-category="top-nav" data-gtm-event="become-a-member">Become a Member</a></li>
                        <li><a href="https://shop.artic.edu/" target="_blank" data-gtm-event-category="top-nav" data-gtm-event="shop">Shop</a></li>
                    </ul>
                </nav>
                <button className="g-header__menu-link f-secondary" data-behavior="openNavMobile" aria-label="Show menu">Menu<svg className="icon--menu--24" aria-hidden="true"><use xlinkHref="#icon--menu--24"></use></svg></button>
            </div>
            
        </header>
    )
}

export default Header;