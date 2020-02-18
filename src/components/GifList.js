import React from 'react'

class GifList extends React.Component {

    renderGifs = () => {
        return(
            <ul>
                {this.props.gifs.map(gif => <li><img src={gif.images.downsized.url} alt=''/>
                </li>)}
            </ul>
        )
    }
    render() {
        return(
            <div>
                {this.renderGifs()}
            </div>
        )
    }
};
export default GifList;