import React, { useState } from 'react'
import ImageList from './ImageList';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';


const Home = () => {

    const [imageData, setImageData] = useState([]);

const loadFunc = e => {
        axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
            .then(response => setImageData(old => [...old , ...response.data]));
}


    return (
        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >    
               <ImageList imageData={imageData} />

            </InfiniteScroll>

        </>
    )
}

export default Home