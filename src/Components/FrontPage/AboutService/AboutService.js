import React from 'react';

const AboutService = () => {
    return (
        <div id="about" className="d-flex justify-content-center text-light">
            <div class="row  container">
                <h1 className="text-center display-2 mt-5 pt-5">How We Work</h1>
                <div class="col-md-4 p-1">
                    <div class="card h-100 tomato">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/private_files/lf30_6yjihjym.json" background="transparent"
                            speed="1"
                            loop
                            autoplay>
                        </lottie-player>
                        <div class="card-body text-center">
                            <h5 class="card-title">Choose Fruits & Vegitables</h5>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis, totam quae eum ducimus distinctio illo fugiat. Rem excepturi odit quisquam porro, repudiandae, facilis doloribus quae deleniti sit maxime iusto?</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-1">
                    <div class="card h-100 tomato">
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_6drsjldj.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        <div class="card-body text-center">
                            <h5 class="card-title">Place Your Address</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio tenetur sapiente et rerum molestias maiores voluptate quasi nihil labore eligendi aliquam nobis incidunt, omnis neque. Velit distinctio rerum nostrum!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-1">
                    <div class="card h-100 tomato">
                        <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_rkdau0ce.json"
                            background="transparent"
                            speed="3"
                            loop
                            autoplay></lottie-player>
                        <div class="card-body text-center">
                            <h5 class="card-title">Payment & Fast Delivery</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio tenetur sapiente et rerum molestias maiores voluptate quasi nihil labore eligendi aliquam nobis incidunt, omnis neque. Velit distinctio rerum nostrum!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutService;