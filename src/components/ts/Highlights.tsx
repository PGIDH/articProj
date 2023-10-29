import { HighlightsData } from "../model/Models";

function Highlights(props: { data: HighlightsData }) {
    return (
        <div>
            <div className="m-title-bar ">
                <h2 className="title f-module-title-2" id="highlights">Highlights</h2>
                <span className="m-title-bar__links" aria-labelledby="highlights">
                    <span>
                        <a href="https://www.artic.edu/highlights" className="f-link" data-gtm-event="home-highlights" data-gtm-event-category="nav-link">
                            See all highlights<span aria-hidden="true">&nbsp;&nbsp;›</span>
                        </a>
                    </span>
                </span>
            </div>
            <span className="hr"></span>

            <ul className="o-grid-listing o-grid-listing--gridlines-cols o-grid-listing--gridlines-top o-grid-listing--2-col@small o-grid-listing--3-col@medium o-grid-listing--3-col@large o-grid-listing--3-col@xlarge">
                {props?.data.data.map((highlight) => (
                    <li className="m-listing m-listing--highlight o-pinboard__item">
                        <a href="https://www.artic.edu/highlights/63/artists-from-latin-america" className="m-listing__link" data-gtm-event={highlight.title} data-gtm-event-category="highlight-listing-1">
                            <span className="m-listing__img m-listing__img--no-bg m-listing__img--square">
                                <img alt={highlight.title}
                                    sizes="(min-width: 1640px) 466px, (min-width: 1200px) 28.13vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  90.63vw" width="2989" height="2989"                                    
                                    srcSet={highlight.title}/>                                    
                                <span className="m-listing__img__overlay">
                                    <svg className="icon--slideshow--24">
                                        <use xlinkHref="#icon--slideshow--24"></use>
                                    </svg>
                                </span>
                            </span>
                            <span className="m-listing__meta">
                                <em className="type f-tag">Highlights</em>
                                <br />
                                <strong className="title f-list-3">{highlight.title}</strong>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Highlights;