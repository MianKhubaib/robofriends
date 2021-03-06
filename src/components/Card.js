import React from 'react';

const Card = ({name , id , email}) => {
   return(
    <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
        <img alt='robot' src={`https://robohash.org/${id}?200x2001`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
   );
}
export default Card;