import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo.png'
import { useState } from "react"
import { useSelector } from "react-redux"
import '../App.css'


export const Header = () => {
    const cartList = useSelector(state => state.cartState.cartList)

    const [hidden, setHidden] = useState(true)

    const activeclassName = 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-200 bg-slate-200'
    const inActiveclassName = 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-200 '


    return (
        <header className="sm:mx-10">
            <nav className="bg-white border-gray-200 border-b rounded">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="https://flowbite.com/" className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">REDUX CART</span>
                    </Link>
                    <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${hidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? activeclassName : inActiveclassName} end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({ isActive }) => isActive ? activeclassName : inActiveclassName}>Cart</NavLink>
                            </li>
                        </ul>
                        <h1 className="hidden sm:font-medium">Cart: {cartList.length}</h1>
                    </div>
                    <div id="cart">
                        <span className="font-medium">Cart: {cartList.length}</span>
                    </div>
                </div>
            </nav>
        </header>


    )
}