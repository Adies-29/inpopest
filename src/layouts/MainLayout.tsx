import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header.tsx';

export default function MainLayout(){
    return(
        <div className='max-w-7xl flex flex-col justify-between'>
            <Header/>

            <main className="flex-1 container mx-auto py-6">
                <Outlet/>

            </main>

            <Footer/>
        </div>

    );
}