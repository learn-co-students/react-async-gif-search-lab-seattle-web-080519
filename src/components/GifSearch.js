import React from 'react'

class GifSearch extends React.Component {
    state = {
        search: ""
    };

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    };

    render() {
        return(
            <div>
                <form onSubmit={(e) => {e.preventDefault();
                this.props.handleSubmit(this.state.search)}}>

                    <input type="text" value={this.state.search} onChange={this.handleChange}/>
                    <input type="Submit"/>
                </form>
            </div>
        )
    }
}
export default GifSearch;