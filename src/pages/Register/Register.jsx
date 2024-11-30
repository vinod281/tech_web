import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Register() {
    return (

        <>
            <Navbar />

            <div>

                <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            className="w-auto h-10 mx-auto"
                        />
                        <h2 className="mt-10 font-bold tracking-tight text-center text-gray-700 text-2xl/9">
                            Register to Create an Account
                        </h2>
                    </div>

                    <div className="mt-12 sm:mx-auto ">
                        <form action="#" method="POST" className="space-y-6">

                            <div className='flex flex-wrap gap-20 '>

                                <div>

                                    <div className='flex flex-wrap gap-5'>

                                        <div>

                                            <label htmlFor="fname" className="block font-medium text-gray-900 text-sm/6">
                                                Frist Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="fname"
                                                    name="fname"
                                                    type="text"
                                                    required
                                                    autoComplete="name"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                />
                                            </div>



                                        </div>

                                        <div>

                                            <label htmlFor="lname" className="block font-medium text-gray-900 text-sm/6">
                                                Last Name
                                            </label>


                                            <div className="mt-2">
                                                <input
                                                    id="lname"
                                                    name="lname"
                                                    type="text"
                                                    required
                                                    autoComplete="name"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                />
                                            </div>

                                        </div>








                                    </div>

                                    <div className='mt-6'>

                                        <label htmlFor="uname" className="block font-medium text-gray-900 text-sm/6">
                                            User Name
                                        </label>


                                        <div className="mt-2">
                                            <input
                                                id="uname"
                                                name="uname"
                                                type="text"
                                                required
                                                autoComplete="name"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                            />
                                        </div>

                                    </div>

                                    <div className='mt-6'>

                                        <label htmlFor="email" className="block font-medium text-gray-900 text-sm/6">
                                            Email Address
                                        </label>


                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                            />
                                        </div>

                                    </div>





                                </div>


                                <div>

                                    <div className='flex flex-wrap gap-5'>

                                        <div>

                                            <label htmlFor="postal" className="block font-medium text-gray-900 text-sm/6">
                                                Postal Code
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="postal"
                                                    name="postal"
                                                    type="text"
                                                    required
                                                    autoComplete="postal"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                />
                                            </div>



                                        </div>

                                        <div>

                                            <label htmlFor="tel" className="block font-medium text-gray-900 text-sm/6">
                                                Telephone
                                            </label>


                                            <div className="mt-2">
                                                <input
                                                    id="tel"
                                                    name="tel"
                                                    type="text"
                                                    required
                                                    autoComplete="tel"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                                />
                                            </div>

                                        </div>








                                    </div>

                                    <div className='mt-6'>

                                        <label htmlFor="district" className="block font-medium text-gray-900 text-sm/6">
                                            District
                                        </label>


                                        <div className="mt-2">
                                            <input
                                                id="district"
                                                name="district"
                                                type="district"
                                                required
                                                autoComplete="district"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                            />
                                        </div>

                                    </div>

                                    <div className='mt-6'>

                                        <label htmlFor="address" className="block font-medium text-gray-900 text-sm/6">
                                            Address
                                        </label>


                                        <div className="mt-2">
                                            <input
                                                id="address"
                                                name="address"
                                                type="text"
                                                required
                                                autoComplete="address"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6"
                                            />
                                        </div>

                                    </div>

                                    

                                    <div className='flex justify-end gap-5 mt-10'>



                                        <button
                                            type="submit"
                                            className="  flex w-1/4 justify-center rounded-md bg-gray-700  hover:bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Register
                                        </button>

                                        <button
                                            type="reset"
                                            className=" flex w-1/4 justify-center rounded-md bg-gray-700  hover:bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Clear
                                        </button>


                                    </div>









                                </div>











                            </div>


                        </form>


                    </div>
                </div>

            </div>




            <Footer />
        </>

    )
}
