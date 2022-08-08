import LeftNav from "../LeftNav";
import TopNav from "../TopNav";
// mock data
const data = [
    {
        env_id: "123213-312321-3238-787e8ewe",
        product_name: "name",
        price: 123.90,
        billing_info: {
            full_name: "test uno",
            address: "1214 main ave",
            state: "cal",
            zip: "909090"
        }
    },
    {
        env_id: "123213-312321-3238-daskh2312",
        product_name: "name2",
        price: 123.90,
        billing_info: {
            full_name: "test dos",
            address: "1214 main ave",
            state: "cal",
            zip: "909090"
        }
    },
    {
        env_id: "123213-312321-3238-kdhskjw1",
        product_name: "name3",
        price: 123.90,
        billing_info: {
            full_name: "test tres",
            address: "1214 main ave",
            state: "cal",
            zip: "909090"
        }
    }
]
const RenderData = ({data}) => {
    const tbodyData = data.map((d) => (
        <tbody>
            <tr>
                <td>{d.env_id}</td>
                <td>{d.product_name}</td>
                <td>{d.price}</td>
                <td>{d.billing_info.full_name}</td>
                <td>{d.billing_info.address}</td>
                <td>{d.billing_info.state}</td>
                <td>{d.billing_info.zip}</td>
            </tr>
        </tbody>
    ))

    return (
        <table className="table table-striped table-sm table-dark">
            <thead className="">
                <tr>
                    <th scope="col">env ID</th>
                    <th scope="col">product</th>
                    <th scope="col">price</th>
                    <th scope="col">customer</th>
                    <th scope="col">address</th>
                    <th scope="col">state</th>
                    <th scope="col">zip</th>
                </tr>
            </thead>
            {tbodyData}
        </table>
    )
}

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
                        <h2>Orders</h2>
                        <div className="table-responsive">
                            <RenderData data={data} />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard;