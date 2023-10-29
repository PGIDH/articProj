import { ExhibitionData } from "../model/Models";

function Exhibition(props: { data: ExhibitionData }) {
    return (
        <div>
            <div className="m-title-bar ">
                <h2 className="title f-module-title-2" id="exhibitions">Exhibitions</h2>
                <span className="m-title-bar__links" aria-labelledby="exhibitions">
                    <span>
                        <a href="https://www.artic.edu/exhibitions" className="f-link" data-gtm-event="home-exhibitions-and-events" data-gtm-event-category="nav-link">
                            All current exhibitions<span aria-hidden="true">&nbsp;&nbsp;›</span>
                        </a>
                    </span>
                </span>
            </div>

            <span className="hr"></span>
            <ul className="o-grid-listing o-grid-listing--gridlines-cols o-grid-listing--gridlines-top o-grid-listing--2-col@small o-grid-listing--2-col@medium o-grid-listing--2-col@large o-grid-listing--2-col@xlarge">
                {props?.data.data.map((exhData) => (
                    <li className="m-listing m-listing--w-meta-bottom m-listing--hover-bar" itemType="http://schema.org/ExhibitionEvent">
                        <a href="https://www.artic.edu/exhibitions/10132/kameelah-janan-rasheed-unsewn-time" className="m-listing__link" data-gtm-event="Kameelah Janan Rasheed: Unsewn Time" data-gtm-event-category="exhibition-1">
                            <span className="m-listing__img">
                                <img alt="A detail of an installation shows an abstract black-and-white image, on which hangs another abstract black-and-white image framed in white and overlaid with an inner black frame divided into four panes." className="  "
                                    src={exhData.image_url}                                    
                                    sizes="(min-width: 1640px) 724px, (min-width: 1200px) 43.75vw, (min-width: 900px) 43.75vw, (min-width: 600px) 43.75vw,  90.63vw" width="3000" height="1688"
                               />
                                <span className="m-listing__img__overlay"></span>
                            </span>
                            <span className="m-listing__meta">
                                <span className="m-listing__types f-tag">
                                    <em className="type ">Exhibition</em>
                                </span>
                                <br />
                                <strong className="title f-list-4">{exhData.gallery_title}</strong>
                                <br />                              
                                <span className="date f-secondary">
                                    {new Date(exhData.aic_start_at).toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric' })}-
                                    {new Date(exhData.aic_end_at).toLocaleString('default', { month: 'short', day: '2-digit', year: 'numeric' })}
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Exhibition;