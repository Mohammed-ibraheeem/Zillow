import "./Search.css"
function Search() {
    return (
        <>

            <div class="container-fluid di" >
                <div calss="container-fluid m">
                    <h1 id="h">
                        Find it. Tour it. Own it.
                    </h1>
                    <form class="d-flex t" role="search">
                        <input class="form-control me-2" type="search" placeholder="Eenter an address, neighborhood, city, or ZIP code" aria-label="Search" role="combobox" aria-owns="react-autowhatever-1" aria-expanded="false" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Search;