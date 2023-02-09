import React from 'react';
import Card from './Card';

const Listings = ({listings}) => {

    
    let listingPerPage = []
    let result = []

    const fetchListings = () => {
        listings?.map(listing => {
            return listingPerPage.push(
                <Card title={listing?.title} 
                    address={listing?.address} 
                    city={listing?.city} 
                    state={listing?.state} 
                    price={listing?.price} 
                    slug={listing?.slug} 
                    bedrooms={listing?.bedrooms} 
                    bathrooms={listing?.bathrooms} 
                    sales_type={listing?.sales_type} 
                    home_type={listing?.home_type}
                    photo_main={listing?.photo_main}               
                />
            )
        })

        //Iterating through the listings and fetching the next three for each pages
        for (let i = 0; i < listings?.length; i += 3) {
            result.push(
                <div className="row">
                    <div className="col-1-of-3">
                        {listingPerPage[i]}
                    </div>
                    <div className="col-1-of-3">
                    {/* Ternary Operator incase the listings aren't up to that certain amount after iteration  */}
                        {listingPerPage[i+1] ? listingPerPage[i+1] : null}  
                    </div>
                    <div className="col-1-of-3">
                        {/* Ternary Operator incase the listings aren't up to that certain amount after iteration  */}
                        {listingPerPage[i+2] ? listingPerPage[i+1] : null}  
                    </div>
                </div>
            )
        }
        return result;
    }

    return (
        <div>
            {fetchListings()}    
        </div>
    );
}

export default Listings;
