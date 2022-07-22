import React from 'react';

const SingleCrads = ({card}) => {
    console.log(card);
    return (
        <div className={`w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 cursor-pointer ${card.bg} ${card.mt} border-rose-900`}>
            <img className='w-20 mx-auto bg-white mt-[-3rem]' src={card.img} alt="" />
            <h2 className='text-black text-center text-2xl font-bold my-3'>{card.title}</h2>
            <p className='text-black text-center my-2 text-xl font-bold'>{card.price}</p>
            <div className='text-black text-center font-medium'>
                <p>{card.d1}</p>
                <p>{card.d2}</p>
                <p>{card.d3}</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] hover:bg-black hover:text-white transition-all rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
    );
};

export default SingleCrads;