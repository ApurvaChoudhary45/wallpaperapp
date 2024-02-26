import React from 'react'
import { saveAs } from 'file-saver'
const PictureContent = (props)=> {
    let {alt_description, imgUrl, date} = props
    const downloadUrl = `https://api.unsplash.com/photos/?client_id=CEOoPbBNPsaqDQCN86ctYrsiSJY75R9mIoKHPGCV0o4`
    const downloadImg = ()=>{
        saveAs(downloadUrl, 'DownloadImage.png')
    }

    const capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (
        <div className="container my-3">
            <div className="card" style={{ width: '20rem' }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{capital(alt_description)}</h5>
                    {/* <p className="card-text">{description}</p> */}
                    <p className="card-text"><small className="text-primary">Created on - {new Date(date).toGMTString()}</small></p>
                    <a href={imgUrl} className="btn btn-dark">View</a>
                    <button className="btn btn-dark" onClick = {downloadImg} style={{position : 'absolute', left : '205px'}}>Download</button>
                </div>
            </div>
        </div>
    )
}
export default PictureContent