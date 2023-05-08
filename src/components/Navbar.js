import "./Navbar.css"
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary navbar">
                <div class="container-fluid p-2 ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown"></li>
                            <a class="nav-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Buy
                            </a>
                            <ul class="dropdown-menu">
                                <h6>Homes for sale</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Homes for sale</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Foreclosures</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">For sale by owner</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Open houses</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">New construction</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">coming soon</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Recent home sales</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">All homes</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>Resources</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Buyers Guide</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Foreclosure Center</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Real estate app</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Down payment assistance</a></li>
                            </ul>
                            <a class="nav-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rent
                            </a>
                            <ul class="dropdown-menu">
                                <h6>Search for rentals</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Rental buildings</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Apartments for rent</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Houses for rent</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">All rental listings</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">All rental buildings</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>Renter</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Contactes rentals</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Your rentals</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Massages</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>Resources</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Affordadility calculator</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Renters</a></li>
                            </ul>
                            <a class="nav-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sell
                            </a>
                            <ul class="dropdown-menu">
                                <h6>Resources</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Explore your options</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">See your home's Zestimate</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Home values</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Sellers guide</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>Resources</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Find a seller's agent</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Post For Sale by Owner</a></li>
                            </ul>
                            <a class="nav-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Home Loans
                            </a>
                            <ul class="dropdown-menu">
                                <h6>Shop mortgages</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Mortgages lenders</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">HELOC lenders</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Mortgages rates</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Refinance rates</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">All mortgages rates</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>Calculators</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Mortgages calculators</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Refinance calculators</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Affordability calculators</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Amortization calculators</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Debt-to-income calculators</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>Resources</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Lender reviews</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Mortagage learning center</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Mortagage app</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Lender resource center</a></li>
                            </ul>
                            <a class="nav-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Agent Finder
                            </a>
                            <ul class="dropdown-menu">
                                <h6>Lookind for pros?</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Real estate agents</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Property managers</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Home inspectors</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Other pros</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Home improvement pros</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Home builders</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Real estate photographers</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <h6>i'm pro</h6>
                                <li><a class="dropdown-item text-primary" href="/#">Agent advertising</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Agent resource center</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Create a free agent account</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Real estate business plan</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">Real estate agent scripts</a></li>
                                <li><a class="dropdown-item text-primary" href="/#">listing flyer templates</a></li>
                            </ul>
                        </ul>
                    </div>
                    <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" id="z" alt="..." />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll --bs-scroll-height: 100px">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Rentals
                                </a>
                                <ul class="dropdown-menu">
                                    <h6>Rental Management Tools</h6>
                                    <li><a class="dropdown-item text-primary" href="/#">List a renta</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">My Listings</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Message</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Applications</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Leases</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Payments</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <h6>Learn More</h6>
                                    <li><a class="dropdown-item text-primary" href="/#">Zillow Rental Manager</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Price My Rental</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Resource Center</a></li>
                                    <li><a class="dropdown-item text-primary" href="/#">Help Center</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Advertise</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Help</a>
                            </li> <li class="nav-item">
                                <a class="nav-link " href="/#">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;