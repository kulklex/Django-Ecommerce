import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({title, address, bathrooms, bedrooms, home_type, sales_type, state, city, price, slug, photo_main,}) => {
    // Helps our numbers with commas in cases like prices of things
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }


    return (
        <div className='card'>
            <h3 className='card__title'>{title}</h3>
            <div className='card__header'>
                <img className='card__header__photo' src={photo_main} alt='House' />
            </div>
            <p className='card__location'>{address}, {city}, {state}</p>
            <div className='row'>
                <div className='col-1-of-3'>
                    <p className='card__info'>Price: ${numberWithCommas(price)}</p>
                    <p className='card__info'>Bedrooms: {bedrooms}</p>
                    <p className='card__info'>Bathrooms: {bathrooms}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__saletype'>{sales_type}</p>
                    <p className='card__hometype'>{home_type}</p>
                </div>
            </div>
            <Link className='card__link' to={`/listings/${slug}`}>View Listing</Link>
        </div>
    );
}

export default Card;
