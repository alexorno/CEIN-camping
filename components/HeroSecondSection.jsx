import React from "react";

export const HeroSecondSection = () => {

    return(
        <div className="hero-second-section">
             <div className="cta-image">
                <div className="container">
                    <h4>
                        The Eco Camping Solution
                    </h4>
                    <p>
                        There is no waste, but there is a lot of consideration. “Base and Packana” is a large shelter that is spacious, light, easy to set up, and cost-effective.
                    </p>
                    <button className="main-btn">Read More</button>
                </div>
             </div>
             <div className="content">
                <div className="post">
                    <p>Journal</p>
                    <img src="/second-journal.png"/>
                    <div className="text">
                        <h6>Introducing the All-New Adventure Dome Tent</h6>
                        <p>Your Ultimate Shelter for Outdoor Escapades! Experience easy setup, superior durability, and ample space, ensuring comfort and security wherever your adventures take you. Get ready to elevate your camping experience with our premium tent!</p>
                    </div>
                </div>

                <div className="post">
                    <p>Event</p>
                    <img src="/second-journal.png"/>
                    <div className="text">
                        <h6>Organic Aquaculture Big Catch Festival</h6>
                        <p>Saiyuen has had a great harvest this year! In our aquaponic pool, we have a variety of edible fish, including Crucian Carp, Tilapia, and Jade Perch. Especially Jade Perch is the treasure among the freshwater fish. During the Big Catch Festival at Saiyuen, campers can enjoy fishing or even try cooking their own catch in the wild. Come and experience the thrill of catching and cooking your own fish in the great outdoors at Saiyuen!</p>
                    </div>
                </div>

                <div className="feature">
                    <p>Feature</p>
                    <div className="feature-product">
                        <img src="/feature-product.png" />
                        <p className="title">Lightweight Waterproof Camping Tent</p>
                        <p className="price">$ 259</p>
                    </div>    
                </div>
             </div>
        </div>  
    )
}