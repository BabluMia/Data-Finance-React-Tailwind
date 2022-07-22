import React from 'react';
import cardImg2 from '../assets/double.png'
import cardImg1 from '../assets/single.png'
import cardImg3 from '../assets/triple.png'
import SingleCrads from './SingleCrads';

const Cards = () => {
    const details = [
        {_id:1,
        title:"Single User",
        price:'$149',
        img:cardImg1,
        d1:"500GB Storage.",
        d2:"1 User Allowed.",
        d3:"Send Up To 2GB",
        bg:'bg-white',
        mt:''
        },
        {_id:2,
        title:"Partnership",
        price:'$199',
        img:cardImg2,
        d1:"1TB Storage",
        d2:"3 User Allowed",
        d3:"Send Up to 10GB",
        bg:'bg-gray-100',
        mt:'mt-[20px]'
        },
        {_id:3,
        title:"Group Account",
        price:'$249',
        img:cardImg3,
        d1:"5TB Storage",
        d2:"10 User Allowed",
        d3:"Send Up To 20GB",
        bg:'bg-white',
        mt:''
        },
    ]
    // console.log(details);
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {
                    details.map(card => <SingleCrads key={card._id} card={card} />)
                    
                }
                
            </div>
        </div>
    );
};

export default Cards;