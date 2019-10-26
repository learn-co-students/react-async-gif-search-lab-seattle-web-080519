import React from 'react'

const GifSearch = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <input type='text' onChange={props.handleChange}/>
            <input type='submit'/>
        </form>
    )

}

export default GifSearch