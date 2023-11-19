import React, { Component } from 'react'
import CardItems from './card-items'

const Card = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center h-screen bg-gray-200">
                <CardItems imageUrl="https://placekitten.com/300/200" // Replace with your actual image URL
                    name="Sample Name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                     />
            </div>
        </>

    )


}


export default Card