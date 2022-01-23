const Banner = () => {
    return (
        <div className="p-0 relative overflow-hidden flex items-center bg-cover banner">
            <span className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-attachment-fixed bg-gradient-info opacity-80"></span>
            <div className="container z-10 px-6">
                <div className="grid grid-cols-1">
                    <div className="lg:max-w-2xl my-auto">
                        <h2 className="text-6xl font-extrabold tracking-tight text-white mb-6 text-shadow">Everything your baby needs
                            <br />
                            <span>All in one place</span></h2>
                        <p className="text-xl mb-6 text-white opacity-90">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quibusdam corrupti praesentium, ipsum consectetur hic illum quos delectus.</p>
                        <div>
                            <button type="button" className="px-7 py-3 bg-gray-200 text-gray-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-300 ease-in-out mt-6 mr-2">
                                All Products
                            </button>
                            <button type="button" className="inline-block px-7 py-3 bg-transparent text-white font-medium text-sm leading-snug uppercase rounded hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out mt-6">
                                Browse by Category
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;