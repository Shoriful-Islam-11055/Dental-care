import React from 'react';
import useServices from '../hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';
import Banner from '../SignIn/Banner/Banner';
import './Home.css'

const Home = () => {
    const [services] = useServices();
    return (
        <div>
            <Banner></Banner>
            <section className='review demo mt-5'>
                    <h1 className='home-card-title mb-3 text-center'>Some Demo Review</h1>
                    <div className='home-card-container container'>
                    {
                       services.slice(0,3).map(services =><ServiceCard
                        key={services.id}
                        services = {services}
                        ></ServiceCard> )
            
                    }
                    </div>
                   {/* <Link  to="/review">See All Review</Link> */}
                </section>
        </div>
    );
};

export default Home;