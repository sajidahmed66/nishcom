import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <header >

            </header>
            <nav className='bg-purple-100 h-20 py-4 mx-auto'>
                <div className='flex flex-row items-center justify-between'  >
                    <img src={require('../assets/images/Bayb-Products-Logo.png')} alt="Logo" className='object-cover h-16 w-28 px-4  cursor-pointer' onClick={() => alert("Logo Clicked")} />
                    <div className='flex flex-row'>
                        <ul className='flex flex-row items-center space-x-4' >
                            <li >
                                <Link to='/' >Home</Link>
                            </li>
                            <li >
                                <Link to='/products' >Products</Link>
                            </li>
                            <li>
                                <Link to='/categoris' >Categories</Link>
                            </li>
                        </ul >
                    </div>
                    <div className='pr-8'>
                        <ul>
                            <li>
                                <Link to='/login' >LogIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Menu;