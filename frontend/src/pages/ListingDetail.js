import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/auth'

const ListingDetail = () => {

   const params = useParams() 
   
   const dispatch = useDispatch()

   const [listing, setListing] = useState({})
   const [realtor, setRealtor] = useState({})
   const [price, setPrice] = useState(0) 

   // Helps our numbers with commas in cases like prices of things
   const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    useEffect(() => {
        const slug =  params.id 
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get(`${process.env.REACT_APP_API_URL}/listings/${slug}`, config)
        .then(({data}) => {
            setListing(data)
            setPrice(numberWithCommas(data?.price))
        })
        .catch(err => console.error(err))
    })

    useEffect(() => {
        const id = listing.realtor
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        if (id) {
            axios.get(`${process.env.REACT_APP_API_URL}/realtors/${id}`, config)
            .then((res) => {
                if(res?.status !== 200 || res?.statusText !== 'OK') {
                    dispatch(logout())
                }
                setRealtor(res?.data)
            })
            .catch(err => console.error(err))
        }     
    }, [listing.realtor, dispatch])



    const DisplayInteriorImages = () => {
        let images = [];

        images.push(
            <div key={1} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_1 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_1} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_2 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_2} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_3 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_3} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={2} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_4 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_4} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_5 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_5} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_6 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_6} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )

        images.push(
            <div key={3} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_7 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_7} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_8 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_8} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_9 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_9} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )

        images.push(
            <div key={4} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_10 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_10} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_12 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_11} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_12 ? (
                            <div className='listingDetail__display'>
                                <img className='listingDetail__display__image' src={listing.photo_12} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )

        return images
    }

    return (
        <div className='listingDetail'>

            <div className='listingDetail__header'>
                <h1 className='listingDetail__title'>{listing?.title}</h1>
                <p className='listingDetail__location'>
                    {listing.city}, {listing.state}, {listing?.zipcode}
                </p>
            </div>

            <div className='row'>
                <div className='listingDetail__breadcrumb'>
                    <Link className='listingDetail__breadcrumb__link' to='/' >Home</Link>
                </div>
            </div>

            <div className='row'>
                <div className='col-3-of-4'>
                    <div className='listingDetail__display'>
                        <img className='listingDetail__display__image' src={listing?.photo_main} alt='' />
                    </div>
                </div>
                <div className='col-1-of-4'>
                    <div className='listingDetail__display'>
                        <img className='listingDetail__display__image' src={realtor?.photo} alt='' />
                    </div>
                    <h3 className='listingDetail__realtor'>{realtor?.name}</h3>
                    <p className='listingDetail__contact'>{realtor?.phone}</p>
                    <p className='listingDetail__contact'>{realtor?.email}</p>
                    <p className='listingDetail__about'>{realtor?.description}</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-1-of-2'>
                    <ul className='listingDetail__list'>
                        <li className='listingDetail__list__item'>Home Type: {listing?.home_type}</li>
                        <li className='listingDetail__list__item'>Price: ${price}</li>
                        <li className='listingDetail__list__item'>Bedrooms: {listing?.bedrooms}</li>
                        <li className='listingDetail__list__item'>Bathrooms: {listing?.bathrooms}</li>
                        {listing.sqft && <li className='listingDetail__list__item'>Square Feet: {listing?.sqft}</li> }
                    </ul>
                </div>
                <div className='col-1-of-2'>
                    <ul className='listingDetail__list'>
                        <li className='listingDetail__list__item'>Sale Type: {listing?.sale_type}</li>
                        <li className='listingDetail__list__item'>Address: {listing?.address}</li>
                        <li className='listingDetail__list__item'>City: {listing?.city}</li>
                        <li className='listingDetail__list__item'>State: {listing?.state}</li>
                        {listing.zipcode && <li className='listingDetail__list__item'>Zipcode: {listing?.zipcode}</li> }
                    </ul>
                </div>
            </div>

            <div className='row'>
                <p className='listingDetail__description'>{listing.description}</p>
            </div>

            <DisplayInteriorImages />
        </div>
    );
}

export default ListingDetail;
