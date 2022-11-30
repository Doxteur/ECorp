import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';


function TestInfiniteScroll() {

    //fetch localhost:8000/pagination?page=1 laravel api
    const [items, setItems] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [hasMore, setHasMore] = React.useState(true);

    React.useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:8000/api/pagination?page=${page}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(items.concat(data.data));
                setHasMore(data.current_page < data.last_page);
            })
        }, 500);
     
    }, [page]);

    //fetchData
    const fetchMoreData = () => {
        setPage(page + 1);
    }

  return (

    <InfiniteScroll
    dataLength={items.length} //This is important field to render the next data
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={
        <p style={{ textAlign: 'center' }}>
            <b>Plus de post disponibles</b>
        </p>
    }
    refreshFunction={fetchMoreData}
    pullDownToRefresh
    pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
    }

    // below props only if you need pull down functionality
  >
    {items.map((i, index) => (
        <div style={{ border: '1px solid red', height: '200px' }} key={index}>
            {i.title}
        </div>
    ))}

  </InfiniteScroll>
                
  )
}

export default TestInfiniteScroll