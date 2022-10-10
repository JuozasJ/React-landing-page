import chromeIcon from "./assets/Chrome Icon.svg"
import appleIcon from "./assets/Apple Store Icon.svg"

function StoreLink(props) {
    return (
        <a href={props.linkUrl} target="_blank">
            <div className="store-link">
                <img src={props.imgUrl} alt={props.imgAlt} />
                <div>
                    <p>available in the</p>
                    <h4>{props.storeName}</h4>
                </div>
            </div>
        </a>
    )
}

function Rating() {
    return (
        <div className="rating">
            <svg viewBox="0 0 24 24" fill='white'><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            <svg viewBox="0 0 24 24" fill='white'><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            <svg viewBox="0 0 24 24" fill='white'><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            <svg viewBox="0 0 24 24" fill='white'><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            <svg viewBox="0 0 24 24" fill='white'><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
            <span>Chrome Store reviews</span>
        </div>
    )
}

const storeLinksData = [
    {
        imgUrl: chromeIcon,
        imgAlt: "Chrome Icon",
        storeName: "chrome web store",
        linkUrl: "#"
    },
    
    {
        imgUrl: appleIcon,
        imgAlt: "Apple Store Icon",
        storeName: "apple app store",
        linkUrl: "#"
    }
]

function StoreLinks() {
    const storeElements = storeLinksData.map(store => <StoreLink key={store.storeName} {...store} />)

    return (
        <section className="store-section">
            <div className="store-links">
                {storeElements}
                <Rating />
            </div>
        </section>
    )
}

export default StoreLinks
