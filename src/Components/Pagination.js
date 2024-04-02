import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2'>
      <div className=' py-2 flex justify-between w-11/12 max-w-[670px]'>

        <div className='flex gap-x-2'>
        {   page>1 &&
            (<button className='rounded-md border-2 px-4 py-1' onClick={()=>handlePageChange(page-1)}>
                Previous
            </button>)
        }

        {
            page<totalPages &&
            (<button className='rounded-md border-2 px-4 py-1'  onClick={()=>handlePageChange(page+1)}>
                Next
            </button>)
        }
        </div>


        <p className='font-bold text-sm mt-2'>
            Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination
