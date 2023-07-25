import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[260px] text-white bg-jacarta-900 h-[100vh]'>
            <div className='px-8 py-4 text-jacarta-900'>
                <div className=' bg-light-base p-2 flex gap-1 rounded-md'>
                    <div className='flex'>
                        <svg className='m-auto' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="u:plus">
                                <path id="Vector" d="M19 11.5H13V5.5C13 5.23478 12.8946 4.98043 12.7071 4.79289C12.5196 4.60536 12.2652 4.5 12 4.5C11.7348 4.5 11.4804 4.60536 11.2929 4.79289C11.1054 4.98043 11 5.23478 11 5.5V11.5H5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5C4 12.7652 4.10536 13.0196 4.29289 13.2071C4.48043 13.3946 4.73478 13.5 5 13.5H11V19.5C11 19.7652 11.1054 20.0196 11.2929 20.2071C11.4804 20.3946 11.7348 20.5 12 20.5C12.2652 20.5 12.5196 20.3946 12.7071 20.2071C12.8946 20.0196 13 19.7652 13 19.5V13.5H19C19.2652 13.5 19.5196 13.3946 19.7071 13.2071C19.8946 13.0196 20 12.7652 20 12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5Z" fill="#171717" />
                            </g>
                        </svg>

                    </div>
                    <div className=''>New Item</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
