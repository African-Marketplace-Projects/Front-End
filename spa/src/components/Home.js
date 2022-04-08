import React from 'react';
import '../styles/home.css'


function Home(){
    return(
        <div className='home-page'>
            <div className="title-card">
                <h2>African<br/>Marketplace</h2>
                <h3>People Helping People</h3>
                <p>Join us in supplying food to all of Africa!</p>
            </div>
            <div className='img-card'>
                <img 
                    src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt= "Majestic Mountains"
                    className='mountains'
                />
                <div class="color-box"></div>
            </div>
        </div>
    )
}

export default Home;