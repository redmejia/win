import { useEffect, useState } from "react";
import LeftNav from "../LeftNav";
import TopNav from "../TopNav";
// mock data
// const data = [
//     {
//         env_id: "123213-312321-3238-787e8ewe",
//         product_name: "name",
//         price: 123.90,
//         billing_info: {
//             full_name: "test uno",
//             address: "1214 main ave",
//             state: "cal",
//             zip: "909090"
//         }
//     },
//     {
//         env_id: "123213-312321-3238-daskh2312",
//         product_name: "name2",
//         price: 123.90,
//         billing_info: {
//             full_name: "test dos",
//             address: "1214 main ave",
//             state: "cal",
//             zip: "909090"
//         }
//     },
//     {
//         env_id: "123213-312321-3238-kdhskjw1",
//         product_name: "name3",
//         price: 123.90,
//         billing_info: {
//             full_name: "test tres",
//             address: "1214 main ave",
//             state: "cal",
//             zip: "909090"
//         }
//     }
// ]
const RenderData = ({ data }) => {
    const tbodyData = data.map((d) => (
        <tbody key={d.envoice_uuid}>
            <tr>
                <td>{d.envoice_uuid}</td>
                <td>{d.transaction.product.product_name}</td>
                <td>{d.transaction.product.product_price / 100}</td>
                <td>{d.transaction.billing_info.full_name}</td>
                <td>{d.transaction.billing_info.address}</td>
                <td>{d.transaction.billing_info.state}</td>
                <td>{d.transaction.billing_info.zip}</td>
                <td>
                    {
                        d.tx_accepted ? <span className="badge text-bg-success">ACCEPTED</span>
                            : <span className="badge text-bg-danger">DECLINE</span>
                    }
                </td>
            </tr>
        </tbody>
    ))
 
    return (
        <table className="table table-striped table-dark">
            <thead className="">
                <tr>
                    <th scope="col">env ID</th>
                    <th scope="col">product</th>
                    <th scope="col">price</th>
                    <th scope="col">customer</th>
                    <th scope="col">address</th>
                    <th scope="col">state</th>
                    <th scope="col">zip</th>
                    <th scope="col">status</th>
                </tr>
            </thead>
            {tbodyData}
        </table>
    )
}

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8081/api/env?company=0f56fb66-9e88-4a71-bd92-f9b6739195f4")
            .then(res => res.json())
            .then(data => { setData(data) })
    }, [setData])

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