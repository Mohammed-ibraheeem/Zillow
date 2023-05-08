import img1 from "./images/Buy_a_home.png"
import img2 from "./images/Sell_a_home.png"
import img3 from "./images/Rent_a_home.png"
import "./Secendcollection.css"
function Secendcollection() {
    return (
        <>
            <div class="row ma">
                <div className="mm">
                    <div class="card col-3 c1">
                        <img src={img1} class="card-img-top imgg1" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Buy a home</h4>
                            <br />
                            <p class="card-text">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                            <br />
                            <button href="/#" class="btn btn-outline-primary">Browse homes</button>
                        </div>
                    </div>
                    <div class="card col-3 c2">
                        <img src={img2} class="card-img-top imgg2" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Sell a home</h4>
                            <br />
                            <p class="card-text">No matter what path you take to sell your home, we can help you navigate a successful sale</p>
                            <br /><br />
                            <button href="/#" class="btn btn-outline-primary" >See your options</button>
                        </div>
                    </div>
                    <div class="card col-3 c3">
                        <img src={img3} class="card-img-top imgg3" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Rent a home</h4>
                            <br />
                            <p class="card-text">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                            <br />
                            <button href="/#" class="btn btn-outline-primary" >Find rentals</button>
                            <br /><br />
                        </div>
                    </div>

                </div>
                <div className="mm2">
                    <div class="card c4">
                        <div class="row ">
                            <div class="col-4">
                                <img src={img1} class="img-fluid rounded-start imgg4" alt="..." />
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">Buy a home</h5>
                                    <br />
                                    <p class="card-text">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                                    <br />
                                    <button href="/#" class="btn btn-outline-primary">Browse homes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card c5">
                        <div class="row ">
                            <div class="col-4">
                                <img src={img2} class="img-fluid rounded-start imgg5" alt="..." />
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">Sell a home</h5>
                                    <br />
                                    <p class="card-text">No matter what path you take to sell your home, we can help you navigate a successful sale</p>
                                    <br />
                                    <button href="/#" class="btn btn-outline-primary">See your options</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="card c6">
                        <div class="row ">
                            <div class="col-4">
                                <img src={img3} class="img-fluid rounded-start imgg6" alt="..." />
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">Rent a home</h5>
                                    <br />
                                    <p class="card-text">We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                                    <br />
                                    <button href="/#" class="btn btn-outline-primary">Find rentals</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
export default Secendcollection;