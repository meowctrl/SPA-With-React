import React, { useState, useEffect } from 'react';

function Search({ value, onChange }) {

    return(
        <div>
            <input className='search' value={value} onChange={(e)=>onChange(e.target.value)} placeholder="Search projects"></input>
        </div>
    )
}
export default Search;