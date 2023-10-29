import { VideosData } from "../model/Models";

function Videos(props: {data: VideosData}) {
    return (
        <div className="o-gallery o-gallery--slider o-gallery----theme-2">
            <div className="clearfix"></div>
            <h3 id="videos" className="o-gallery__title f-module-title-2">Videos</h3>
            <div className="o-gallery--slider__controls" aria-hidden="true">
                <button className="b-drag-scroll__btn-prev btn btn--transparent f-buttons arrow-link arrow-link--back f-link"><svg className="icon--arrow"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon--arrow--24"></use></svg></button>
                <button className="b-drag-scroll__btn-next btn btn--transparent f-buttons arrow-link f-link"><svg className="icon--arrow"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon--arrow--24"></use></svg></button>
            </div>
            <div className="o-gallery__media-wrapper">
                <div className="o-gallery__media s-scrollable" data-behavior="dragScroll">
                    {props?.data.data.map((video)=>(
                    <figure data-type="embed" 
                            data-title={video.title}
                            className="m-media m-media--gallery" data-gtm-event="<i>Remedios Varo: Science Fictions</i> | Exhibition Stories" data-gtm-event-category="video-1">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" >
                            <img alt={video.alt_text} className="  "                            
                            src={video.content}
                            sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="1646" height="926" 
                              />
                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src={video.content} allow="autoplay; encrypted-media" allowFullScreen />
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                <i>{video.title}</i>
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    ))}
                    {/* <figure data-type="embed" data-title="<i>Gio Swaby: Fresh Up</i> | Exhibition Stories" className="m-media m-media--gallery" data-gtm-event="<i>Gio Swaby: Fresh Up</i> | Exhibition Stories" data-gtm-event-category="video-2">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" >
                            <img alt="Three consecutive panels of peach, each containing a silhouette of a woman's face. The faces are featureless and composed of multiple cut swaths of brightly colored geometric and floral fabrics. The central figure wears her hair in Bantu knots." className="  " src="https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="1893" height="1065" data-pin-media="https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338" srcSet="https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=113 200w, https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338 600w, https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=563 1000w, https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/27db84e9-3b10-454f-8b4c-77aab9a3e45d/10_NewGrowth2_press.jpg?rect=563%2C88%2C1893%2C1067&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1688 3000w" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/BnsQkYjacn0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                <i>Gio Swaby: Fresh Up</i> | Exhibition Stories
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure> */}
                    {/* <figure data-type="embed" data-title="Along the Seine: The Northwestern Suburbs of Paris in the 1880s | Discovering Van Gogh" className="m-media m-media--gallery" data-gtm-event="Along the Seine: The Northwestern Suburbs of Paris in the 1880s | Discovering Van Gogh" data-gtm-event-category="video-3">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="Alongtheriverseine Thumbnail" className="  " src="https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="1711" height="962" data-pin-media="https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=337" srcSet="https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=112 200w, https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=337 600w, https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=562 1000w, https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=843 1500w, https://artic-web.imgix.net/1b7f02b0-fe7f-421e-9fb9-7731b4adf8ee/AlongTheRiverSeine_Thumbnail.jpg?rect=0%2C5%2C1711%2C962&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1687 3000w" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/x8TgDmIMqpE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                Along the Seine: The Northwestern Suburbs of Paris in the 1880s | Discovering Van Gogh
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="Hannah Brown Skeele&amp;#8217;s <i>Fruit Piece</i> | Art Institute Essentials Tour" className="m-media m-media--gallery" data-gtm-event="Hannah Brown Skeele’s <i>Fruit Piece</i> | Art Institute Essentials Tour" data-gtm-event-category="video-4">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="J10716 Int" className="  " src="https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=112 200w, https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=337 600w, https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=562 1000w, https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1687 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="4011" height="2256" data-pin-media="https://artic-web.imgix.net/785e8d7a-1f9c-4672-8cc9-01ecde7baf56/J10716-int.png?rect=763%2C1122%2C4011%2C2265&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=337" />
                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/QtIt2Iaq5Ek" allow="autoplay; encrypted-media" allowFullScreen />
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                Hannah Brown Skeele’s <i>Fruit Piece</i> | Art Institute Essentials Tour
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="Elegance and beauty in a timeless bronze bust | Kyla Thomas | Playing Favorites" className="m-media m-media--gallery" data-gtm-event="Elegance and beauty in a timeless bronze bust | Kyla Thomas | Playing Favorites" data-gtm-event-category="video-5">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="Pf Kylat Source" className="  " src="https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=113 200w, https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338 600w, https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=563 1000w, https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1688 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="1920" height="1080" data-pin-media="https://artic-web.imgix.net/0a09ff5e-e3f9-4e5a-a905-f0c91e5e22a4/PF_KylaT_Source.png?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/cs75isUzAeg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                Elegance and beauty in a timeless bronze bust | Kyla Thomas | Playing Favorites
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="Vase (Maebyong) | Art Institute Essentials Tour" className="m-media m-media--gallery" data-gtm-event="Vase (Maebyong) | Art Institute Essentials Tour" data-gtm-event-category="video-6">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="49c8b5f7 E4f6 96a8 Cb44 2f0cb420f29f" className="  " src="https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=112 200w, https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=337 600w, https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=562 1000w, https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1687 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="2093" height="1177" data-pin-media="https://artic-web.imgix.net/bad6500f-a490-4533-a413-aedc76af0d3a/49c8b5f7-e4f6-96a8-cb44-2f0cb420f29f.jpg?rect=147%2C830%2C2093%2C1179&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=337" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/pRdhZISjs5E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                                </iframe>
                            </textarea>

                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                Vase (Maebyong) | Art Institute Essentials Tour
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="Reframing &amp;#8220;A Sunday on La Grande Jatte—1884&amp;#8221; | Artwork Spotlight" className="m-media m-media--gallery" data-gtm-event="Reframing “A Sunday on La Grande Jatte—1884” | Artwork Spotlight" data-gtm-event-category="video-7">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="Photograph of numerous figures in blue uniforms surrounding and touching the white frame of Seurat's &quot;La Grande Jatte&quot; on all sides, some on ladders, a red machine at center." className="  " src="https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=113 200w, https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338 600w, https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=563 1000w, https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1688 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="3000" height="1688" data-pin-media="https://artic-web.imgix.net/eb53a023-bc44-4a24-9de5-ff621e791de9/J5608_001-int.jpg?rect=0%2C677%2C3000%2C1688&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/Xnd0JeZabb0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                                </iframe>
                            </textarea>

                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                Reframing “A Sunday on La Grande Jatte—1884” | Artwork Spotlight
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="Bisa Butler&amp;#8217;s <i>The Safety Patrol</i> | Art Institute Essentials Tour" className="m-media m-media--gallery" data-gtm-event="Bisa Butler’s <i>The Safety Patrol</i> | Art Institute Essentials Tour" data-gtm-event-category="video-8">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="" className="  " src="https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=113 200w, https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338 600w, https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=563 1000w, https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1688 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="2833" height="1594" data-pin-media="https://artic-web.imgix.net/null5b903214-da24-45b8-b136-2d855302ec00/IM046505-int_press.jpg?rect=77%2C431%2C2833%2C1594&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/Wmi0OG3hdOE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                                </iframe>
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                Bisa Butler’s <i>The Safety Patrol</i> | Art Institute Essentials Tour
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="<i>Statue of a Young Satyr Wearing a Theater Mask of Silenos</i> | Art Institute Essentials Tour" className="m-media m-media--gallery" data-gtm-event="<i>Statue of a Young Satyr Wearing a Theater Mask of Silenos</i> | Art Institute Essentials Tour" data-gtm-event-category="video-9">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="An ancient Roman statue of a young boy wearing a theater mask with the face of an older satyr that appears mischievous and menacing." className="  " src="https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=113 200w, https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338 600w, https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=563 1000w, https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1688 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="2419" height="1361" data-pin-media="https://artic-web.imgix.net/6189db79-e4e9-426d-9210-fa36e65bf212/IM003526-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?rect=0%2C391%2C2419%2C1360&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/9kYVoBdxPuA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                                </iframe>
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                <i>Statue of a Young Satyr Wearing a Theater Mask of Silenos</i> | Art Institute Essentials Tour
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure>
                    <figure data-type="embed" data-title="The <i>Hartwell Memorial Window</i> | Artwork Spotlight" className="m-media m-media--gallery" data-gtm-event="The <i>Hartwell Memorial Window</i> | Artwork Spotlight" data-gtm-event-category="video-10">
                        <div className="m-media__img m-media__img--video" data-behavior="fitText triggerMediaModal" data-platform="" aria-label="Media embed, click to play" tabIndex={0}>
                            <img alt="Hartwellmemorialwindow Thumbnail" className="  " src="https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format&amp;q=1&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=750&amp;h=422&amp;blur=1200&amp;sat=20" srcSet="https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=200&amp;h=113 200w, https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=400&amp;h=225 400w, https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338 600w, https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1000&amp;h=563 1000w, https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=1500&amp;h=844 1500w, https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=3000&amp;h=1688 3000w" sizes="(min-width: 1640px) 466px, (min-width: 1200px) 35.94vw, (min-width: 900px) 35.94vw, (min-width: 600px) 54.69vw,  78.13vw" width="1920" height="1080" data-pin-media="https://artic-web.imgix.net/null4a736529-dcc7-4599-abc6-9d886d592827/HartwellMemorialWindow_Thumbnail.jpg?rect=0%2C0%2C1920%2C1080&amp;auto=format%2Ccompress&amp;q=80&amp;fit=crop&amp;crop=faces%2Ccenter&amp;w=600&amp;h=338" />

                            <svg className="icon--play-multi">
                                <use xlinkHref="#icon--play--48"></use>
                                <use xlinkHref="#icon--play--64"></use>
                                <use xlinkHref="#icon--play--96"></use>
                            </svg>

                            <textarea style={{ display: 'none' }}>
                                <iframe src="https://www.youtube.com/embed/B4fXxok3t8M" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                                </iframe>
                            </textarea>
                        </div>
                        <figcaption>
                            <div className="f-caption-title"><div>
                                The <i>Hartwell Memorial Window</i> | Artwork Spotlight
                            </div></div> <br />
                            <div className=" f-caption"></div>
                        </figcaption>
                    </figure> */}
                </div>
            </div>
        </div>
    )
}

export default Videos;