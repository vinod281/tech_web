import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="relative overflow-hidden bg-white">
                <div className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Holiday Cheer is Calling!
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                            This Christmas, our latest collection of mobile accessories is here to bring joy, style, and protection to your devices. Stay connected and celebrate the season with accessories designed to keep up with all your holiday adventures, no matter where the festivities take you.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        alt=""
                                                        src="https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjEzTWc1VDJuVkwuX0FDX1NMMTM5NF8uanBn.jpg"
                                                        className="object-cover size-full"
                                                    />
                                                </div>
                                                <div className="h-64 overflow-hidden rounded-lg w-44">
                                                    <img
                                                        alt=""
                                                        src="https://xmobile.lk/wp-content/uploads/2024/07/Full-HD-Tempered-Glass-for-Samsung-Galaxy-Phones.jpg"
                                                        className="object-cover size-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 overflow-hidden rounded-lg w-44">
                                                    <img
                                                        alt=""
                                                        src="https://i5.walmartimages.com/seo/JBL-Clip-3-Portable-Bluetooth-Speaker-with-Carabiner-Blue_a78c3203-bc14-457f-af80-8af7fb0ac89d_1.fc8927c8fda03c0314c97c235375d067.jpeg"
                                                        className="object-cover size-full "
                                                    />
                                                </div>
                                                <div className="h-64 overflow-hidden rounded-lg w-44">
                                                    <img
                                                        alt=""
                                                        src="https://i0.wp.com/chinthanagsm.lk/wp-content/uploads/2022/06/2-4.jpg?fit=600%2C600&ssl=1"
                                                        className="object-cover size-full"
                                                    />
                                                </div>
                                                <div className="h-64 overflow-hidden rounded-lg w-44">
                                                    <img
                                                        alt=""
                                                        src="https://www.innovink.lk/wp-content/uploads/2020/01/c1.jpg"
                                                        className="object-cover size-full"
                                                    />
                                                </div>
                                                
                                            </div>
                                            <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 overflow-hidden rounded-lg w-44">
                                                    <img
                                                        alt=""
                                                        src="https://static-01.daraz.lk/p/885541ad0f42a31e2a902a13aad9ad7e.png"
                                                        className="object-cover size-full"
                                                    />
                                                </div>
                                                <div className="h-64 overflow-hidden rounded-lg w-44">
                                                    <img
                                                        alt=""
                                                        src="https://appleme.lk/wp-content/uploads/2024/09/Zone-Vibe-100-black.webp"
                                                        className="object-cover size-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="inline-block px-8 py-3 font-medium text-center text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
                                >
                                    Shop Collection
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
