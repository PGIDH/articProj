import { EventsData } from "../model/Models";

function Events(props: { data: EventsData }) {
    return (
        <div>
            <div className="m-title-bar ">
                <h2 className="title f-module-title-2" id="events">Events</h2>
                <span className="m-title-bar__links" aria-labelledby="events">
                    <span>
                        <a href="https://www.artic.edu/events" className="f-link" data-gtm-event="home-events" data-gtm-event-category="nav-link">
                            See upcoming events<span aria-hidden="true">&nbsp;&nbsp;›</span>
                        </a>
                    </span>
                </span>
            </div>
            <span className="hr"></span>
            <ul className="o-grid-listing o-grid-listing--gridlines-cols o-grid-listing--gridlines-top o-grid-listing--2-col@small o-grid-listing--4-col@medium o-grid-listing--4-col@large o-grid-listing--4-col@xlarge">
                {props?.data.data.map((eventsData) => (
                    <li className="m-listing m-listing--w-meta-bottom m-listing--hover-bar" itemType="http://schema.org/VisualArtsEvent">
                        <a href="https://www.artic.edu/events/5704/gallery-tour-thursday-at-1-00-grand-staircase-start" className="m-listing__link" data-gtm-event="Gallery Tour (Thursday at 1:00, Grand Staircase start)" data-gtm-event-category="nav-link">
                            <span className="m-listing__img">
                                <img alt="Im026911 072 Int 1 1" className="  "
                                    src={eventsData.image_url}
                                    sizes="(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 20.31vw, (min-width: 600px) 90.63vw,  90.63vw" width="4198" height="2361"                                
                                />
                                <span className="m-listing__img__overlay"></span>
                            </span>
                            <span className="m-listing__meta">
                                <em className="type f-tag">{eventsData.title.includes(':') ? eventsData.title.split(':')[0] : ''}</em>
                                <br />
                                <strong className="title f-list-3" itemProp="name">{eventsData.title}</strong>
                                <br />
                                <span className="m-listing__meta-bottom">
                                    <span className="date f-secondary">Every {new Date(eventsData.start_date).toLocaleDateString('en-US', { weekday: 'long' })}| {eventsData.start_time}-{eventsData.end_time}</span>
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <nav className="m-links-bar m-links-bar--title-bar-companion" data-behavior="" aria-label="page secondary">
                <h3 className="sr-only" id="h-visit-nav-all-current-exhibitions-and-events">Page secondary navigation</h3>
                <ul className="m-links-bar__items-primary" data-links-bar-primary="" aria-labelledby="h-visit-nav-all-current-exhibitions-and-events">
                    <li className="m-links-bar__item">
                        <a className="m-links-bar__item-trigger btn f-buttons btn btn--secondary" href="https://www.artic.edu/exhibitions" data-gtm-event="home-exhibitions-and-events" data-gtm-event-category="nav-link">
                            All current exhibitions and events
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Events;