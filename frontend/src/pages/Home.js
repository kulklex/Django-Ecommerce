import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ListingsForm from '../components/ListingsForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';

const Home = () => {
    const [listings, setListings] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [listingPerPage, setListingPerPage] = useState(3)
    const [activePage, setActivePage] = useState(1)

    const indexOfLastListing = currentPage + listingPerPage // To know where the last listing stopped so we can continue from there at the next page
    const indexOfFirstListing = indexOfLastListing - listingPerPage // To know where to start listing at the particular page
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing) // The exact listings that will be displayed on a particular page (Slicing from where we stopped at the last page -> where we ought to stop for that current page 

    const visitPage = (page) => {
        setCurrentPage(page)
        setActivePage(page)
    }

    const previousPage = () => {
        // We just keep reducing the page number.
        // It stops only when we get to 1 which is the first page. 
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            setActivePage(currentPage - 1)
        }
    }

    const nextPage = () => {
        // Remember the listings are displayed 3 per page
        // We're only going to the next page if and only if the listings aren't for the current page
        if (currentPage !== Math.ceil(listings.length / 3)) {
            setCurrentPage(currentPage + 1)
            setActivePage(currentPage + 1)
        }
    }

    return (
        <main className='home'>
            <Helmet>
                <title>Real-Estate Home</title>
                <meta name='description' content='A real estate app created with Django and React'/>
            </Helmet>
            <section className="home__form">
                <ListingsForm setListings={setListings}/>
            </section>
            <section className="home__listings">
                <Listings listings={currentListings} />
            </section>
            <section className="home__pagination">
                <div className="row">
                    {
                        listings.length !== 0 ?
                         (<Pagination
                             listingPerPage={listingPerPage} count={listings.length}  visitPage={visitPage} 
                             previousPage={previousPage}   nextPage={nextPage} active={activePage} setActivePage={setActivePage} />) 
                        : null
                    }
                </div>
            </section>
        </main>
    );
}

export default Home;
