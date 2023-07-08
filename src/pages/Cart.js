import { useSelector } from "react-redux/es/hooks/useSelector"
import { CartCard } from "../components"

export const Cart = () => {

    const cartList = useSelector(state => state.cartState.cartList)
    const total = useSelector(state => state.cartState.total)

    return (
        <main>
            <section>
                <div className="flex flex-wrap justify-start other:justify-evenly">
                    <h1 className='w-full text-2xl sm:mt-3 font-bold text-gray-900 text-center'>Cart Items: {cartList.length}/ ${total}  </h1>
                    {cartList.map((product) => (
                        <CartCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    )
}
