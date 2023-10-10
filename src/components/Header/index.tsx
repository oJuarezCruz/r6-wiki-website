import { Link } from 'react-router-dom';

import logo from './images/logo.png';

export default function Header() {
    return (
        <header className="bg-black min-h-screen flex items-center justify-center gap-16">
            <img
                src={logo}
                alt='R6 Logo'
                className='w-24 animate-appearDesappear hidden'
            />

            <Link to='/operadores' className='text-white text-3xl font-bold'>
                Operadores
            </Link>
            <Link to='/organizacoes' className='text-white text-3xl font-bold'>
                Organizações
            </Link>
        </header>
    )
}