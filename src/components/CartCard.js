import { remove } from '../store/cartSlice'
import { useDispatch } from "react-redux"

export const CartCard = ({ product }) => {

    const dispatch = useDispatch()
    const { name, price, image } = product

    return (
        <div className='w-full m-auto sm:mx-6'>
            <div className='flex items-center flex-wrap p-3 my-4 w-full border-b-2 border-l border-r rounded'>
                <div className="w-20 sm:w-36">
                    <img src={image} alt="cartimage" />
                </div>
                <div className='mx-10 sm:m-auto'>
                    <h1 className='font-bold text-gray-900 sm:text-lg'>{name}</h1>
                </div>
                <div className='my-4 mx-3 sm:m-auto'>
                    <p className='font-bold text-gray-900 text-lg'>${price}</p>
                </div>
                <div className="ml-40 sm:m-0">
                    <button className='font-bold bg-red-500 rounded py-1 px-3.5 sm:py-2 sm:px-4 text-white hover:cursor-pointer hover:bg-red-700' onClick={() => dispatch(remove(product))}>Remove</button>
                </div>
            </div>
        </div>
    )
}
