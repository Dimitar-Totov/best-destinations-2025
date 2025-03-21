import { useContext, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'
import { UserContext } from '../../contexts/UserContext'

export default function Navigation() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { email } = useContext(UserContext)

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 translate-x-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to={'/'} className='text-sm/6 font-semibold text-gray-900'>Home</Link>
                    <Link to={'/destinations'} className='text-sm/6 font-semibold text-gray-900'>Destinations</Link>
                    <Link to={'/about'} className='text-sm/6 font-semibold text-gray-900'>About</Link>
                    {email
                        ? (
                            <>
                                <Link to={'/create'} className='text-sm/6 font-semibold text-gray-900'>Create</Link>
                                <Link to={'/logout'} className='text-sm/6 font-semibold text-gray-900'>Logout</Link>
                            </>
                        )
                        : (
                            <>
                                <Link to={'/register'} className='text-sm/6 font-semibold text-gray-900'>Register</Link>
                                <Link to={'/login'} className='text-sm/6 font-semibold text-gray-900'>Login</Link>
                            </>
                        )
                    }


                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {email && (
                        <div className="flex items-center space-x-3 overflow-hidden">
                            <img className="inline-block w-12 h-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <p className="text-sm md:text-base font-medium text-white">
                                <span className="font-semibold text-white">
                                    {email}
                                </span>
                                <span className="mx-2 text-white">|</span>
                                Your journey starts here
                            </p>
                        </div>
                    )}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to={'/'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</Link>
                                <Link to={'/catalog'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Catalog</Link>
                                <Link to={'/about'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</Link>
                                <Link to={'/register'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Register</Link>
                                <Link to={'/login'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Login</Link>
                                <Link to={'/create'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Create</Link>
                                <Link to={'/logout'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Logout</Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}