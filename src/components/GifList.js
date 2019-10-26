import React from 'react'

const GifList = (props) => {
    console.log(props)
    // {/*<li><image src={gif.images.original.url}/></li>*/}
    return (
        <ul>
            {props.gifs.map(gif => {
                return <li><img src={`${gif.images.original.url}`}/></li> 
            })}
        </ul>
    )
}

export default GifList