import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Cart({ open, setOpen }) {
    const [products, setProducts] = useState([]);



    // Load cart items from localStorage initially
    useEffect(() => {
        const loadCartItems = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            setProducts(cart);
        };

        loadCartItems();

        // Listen to localStorage changes
        const handleStorageChange = () => {
            loadCartItems();
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup event listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);



    // Remove item from the cart
    const handleRemoveItem = (id) => {
        const updatedCart = products.filter((product) => product.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
        setProducts(updatedCart); // Update state
    };

    return (
        <>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <DialogTitle className="text-lg font-medium text-gray-900">
                                                Shopping cart
                                            </DialogTitle>
                                            <div className="flex items-center ml-3 h-7">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul className="-my-6 divide-y divide-gray-200">
                                                    {products.map((product) => (
                                                        <li key={product.id} className="flex py-6">
                                                            <div className="overflow-hidden border border-gray-200 rounded-md size-24 shrink-0">
                                                                <img
                                                                    alt={product.name}
                                                                    src={product.imageUrl}
                                                                    className="object-cover size-full"
                                                                />
                                                            </div>

                                                            <div className="flex flex-col flex-1 ml-4">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>{product.name}</h3>
                                                                        <p className="ml-4">{product.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        {product.reviews}
                                                                    </p>
                                                                </div>
                                                                <div className="flex items-end justify-between flex-1 text-sm">
                                                                    <p className="text-gray-500">
                                                                        Qty: {product.quantity}
                                                                    </p>

                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => handleRemoveItem(product.id)}
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>
                                                RS{' '}
                                                {products
                                                    .reduce((total, item) => {
                                                        const price = item.price
                                                            ? parseFloat(String(item.price).replace(/[^0-9]/g, '')) // Safely convert to string
                                                            : 0;
                                                        return total + price * (item.quantity || 1); // Default quantity to 1 if undefined
                                                    }, 0)
                                                    .toFixed(2)}
                                            </p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">
                                            Shipping and taxes calculated at checkout.
                                        </p>
                                        <div className="mt-6">
                                            <a
                                                href="/checkout"
                                                className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                                            >
                                                Checkout
                                            </a>
                                        </div>
                                        <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                                            <p>
                                                or{' '}
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}