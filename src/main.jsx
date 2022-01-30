import locaIcon from './location_icon.png'

export default function Main(props) {
    return (
        <div className="main-cont">
            <img src={props.items.imgUrl} alt="main-icon" />
            <div className='main-sub-cont'>
            <div className='location-cont'><img src={locaIcon} alt="location icon" />    
            <h2>{props.items.location}</h2>
            </div>
            <a href="https://maps.google.com/maps/ms?ie=UTF8&hl=en&msa=0&msid=203233677966749432467.00049d778584ad338f487&ll=35.365256,138.737411&spn=0.09799,0.145912&z=12&output=embed">View on Google Maps</a>
            <h1>{props.items.title}</h1>
            <h3>{props.items.startDate} - {props.items.endDate}</h3>
            <p>{props.items.description}</p>
            </div>
        </div>
    );
}