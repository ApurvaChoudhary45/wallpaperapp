import React, { useState, useEffect } from 'react'
import PictureContent from './PictureContent'
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const Picture = (props) => {
    const [results, setPictures] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [total_pages, setTotal_pages] = useState(0)
    
    const capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    document.title = `Galleria - ${capital(props.category)}`
    const componentDidMount = async () => {
        props.setprogress(0)
        let url = `https://api.unsplash.com/search/photos?page=${page}&query=${props.category}&client_id=CEOoPbBNPsaqDQCN86ctYrsiSJY75R9mIoKHPGCV0o4&pageSize=${props.pagesize}`
        let data = await fetch(url)
        props.setprogress(30)
        setLoading(true)
        let parsedData = await data.json()
        props.setprogress(70)
        setPictures(parsedData.results)
        setTotal_pages(parsedData.total_pages)
        props.setprogress(100)
        setLoading(false)

        console.log(parsedData)
    }
    useEffect(() => {
        componentDidMount();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const fetchMoreData = async () => {
    
        let url = `https://api.unsplash.com/search/photos?page=${page+1}&query=${props.category}&client_id=CEOoPbBNPsaqDQCN86ctYrsiSJY75R9mIoKHPGCV0o4&pageSize=${props.pagesize}`
        // this.setState({ loading: true })
        setPage(page+1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setPictures(results.concat(parsedData.results))
        setTotal_pages(parsedData.total_pages)
    }


    return (
        <>
            <h2 className='text-center' style={{ margin: '25px 0', marginTop: '85px' }}>Galleria -  Top {capital(props.category)} Wallpapers</h2>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={results.length}
                next={fetchMoreData}
                hasMore={results.length !== total_pages}
                loader={<Spinner />}
            >
                <div className="container">
                <div className="row">
                    {results.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <PictureContent slug={element.slug === null ? 'Unknown' : element.slug} description={element.description === null ? 'No Description' : element.description} imgUrl={element.links.download} date={element.created_at} alt_description = {element.alt_description}/>
                        </div>
                    })}
                </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
Picture.defaultProps = {
    pagesize: 8,
    category: 'forest'
}
Picture.propTypes = {
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default Picture
