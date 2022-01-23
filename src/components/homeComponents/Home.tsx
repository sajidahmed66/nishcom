import Menu from '../Menu';
import Slider from './Slider';
const Home = () => {
    return (
        <>
            <Menu />
            <Slider />
            {/* section with services */}
            <section className='bg-gray-100 py-8'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col w-28'>
                            <img className='object-contain ' src={require('../../assets/icons/delivery.png')} alt="fastdelivery" />
                            <h2 className='text-3xl font-bold text-purple-500'>
                                Our Services
                            </h2>
                        </div>
                        <div className='flex flex-col w-28'>
                            <h2 className='text-3xl font-bold text-purple-500'>
                                Our Services
                            </h2>

                        </div> <div className='flex flex-col w-28'>
                            <h2 className='text-3xl font-bold text-purple-500'>
                                Our Services
                            </h2>

                        </div> <div className='flex flex-col w-28'>
                            <h2 className='text-3xl font-bold text-purple-500'>
                                Our Services
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;