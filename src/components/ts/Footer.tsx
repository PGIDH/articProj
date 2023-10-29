function Footer() {
    return (
        <footer id="footer" className="g-footer">
            <a href="#a17" className="g-footer__top-link arrow-link arrow-link--up f-small-caps">
                Back to top
                <span>
                    <svg aria-hidden="true" className="icon--arrow"><use xlinkHref="#icon--arrow"></use></svg>
                </span>
            </a>

            <div className="g-footer__inner">
                <h2 className="sr-only" id="h-footer-grid">Footer content</h2>
                <ul className="g-footer__grid " aria-labelledby="h-footer-grid">
                    <li>
                        <nav aria-label="primary">
                            <h3 className="sr-only" id="h-footer-nav-primary">Primary Navigation</h3>

                            <a className="g-footer__logo" aria-label="Art Institute of Chicago" href="/">
                                <svg aria-hidden="true">
                                    <use xlinkHref="#icon--logo--outline--92"></use>
                                </svg>
                            </a>

                            <ul className="g-footer__link-list" aria-labelledby="h-footer-nav-primary">
                                <li><a href="https://www.artic.edu/visit">Visit</a></li>
                                <li><a href="https://www.artic.edu/exhibitions">Exhibitions and Events</a></li>
                                <li><a href="https://www.artic.edu/collection">The Collection</a></li>
                            </ul>
                        </nav>
                    </li>

                    <li className="u-hide@small-">
                        <a href="https://www.google.com/maps/place/The+Art+Institute+of+Chicago/@41.8795845,-87.625902,17z/data=!3m1!5s0x880e2ca148f260e3:0xd473c3802aaff420!4m5!3m4!1s0x880e2ca3e2d94695:0x4829f3cc9ca2d0de!8m2!3d41.8795847!4d-87.623713" target="_blank" aria-label="Directions to the Art Institute of Chicago">
                            <svg aria-hidden="true" className="icon--footer_map_120x92"><use xlinkHref="#icon--footer_map_120x92"></use></svg>
                        </a>

                        <h3 className="sr-only" id="h-footer-nav-locations">Locations</h3>
                        <ul className="g-footer__link-list  g-footer__link-list--spaced" aria-labelledby="h-footer-nav-locations">
                            <li>
                                <h4>Michigan Avenue Entrance</h4>
                                <a href="https://www.google.com/maps/place/The+Art+Institute+of+Chicago/@41.8795845,-87.625902,17z/data=!3m1!5s0x880e2ca148f260e3:0xd473c3802aaff420!4m5!3m4!1s0x880e2ca3e2d94695:0x4829f3cc9ca2d0de!8m2!3d41.8795847!4d-87.623713" target="_blank">111 South Michigan Avenue <br />Chicago, IL 60603</a>
                            </li>

                            <li>
                                <h4>Modern Wing Entrance</h4>
                                <a href="https://www.google.com/maps/place/Modern+Wing+Entrance/@41.8797032,-87.6244036,17z/data=!3m1!5s0x880e2ca148f260e3:0xd473c3802aaff420!4m12!1m6!3m5!1s0x880e2ca3e2d94695:0x4829f3cc9ca2d0de!2sThe+Art+Institute+of+Chicago!8m2!3d41.8795847!4d-87.623713!3m4!1s0x880e2ca6cf1a0e41:0xa97b8d9d0c91fa6e!8m2!3d41.880725!4d-87.621932" target="_blank">159 East Monroe Street <br />Chicago, IL 60603</a>
                            </li>
                        </ul>
                    </li>

                    <li className="u-hide@small-">
                        <div className="g-footer__grid__group">
                            <h3 className="f-list-6" id="h-footer-about-us"><a href="/about-us">About us<svg aria-hidden="true" className="icon--arrow"><use xlinkHref="#icon--arrow"></use></svg></a></h3>

                            <ul className="g-footer__link-list" aria-labelledby="h-footer-about-us">
                                <li><a href="/about-us/mission-and-history">Mission and History</a></li>
                                <li><a href="/about-us/leadership">Leadership</a></li>
                                <li><a href="/about-us/departments">Departments</a></li>
                                <li><a href="/about-us/financial-reporting">Financial Reporting</a></li>
                            </ul>
                        </div>

                        <div className="g-footer__grid__group">
                            <h3 className="f-list-6" id="h-footer-support-us"><a href="/support-us">Support us</a></h3>

                            <ul className="g-footer__link-list" aria-labelledby="h-footer-support-us">
                                <li><a href="/support-us/membership">Membership</a></li>
                                <li><a href="/support-us/membership/luminary-levels">Luminary</a></li>
                                <li><a href="/support-us/ways-to-give/planned-giving">Planned Giving</a></li>
                                <li><a href="/support-us/ways-to-give/corporate-sponsorship">Corporate Sponsorship</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className="g-footer__grid__group u-hide@small-">
                            <h3 className="f-list-6" id="h-footer-learn-with-us"><a href="/learn-with-us">Learn with us<svg aria-hidden="true" className="icon--arrow"><use xlinkHref="#icon--arrow"></use></svg></a></h3>

                            <ul className="g-footer__link-list" aria-labelledby="h-footer-learn-with-us">
                                <li><a href="/learn-with-us/families">Families</a></li>
                                <li><a href="/learn-with-us/teens">Teens</a></li>
                                <li><a href="/learn-with-us/educators">Educators</a></li>
                                <li><a href="/visit/whos-visiting/college-and-university-groups-2">College and University</a></li>
                            </ul>
                        </div>

                        <div className="g-footer__grid__group">
                            <h3 className="f-list-6" id="h-footer-follow-us">Follow us</h3>

                            <ul className="g-footer__link-list" aria-labelledby="h-footer-follow-us">
                                <li><a href="https://www.facebook.com/artic" data-gtm-event="facebook" data-gtm-event-category="follow" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/artinstitutechi" data-gtm-event="twitter" data-gtm-event-category="follow" target="_blank">Twitter</a></li>
                                <li><a href="https://www.instagram.com/artinstitutechi/" data-gtm-event="instagram" data-gtm-event-category="follow" target="_blank">Instagram</a></li>
                                <li><a href="https://www.youtube.com/user/ArtInstituteChicago" data-gtm-event="youtube" data-gtm-event-category="follow" target="_blank">YouTube</a></li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>

            <h2 className="sr-only" id="h-mobile-footer-links">Footer Links</h2>
            <ul className="g-footer__legals f-secondary" aria-labelledby="h-mobile-footer-links">
                <li><a href="/press">Press</a></li>
                <li><a href="/employment">Careers</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/venue-rental">Venue Rental</a></li>
                <li><a href="/image-licensing">Image Licensing</a></li>
                <li><a href="https://www.saic.edu">SAIC</a></li>
                <li><a href="/terms">Terms</a></li>
            </ul>
        </footer>
    )
}

export default Footer;
