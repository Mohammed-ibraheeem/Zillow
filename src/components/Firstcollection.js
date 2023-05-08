import "./Firstcollection.css"
import image1 from "./images/565a952d809076a47e7e4054a0a9ec64-cc_ft_1344.jpg"
import image2 from "./images/e27e5b4b47286090c57db68aa24e9d0b-p_e.jpg"
import image3 from "./images/af6fd4b0bffd1f044850683abe6f3d37-cc_ft_1152.webp"

function Firstcollection() {
    return (
        <>
            <div class="row h">
                <div className="col-4 ca">
                    <div class="card-body">
                        <h5 class="card-title ">Get home recommendations</h5>
                        <p class="card-text">Sign in for a more personalized experience.</p>
                        <a href="/#" class="btn btn-outline-primary">Sign in</a>
                    </div>
                </div>
                <div className="col-8 p">
                    <img src={image1} alt="..." className="im1" />
                    <img src={image2} alt="..." className="im2" />
                    <img src={image3} alt="..." className="im3" />
                </div>
            </div>
        </>
    )
}
export default Firstcollection;