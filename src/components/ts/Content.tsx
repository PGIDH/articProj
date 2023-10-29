import { useEffect, useState } from 'react';
import Artists from "./Artists";
import Artworks from "./Artworks";
import Blog from "./Blog";
import Events from "./Events";
import Exhibitions from "./Exhibitions";
import Features from "./Features";
import Form from "./Form";
import Highlights from "./Highlights";
import Shop from "./Shop";
import Videos from "./Videos";
import Visit from "./Visit";
import Banner from './Banner';

function Content() {
    // loading exhibition data
    const [exhibitionData, setExhibitionData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/exhibitions?limit=2")
            .then(res => res.json())
            .then(data => setExhibitionData(data));
    }, []);

    // loading events data
    const [eventsData, setEventsData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/events?limit=4")
            .then(res => res.json())
            .then(data => setEventsData(data));
    }, []);

    // loading videos data
    const [videosData, setVideosData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/videos")
            .then(res => res.json())
            .then(data => setVideosData(data));
    }, []);

    // loading highlights data
    const [highlightData, setHighlightData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/highlights?limit=3")
            .then(res => res.json())
            .then(data => setHighlightData(data));
    }, []);

    // loading artists data
    const [artistsData, setartistsData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artists")
            .then(res => res.json())
            .then(data => setartistsData(data));
    }, []);

    // loading artwork data
    const [artworkData, setArtworkData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks")
            .then(res => res.json())
            .then(data => setArtworkData(data));
    }, []);    

    // loading product data
    const [productData, setProductData] = useState();
    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/products?limit=5")
            .then(res => res.json())
            .then(data => setProductData(data));
    }, []);

    return (
        <main id="content" className="">
            <Visit />
            {
                exhibitionData ? <Exhibitions data={exhibitionData!} /> : <></>
            }
            {
                eventsData ? <Events data={eventsData!} /> : <></>
            }
            {
                videosData ? <Videos data={videosData!} /> : <></>
            }

            <Banner />
            {
                highlightData ? <Highlights data={highlightData!} /> : <></>
            }
            {
                artistsData ? <Artists data={artistsData}/> : <></>

            }
            <Blog />

            <Artworks />

            <Features />
            {
            productData ? <Shop data={productData}/> : <></>
            }
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{"@context": "http://schema.org",
                                      "@type": "TouristAttraction",
                                      "name": "The Art Institute of Chicago",
                                      "additionalType": "Museum, LandmarksOrHistoricalBuildings, LocalBusiness",
                                      "description": "Home to a collection of art that spans centuries and the globe, the Art Institute of Chicago is located in the heart of the city—and is one of Tripadvisor&#039;s &quot;Best of the Best&quot; US attractions of 2023.",
                                      "url": "http://www.artic.edu/",
                                      "isAccessibleForFree": true}` }}>
            </script>

            <Form />

        </main>
    )
}
export default Content;