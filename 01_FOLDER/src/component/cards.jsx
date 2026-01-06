import React from 'react'

const cards = (props) => {
    return (
        <div className='parent'>
            <div className="cards">
                <h2><img src={props.img}/></h2>
                <h1>{props.user},{props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non praesentium consequatur fugiat similique ab.</p>
            </div>
        </div>
    )
}
export default cards
