import { ProductData } from "../model/Models";

function Shop(props: {data: ProductData}) {
    return (
        <div>
            <div className="m-title-bar ">
                <h2 className="title f-module-title-2" id="from-the-shop">From the shop</h2>
                <span className="m-title-bar__links" aria-labelledby="from-the-shop">
                    <span>
                        <a href="https://shop.artic.edu/" className="f-link" data-gtm-event="home-shop" data-gtm-event-category="nav-link">
                            Explore the shop<span aria-hidden="true">&nbsp;&nbsp;›</span>
                        </a>
                    </span>
                </span>
            </div>
            <span className="hr"></span>
            <ul className="o-grid-listing o-grid-listing--single-row o-grid-listing--scroll@xsmall o-grid-listing--scroll@small o-grid-listing--hide-extra@medium o-grid-listing--gridlines-cols o-grid-listing--4-col@medium o-grid-listing--5-col@large o-grid-listing--5-col@xlarge s-scrollable" data-behavior="dragScroll">
                {props?.data.data.map((product)=>(
                <li className="m-listing m-listing--w-meta-bottom">
                    <a href="https://shop.artic.edu/products/281550" className="m-listing__link" target="_blank">
                        <span className="m-listing__img m-listing__img--tall">
                            <img alt="" className="  " 
                            src={product.image_url}
                            sizes="(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 216px,  216px" width="200" height="267" 
                            />
                        </span>
                        <span className="m-listing__meta">
                            <strong className="title f-list-2">{product.title}</strong>
                        </span>
                    </a>
                </li>
                ))}
            </ul>
            <nav className="m-links-bar m-links-bar--title-bar-companion" data-behavior="" aria-label="page secondary">
                <h3 className="sr-only" id="h-visit-nav-explore-the-shop">Page secondary navigation</h3>
                <ul className="m-links-bar__items-primary" data-links-bar-primary="" aria-labelledby="h-visit-nav-explore-the-shop">
                    <li className="m-links-bar__item">
                        <a className="m-links-bar__item-trigger btn f-buttons btn btn--secondary" href="https://shop.artic.edu/" data-gtm-event="home-shop" data-gtm-event-category="nav-link">
                            Explore the shop
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Shop;