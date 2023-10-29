import { ArtistsData } from "../model/Models";

function Artists(props: { data: ArtistsData }) {
    return (
        <div className="o-gallery o-gallery--slider o-gallery----theme-2 o-gallery--artist">
            <div className="clearfix"></div>
            <h3 id="artists" className="o-gallery__title f-module-title-2">Artists</h3>
            <div className="o-gallery--slider__controls" aria-hidden="true">
                <button className="b-drag-scroll__btn-prev btn btn--transparent f-buttons arrow-link arrow-link--back f-link" ><svg className="icon--arrow"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon--arrow--24"></use></svg></button>
                <button className="b-drag-scroll__btn-next btn btn--transparent f-buttons arrow-link f-link"><svg className="icon--arrow"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon--arrow--24"></use></svg></button>
            </div>
            <div className="o-gallery__media-wrapper">
                <div className="o-gallery__media s-scrollable" data-behavior="dragScroll">
                    {props?.data.data.map((artists) => (
                        <a href={artists.api_link} data-gtm-event="Dawoud Bey" data-gtm-event-category="artist-listing-1">
                            <figure data-type="image" data-title="Dawoud" className="m-media m-media--gallery">
                                <div className="m-media__img" data-behavior="fitText " data-platform="">
                                    <img alt={artists.description}
                                        className="  "
                                        src={artists.api_link}
                                        sizes="(min-width: 1640px) 310px, (min-width: 1200px) 18.75vw, (min-width: 900px) 18.75vw, (min-width: 600px) 35.94vw,  65.63vw" width="1081" height="1441"
                                        data-pin-media="https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=800"
                                        srcSet="https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=267 200w, https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=533 400w, https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=800 600w, https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=1333 1000w, https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=2000 1500w, https://artic-web.imgix.net/nullf32a93b0-6183-491b-be1a-3d2e445ae450/264065_3997480.jpg?rect=0%2C50%2C1081%2C1444&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=3999 3000w" />
                                </div>
                                <figcaption>
                                    <div className="f-caption-title"><div>
                                        {artists.sort_title.split(',')[1]}
                                    </div></div> <br />
                                    <div className="f-fit-text f-caption" style={{ whiteSpace: 'nowrap', display: 'inline-block', fontSize: '36px' }}>{artists.sort_title.split(',')[0]}</div>
                                </figcaption>
                            </figure>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Artists;