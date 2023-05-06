import React from 'react';

const Pagination = ({listingPerPage, active, count, visitPage, previousPage, nextPage}) => {
    const GetNumbers = () => {
        let numbers = []
        let itemsPerPage = listingPerPage
        let pageNumber = 1;

        for (let i = 0; i < count; i += itemsPerPage) {
            const page = pageNumber
            let content = null

            if(active === page) {
                content = (<div key={i} className='pagination__number pagination__number--active'>
                    {pageNumber}
                </div>)
            } else {
                content = (<div key={i} onClick={() => visitPage(page)} className='pagination__number' >
                    {pageNumber}
                </div>)
            }

            numbers.push(content)
            pageNumber++
        }
        return numbers
    }   

    return (
        <div className='pagination'>
            <div className='pagination__number' onClick={() => previousPage()}>Previous</div>
            <GetNumbers />
            <div className='pagination__number' onClick={() => nextPage()}>Next</div>
        </div>
    )
}

export default Pagination;
