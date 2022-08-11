import LeftNav from "../LeftNav";
import TopNav from "../TopNav";

const Dashboard = () => {

    return (
        <>
            <TopNav />
            <div className="container-fluid">
                <div className="row">
                    <LeftNav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                                <div className="">
                                </div>
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                                <div className="">
                                </div>
                            </div>
                        </div>
                        <h2>Dashboard</h2>
                        <h1>Welcome</h1>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard;