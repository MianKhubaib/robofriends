import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>
{
    return (
    <div className='pa2 bg-light-green dib br3 pa3 ma2 grow shadow-5'>
       <input 
            className=''
           type='search'
           placeholder='Search Robots'
           onChange={searchChange}
           />
    </div>
    );
}

export default SearchBox;