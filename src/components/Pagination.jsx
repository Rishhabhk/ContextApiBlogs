import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,totalPages,pageChangeHandler} = useContext(AppContext);

  return (
    <div>
        {page > 1 && <button onClick={()=>pageChangeHandler(page-1)}>previous</button> }
        {page < totalPages && <button onClick={()=>pageChangeHandler(page+1)}>next</button> }
        <p>Page {page} out of {totalPages}</p>

    </div>
  )
}

export default Pagination