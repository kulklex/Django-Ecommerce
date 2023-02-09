import React from 'react';
// import  { Audio } from 'react-loader-spinner'
import { useState } from 'react';
import { axiosInstance } from '../redux/actions/auth';

const ListingsForm = ({setListings}) => {

    const [formData, setFormData] = useState({
    realtor : "", 
    slug : "",
    title : "",
    address : "",
    city : "",
    state : "",
    zipcode : "",
    description : "",
    sales_type : "For Sale",
    price : "$0+",
    bedrooms : "0+",
    bathrooms : "0+", 
    home_type : "Bungalow", 
    photo_main : "",
    photo_1 : " ",   
    photo_2 : " ",   
    photo_3 : " ",   
    photo_4 : " ",   
    photo_5 : " ",   
    photo_6 : " ",   
    photo_7 : " ",   
    photo_8 : " ",   
    photo_9 : " ",   
    photo_10 : " ",  
    is_published : false,  
    has_photos: true,
    days_listed: '1 or less',
    keywords: '',    
    })

    const { days_listed, keywords, has_photos, sales_type, price, bedrooms, bathrooms, home_type,} = formData;
   
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const getListings = await axiosInstance.post('/listings/search', {...formData})
            const {data} = getListings
            setListings(data)
            setIsLoading(false)
            window.scrollTo(0, 0) //scrolls to the top
        } catch (error) {
            setIsLoading(false)
            window.scrollTo(0, 0)
        }
    }
    // moment(Date.now()).fromNow()
    return (
        <form className='listingform' onSubmit={(e) => handleSubmit(e)}>
            <div className="row">

                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="sales_type" className="listingform__label">Sale or Rent</label>
                        <select name="sales_type" id="sales_type" className="listingform__select" value={sales_type} onChange={(e) => handleChange(e)}>
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                    </div>

                    <div className="listingform__section">
                        <label htmlFor="price" className="listingform__label">Minimum Price</label>
                        <select name="price" id="price" className="listingform__select" value={price} onChange={(e) => handleChange(e)}>
                            <option>$0+</option>
                            <option>$100,000+</option>
                            <option>$200,000+</option>
                            <option>$500,000+</option>
                            <option>$1,000,000+</option>
                            <option>$1,200,000+</option>
                            <option>$1,500,000+</option>
                            <option>$2,000,000+</option>
                            <option>Any</option>
                        </select>
                    </div>
                    
                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="bedrooms" className="listingform__label">Bedrooms</label>
                        <select name="bedrooms" id="bedrooms" className="listingform__select" value={bedrooms} onChange={(e) => handleChange(e)}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>

                    <div className="listingform__section">
                        <label htmlFor="bathrooms" className="listingform__label">Bathrooms</label>
                        <select name="bathrooms" id="bathrooms" className="listingform__select" value={bathrooms} onChange={(e) => handleChange(e)}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                </div>

                <div className="col-1-of-6"> 
                    <div className="listingform__section">
                        <label htmlFor="has_photos" className="listingform__label">Has Photos</label>
                        <select name="has_photos" id="has_photos" className="listingform__select" value={has_photos} onChange={(e) => handleChange(e)}>
                            <option>1+</option>
                            <option>3+</option>
                            <option>5+</option>
                            <option>10+</option>
                            <option>15+</option>
                        </select>
                    </div>
                    
                    <div className="listingform__section">
                        <label htmlFor="home_type" className="listingform__label">Home Type</label>
                        <select name="home_type" id="home_type" className="listingform__select" value={home_type} onChange={(e) => handleChange(e)}>
                            <option>Bungalow</option>
                            <option>One Storey</option>
                            <option>Two Storey</option>
                            <option>Three Storey</option>
                            <option>Duplex</option>
                            <option>Multiple Storey</option>
                        </select>
                    </div>
                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="keywords" className="listingform__label">Keywords</label>
                        <input className="listingform__input" name='keywords' type='text' onChange={(e) => handleChange(e)} value={keywords}/>
                    </div>
                    <br/>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='days_listed'>Days Listed</label>
                        <select className='listingform__select' name='days_listed' onChange={e => handleChange(e)} value={days_listed}>
                            <option>1 of less</option>
                            <option>2 of less</option>
                            <option>5 of less</option>
                            <option>10 of less</option>
                            <option>20 of less</option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>

                <div className="col-1-of-6">
                    {
                        isLoading ? " Is Loading..."
                        // <div className="listingform__loader">
                        //     <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass visible/>
                        // </div> 
                        : 
                        <button className='listingform__button listingform__button--primary'>Save</button>
                    }
                </div>
            </div>
        </form>
    );
}

export default ListingsForm;
