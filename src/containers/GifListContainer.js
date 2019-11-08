import React, {Component} from 'react'
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
    
    constructor () {
        super();
        this.state = {
            search: '',
            gifs: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(
            `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
        ).then(response => response.json())
        .then(json => this.updateStateWithFetchRequest(json))
        .catch(err => console.log(err.message))
    }

    updateStateWithFetchRequest(json) {
        let firstThreeGifs = json.data.splice(0,3);
        this.setState({gifs: firstThreeGifs})
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    
    render() {
        return(
            <div>
                <GifSearch handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}

export default GifListContainer