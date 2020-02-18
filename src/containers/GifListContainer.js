import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        search: ""
    }

    fetchGif = () => {
        // fetch("http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(json => { this.setState(
            // We only want the path to the actual image, which found at images.original.url:
            {gifs: json.data.slice(0, 3)}, () => {console.log(this.state.gifs)} 
        )})
    };

    componentDidMount() {
        this.fetchGif();
    };


    handleSubmit = (input) => {
        this.setState({
            search: input
        },this.fetchGif())

    }

    render() {
        return (
            <div>
            <GifSearch handleSubmit={this.handleSubmit}/>
            <GifList gifs={this.state.gifs} />
            </div>
        )
    };
};
export default GifListContainer;