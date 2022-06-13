import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ImageList from './ImageList';
import InfiniteScroll from 'react-infinite-scroller';

const Search = () => {
    const [searchList, setSearchList] = useState([]);
    const [searchParams] = useSearchParams();

    const loadFunc = e => {
        axios.get(`https://api.unsplash.com/search/photos/?query=${searchParams.get('q')}&page=${e}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
            .then(response => setSearchList(list => [...list, ...response.data.results]));
    }

    return (
        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <ImageList imageData={searchList} />

            </InfiniteScroll>

        </>
    )
}

export default Search