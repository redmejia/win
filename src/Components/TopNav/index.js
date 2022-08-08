
const TopNav = () => {
    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="!#">Win</a>
            <button style={{marginLeft : 55}} className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="!#">Sign out</a>
                </div>
            </div>
            {/* <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" /> */}
        </header>
    )
}

export default TopNav;