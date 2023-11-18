import React, { Component } from 'react'
import CardItems from './card-items'

const Card = () => {

    const handleAddButtonClick = () => {
        // Add your logic here when the "Add" button is clicked
        console.log('Add button clicked!');
      };
    return (
        <>
            <div className="flex flex-wrap justify-center items-center h-screen bg-gray-200">
                <CardItems imageUrl="https://placekitten.com/300/200" // Replace with your actual image URL
                    name="Sample Name"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    onAddButtonClick={handleAddButtonClick} />
            </div>
        </>

    )


}


export default Card