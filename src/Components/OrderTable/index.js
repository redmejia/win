import { useEffect, useState } from "react";
import TopNav from "../TopNav";
import LeftNav from "../LeftNav";

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

const TableOrder = () => {
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

export default TableOrder;