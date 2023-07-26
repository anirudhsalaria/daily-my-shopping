import React from 'react'

const TopHeader = () => {
    return (
        <div className='border bg-white md:flex sm:inline-block p-4 gap-8'>
            <div className='font-semibold text-lg text-neutral-800 my-auto'>Add new post</div>
            <div className='flex text-neutral-800'>
                <div className='m-auto'>
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="u:plus">
                            <path id="Vector" d="M19 11.5H13V5.5C13 5.23478 12.8946 4.98043 12.7071 4.79289C12.5196 4.60536 12.2652 4.5 12 4.5C11.7348 4.5 11.4804 4.60536 11.2929 4.79289C11.1054 4.98043 11 5.23478 11 5.5V11.5H5C4.73478 11.5 4.48043 11.6054 4.29289 11.7929C4.10536 11.9804 4 12.2348 4 12.5C4 12.7652 4.10536 13.0196 4.29289 13.2071C4.48043 13.3946 4.73478 13.5 5 13.5H11V19.5C11 19.7652 11.1054 20.0196 11.2929 20.2071C11.4804 20.3946 11.7348 20.5 12 20.5C12.2652 20.5 12.5196 20.3946 12.7071 20.2071C12.8946 20.0196 13 19.7652 13 19.5V13.5H19C19.2652 13.5 19.5196 13.3946 19.7071 13.2071C19.8946 13.0196 20 12.7652 20 12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5Z" fill="#262626" />
                        </g>
                    </svg>
                </div>
                <div className='text-sm m-auto'>Add Content</div>
            </div>

            <div className='flex text-neutral-800'>
                <div className='m-auto'>

                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="u:cog">
                            <path id="Vector" d="M21.32 10.05L19.43 9.42L20.32 7.64C20.4102 7.45369 20.4404 7.24397 20.4064 7.03978C20.3723 6.83558 20.2758 6.64699 20.13 6.5L18 4.37C17.8522 4.22209 17.6618 4.12421 17.4555 4.09013C17.2493 4.05605 17.0375 4.08748 16.85 4.18L15.07 5.07L14.44 3.18C14.3735 2.983 14.2472 2.81163 14.0787 2.68975C13.9102 2.56787 13.7079 2.50155 13.5 2.5H10.5C10.2904 2.49946 10.0858 2.56482 9.91537 2.68685C9.7449 2.80887 9.61709 2.98138 9.55 3.18L8.92 5.07L7.14 4.18C6.95369 4.08978 6.74397 4.05961 6.53978 4.09364C6.33558 4.12767 6.14699 4.22423 6 4.37L3.87 6.5C3.72209 6.64777 3.62421 6.83818 3.59013 7.04446C3.55605 7.25074 3.58748 7.46251 3.68 7.65L4.57 9.43L2.68 10.06C2.483 10.1265 2.31163 10.2528 2.18975 10.4213C2.06787 10.5898 2.00155 10.7921 2 11V14C1.99946 14.2096 2.06482 14.4142 2.18685 14.5846C2.30887 14.7551 2.48138 14.8829 2.68 14.95L4.57 15.58L3.68 17.36C3.58978 17.5463 3.55961 17.756 3.59364 17.9602C3.62767 18.1644 3.72423 18.353 3.87 18.5L6 20.63C6.14777 20.7779 6.33818 20.8758 6.54446 20.9099C6.75074 20.944 6.96251 20.9125 7.15 20.82L8.93 19.93L9.56 21.82C9.62709 22.0186 9.7549 22.1911 9.92537 22.3132C10.0958 22.4352 10.3004 22.5005 10.51 22.5H13.51C13.7196 22.5005 13.9242 22.4352 14.0946 22.3132C14.2651 22.1911 14.3929 22.0186 14.46 21.82L15.09 19.93L16.87 20.82C17.0551 20.9079 17.2628 20.9369 17.4649 20.9029C17.667 20.8689 17.8538 20.7737 18 20.63L20.13 18.5C20.2779 18.3522 20.3758 18.1618 20.4099 17.9555C20.444 17.7493 20.4125 17.5375 20.32 17.35L19.43 15.57L21.32 14.94C21.517 14.8735 21.6884 14.7472 21.8103 14.5787C21.9321 14.4102 21.9985 14.2079 22 14V11C22.0005 10.7904 21.9352 10.5858 21.8132 10.4154C21.6911 10.2449 21.5186 10.1171 21.32 10.05ZM20 13.28L18.8 13.68C18.5241 13.7695 18.2709 13.918 18.0581 14.1151C17.8452 14.3122 17.6778 14.5533 17.5675 14.8216C17.4571 15.0899 17.4064 15.379 17.419 15.6688C17.4315 15.9586 17.5069 16.2422 17.64 16.5L18.21 17.64L17.11 18.74L16 18.14C15.7436 18.0122 15.4627 17.9411 15.1763 17.9313C14.89 17.9215 14.6049 17.9734 14.3403 18.0834C14.0758 18.1934 13.8379 18.3589 13.6429 18.5688C13.4479 18.7787 13.3003 19.0281 13.21 19.3L12.81 20.5H11.22L10.82 19.3C10.7305 19.0241 10.582 18.7709 10.3849 18.5581C10.1878 18.3452 9.94671 18.1778 9.67842 18.0675C9.41014 17.9571 9.12105 17.9064 8.83123 17.919C8.5414 17.9315 8.25777 18.0069 8 18.14L6.86 18.71L5.76 17.61L6.36 16.5C6.4931 16.2422 6.56852 15.9586 6.58105 15.6688C6.59358 15.379 6.5429 15.0899 6.43254 14.8216C6.32218 14.5533 6.15478 14.3122 5.94195 14.1151C5.72912 13.918 5.47595 13.7695 5.2 13.68L4 13.28V11.72L5.2 11.32C5.47595 11.2305 5.72912 11.082 5.94195 10.8849C6.15478 10.6878 6.32218 10.4467 6.43254 10.1784C6.5429 9.91014 6.59358 9.62105 6.58105 9.33123C6.56852 9.0414 6.4931 8.75777 6.36 8.5L5.79 7.39L6.89 6.29L8 6.86C8.25777 6.9931 8.5414 7.06852 8.83123 7.08105C9.12105 7.09358 9.41014 7.0429 9.67842 6.93254C9.94671 6.82218 10.1878 6.65478 10.3849 6.44195C10.582 6.22912 10.7305 5.97595 10.82 5.7L11.22 4.5H12.78L13.18 5.7C13.2695 5.97595 13.418 6.22912 13.6151 6.44195C13.8122 6.65478 14.0533 6.82218 14.3216 6.93254C14.5899 7.0429 14.879 7.09358 15.1688 7.08105C15.4586 7.06852 15.7422 6.9931 16 6.86L17.14 6.29L18.24 7.39L17.64 8.5C17.5122 8.75645 17.4411 9.03735 17.4313 9.32369C17.4215 9.61003 17.4734 9.89513 17.5834 10.1597C17.6934 10.4242 17.8589 10.6621 18.0688 10.8571C18.2787 11.0521 18.5281 11.1997 18.8 11.29L20 11.69V13.28ZM12 8.5C11.2089 8.5 10.4355 8.7346 9.77772 9.17413C9.11993 9.61365 8.60724 10.2384 8.30448 10.9693C8.00173 11.7002 7.92252 12.5044 8.07686 13.2804C8.2312 14.0563 8.61217 14.769 9.17158 15.3284C9.73099 15.8878 10.4437 16.2688 11.2196 16.4231C11.9956 16.5775 12.7998 16.4983 13.5307 16.1955C14.2616 15.8928 14.8864 15.3801 15.3259 14.7223C15.7654 14.0645 16 13.2911 16 12.5C16 11.4391 15.5786 10.4217 14.8284 9.67158C14.0783 8.92143 13.0609 8.5 12 8.5ZM12 14.5C11.6044 14.5 11.2178 14.3827 10.8889 14.1629C10.56 13.9432 10.3036 13.6308 10.1522 13.2654C10.0009 12.8999 9.96126 12.4978 10.0384 12.1098C10.1156 11.7219 10.3061 11.3655 10.5858 11.0858C10.8655 10.8061 11.2219 10.6156 11.6098 10.5384C11.9978 10.4613 12.3999 10.5009 12.7654 10.6522C13.1308 10.8036 13.4432 11.06 13.6629 11.3889C13.8827 11.7178 14 12.1044 14 12.5C14 13.0304 13.7893 13.5391 13.4142 13.9142C13.0391 14.2893 12.5304 14.5 12 14.5Z" fill="#262626" />
                        </g>
                    </svg>
                </div>
                <div className='text-sm m-auto'>Settings</div>
            </div>

            <div className='ml-auto '>
                <input className='w-[350px] h-8 p-2.5 bg-white rounded-[5px] border border-neutral-300 justify-between items-center gap-[29px] inline-flex' type="search" name="search" id="sea" />
            </div>
        </div>
    )
}

export default TopHeader
