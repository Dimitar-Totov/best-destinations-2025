import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-200" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">Follow us</p>
                        <div className="flex space-x-6">
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
                                <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        className="w-6 h-6 text-blue-600 hover:text-blue-800"
                                        fill="currentColor"
                                    >
                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </Link>
                            </span>
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                                <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="w-6 h-6 text-pink-600 hover:text-pink-800"
                                        fill="currentColor"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </Link>

                            </span>
                            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                                <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                                        <path
                                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                                        />
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Commerce</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Insights</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link to="https://www.abv.bg/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer" >Email: support@abv.bg</Link>
                                    </li>
                                    <li>
                                        <p>Telephone number: +359 54 559 023</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}


<div className="flex justify">
    <h3 className="text-lg font-semibold">Follow Us</h3>
    <div className="mt-2 flex justify-center md:justify-start space-x-4">



    </div>
</div>