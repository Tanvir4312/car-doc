import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] my-10">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={banner1}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white md:w-1/3 space-y-6 pl-8'>
                        <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                          
                           <Link> <button className="btn btn-warning text-white">Discover More</button></Link>
                           <Link> <button className="btn btn-outline btn-white ml-4 text-white">Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-14 bottom-3 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle bg-slate-50 bg-opacity-30 border-0 text-white">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-5 bg-warning border-0 text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img
                    src={banner2}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white md:w-1/3 space-y-6 pl-8'>
                        <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                           
                           <Link> <button className="btn btn-warning text-white">Discover More</button></Link>
                           <Link> <button className="btn btn-outline btn-white ml-4 text-white">Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-14 bottom-3 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle bg-slate-50 bg-opacity-30 border-0 text-white">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-5 bg-warning border-0 text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img
                    src={banner3}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white md:w-1/3 space-y-6 pl-8'>
                        <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                           <Link> <button className="btn btn-warning text-white">Discover More</button></Link>
                           <Link> <button className="btn btn-outline btn-white ml-4 text-white">Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-14 bottom-3 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle bg-slate-50 bg-opacity-30 border-0 text-white">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-5 bg-warning border-0 text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img
                    src={banner4}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                    <div className='text-white md:w-1/3 space-y-6 pl-8'>
                        <h3 className='text-6xl font-bold'>Affordable Price For Car Servicing</h3>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                           <Link> <button className="btn btn-warning text-white">Discover More</button></Link>
                           <Link> <button className="btn btn-outline btn-white ml-4 text-white">Latest Project</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-14 bottom-3 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle bg-slate-50 bg-opacity-30 border-0 text-white">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-5 bg-warning border-0 text-white">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;