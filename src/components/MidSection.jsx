import React from 'react'
import Modal_Form from './Modal_Form';

const MidSection = () => {
    return (
        <div className='flex flex-col bg-blue-100 justify-between items-center p-4'>
            <h1 className='font-bold text-xl m-4'>How Do I <span className='text-blue-500'>Refer?</span></h1>
            <div className="carousel rounded-box m-8">
                <div className="carousel-item">
                    <div class="my-10 max-w-xs rounded-xl bg-white mx-2 px-6 py-10 text-gray-600 shadow">
                        <div class="mb-4 w-20 rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">Feature</div>
                        <p class="mb-2 text-2xl">Never miss your important emails</p>
                        <p class="mb-6 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi natus quae ex! Aliquam, ipsa.</p>
                        <button class="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
                            <span> Learn more </span>
                            <span
                            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>
                <div className="carousel-item">
                    <div class="my-10 max-w-xs rounded-xl bg-white mx-2 px-6 py-10 text-gray-600 shadow">
                        <div class="mb-4 w-20 rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">Feature</div>
                        <p class="mb-2 text-2xl">Never miss your important emails</p>
                        <p class="mb-6 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi natus quae ex! Aliquam, ipsa.</p>
                        <button class="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
                            <span> Learn more </span>
                            <span
                            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>
                <div className="carousel-item">
                    <div class="my-10 max-w-xs rounded-xl bg-white mx-2 px-6 py-10 text-gray-600 shadow">
                        <div class="mb-4 w-20 rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700">Feature</div>
                        <p class="mb-2 text-2xl">Never miss your important emails</p>
                        <p class="mb-6 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi natus quae ex! Aliquam, ipsa.</p>
                        <button class="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
                            <span> Learn more </span>
                            <span
                            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
            <Modal_Form />
        </div>
    )
}

export default MidSection