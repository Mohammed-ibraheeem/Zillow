import "./End.css"
import image11 from "./images/2021_Facebook_icon.svg.png"
import image12 from "./images/blue+instagram+icon.png"
import image13 from "./images/download.png"
import image14 from "./images/Twitter-Logosu.png"
import image15 from "./images/Home_icon_blue-1.png"
function End() {
    return (
        <>
            <div className="d1">
                <p>
                    Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please
                    <a href="/#" class="nav nav-underline aa1">let us know</a>
                </p>
            </div>
            <br />
            <div className="d2">
                <p>
                    Zillow, Inc. holds real estate brokerage
                    <a href="/#" className="nav-underline"> licenses </a>
                    in multiple states. Zillow (Canada), Inc. holds real estate brokerage
                    <a href="/#" className="nav-underline"> licenses </a>
                    in multiple provinces.
                    <br />
                    <a href="/#" className="nav-underline a1">§ 442-H New York Standard Operating Procedures</a>

                    <a href="/#" className="nav-underline a2">§ New York Fair Housing Notice</a>

                    <section className="s1">

                        TREC:
                        <a href="/#" className="nav-underline">Information about brokerage services</a>
                        ,
                        <a href="/#" className="nav-underline">Consumer protection notice</a>
                    </section>

                    <section className="s2">
                        California DRE #1522444
                    </section>
                    <a href="/#" className="nav-underline a3">Contact Zillow, Inc. Brokerage</a>
                </p>
            </div>
            <div className="d3">
                <p>
                    For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.
                </p>
            </div>
            <div className="d4">
                <img src="https://s.zillowstatic.com/pfs/static/app-store-badge.svg" alt="App store logo" className="i1" />
                <img src="https://s.zillowstatic.com/pfs/static/google-play-badge.svg" alt="Google play logo" className="i2" />
            </div>
            <br />
            <div className="d5">
                <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="Zillow logo" className="i3" />
                <span className="sp1">Follow us:</span>
                <a href="/#"><img src={image11} alt=".." className="imm1" /></a>
                <a href="/#"><img src={image12} alt=".." className="imm2" /></a>
                <a href="/#"><img src={image13} alt=".." className="imm3" /></a>
                <a href="/#"><img src={image14} alt=".." className="imm4" /></a>
                <span className="sp1">© 2006-2023 Zillow</span>
                <span>
                    <a href="/#"><img src={image15} alt=".." className="imm5" /></a>
                </span>
            </div>
            <br />
            <br />
            <div className="d6">
                <img src="https://s.zillowstatic.com/pfs/static/footer-art.svg" alt="..." />
            </div>

        </>
    )
}
export default End;