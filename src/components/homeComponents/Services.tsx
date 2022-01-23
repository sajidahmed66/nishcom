const Services = () => {
    return (
        <section className='bg-gray-100 py-2'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col w-48 items-center'>
                        <img className='object-center w-1/2 py-4' src={require('../../assets/icons/delivery.png')} alt="fastdelivery" />
                        <h2 className='text-base font-bold text-purple-500 '>
                            Fast Delivery
                        </h2>
                    </div>
                    <div className='flex flex-col w-48 items-center'>
                        <img className='object-center  w-1/2 py-4' src={require('../../assets/icons/wall-clock.png')} alt="securepayment" />
                        <h2 className='text-base font-bold text-purple-500'>
                            11am-3pm support
                        </h2>
                    </div>
                    <div className='flex flex-col w-48 items-center'>
                        <img className='object-contain  w-1/2 py-4 ' src={require('../../assets/icons/securepayment.png')} alt="securepayment" />
                        <h2 className='text-base font-bold text-purple-500'>
                            Secure Checkout
                        </h2>
                    </div>
                    <div className='flex flex-col w-48'>
                        <img className='object-contain  w-1/2  py-4' src={require('../../assets/icons/check.png')} alt="securepayment" />
                        <h2 className='text-base font-bold text-purple-500'>
                            Authentic Products
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;