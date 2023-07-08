import { Card } from '../components/Card'

export const Home = () => {
    const products = [
        {
            'id': 1,
            'name': 'Apple Watch 367ZX6',
            'image': '/assets/images/1.jpg',
            'price': 100
        },
        {
            'id': 2,
            'name': 'Ziglle WatchX 3187ZX6',
            'image': '/assets/images/2.jpg',
            'price': 44
        },
        {
            'id': 3,
            'name': 'BlueBerry Pad 367ZX6',
            'image': '/assets/images/3.jpg',
            'price': 99
        },
        {
            'id': 4,
            'name': 'Nokia Delux 367ZX6',
            'image': '/assets/images/4.jpg',
            'price': 159
        },
        {
            'id': 5,
            'name': 'Sony I-Pad 367ZX6',
            'image': '/assets/images/5.jpg',
            'price': 200
        },
        {
            'id': 6,
            'name': 'boAt Rx 367ZX6',
            'image': '/assets/images/6.jpg',
            'price': 231
        },

    ]

    return (
        <main>
            <section className='py-2 sm:py-10 m-2 sm:m-auto'>
                <div className='flex flex-wrap justify-start other:justify-evenly'>
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    )
}
