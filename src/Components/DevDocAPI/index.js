import TopNav from "../TopNav";
import LeftNav from "../LeftNav";
import { useState } from "react";




const DevDocAPI = () => {
    const dataSample = {
        company_uid: "0f56fb66-9e88-4a71-bd92-f9b6739195f4",
        produc: {
            product_name: "Mazna",
            product_price: 2000
        },
        tx_amount: 2000,
        tx_card_number: "2222333344442752",
        tx_card_cv: "112",
        billing_info: {
            full_name: "Steve Jobs",
            address: "1253 main ave",
            city: "Oakland",
            state: "California",
            zip: "123456"
        }
    }

    const dataResponse = {
        recived: true,
        record_created: true,
        envo_uuid: "a0d956fc-5ced-4556-90c7-eb3e6de2438d"
    }

    const sample = JSON.stringify(dataSample, null, 4)
    const sampleResp = JSON.stringify(dataResponse, null, 4)

    const [data, setData] = useState(dataSample)

    const sent = () => {
        // alert(JSON.stringify(data))
        console.log(data);
    }

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
                        <h2>Dev/API</h2>
                        <div className="row">
                            <div className="col">
                                <h4>
                                    <span className="badge text-bg-success">POST</span> /api/tx
                                </h4>
                                <p>Meke transaction take a json request
                                    <p><span className="fw-bold">NOTE:</span> product_name and tx_amount must have same value when your doing test.</p>
                                </p>
                                <div className="form-group">
                                    <textarea readOnly className="form-control" id="exampleFormControlTextarea1" defaultValue={sample} rows="8" />
                                </div>
                                <hr></hr>
                                <p>Expected Response ACCEPTED or DECLINED transaction</p>
                                <div className="form-group">
                                    <textarea readOnly className="form-control" id="exampleFormControlTextarea1" defaultValue={sampleResp} rows="7" />
                                </div>
                            </div>
                            <div className="col">
                                <h4>Test</h4>
                                <div className="form-group">
                                    <textarea className="form-control bg-dark text-success" id="exampleFormControlTextarea1" defaultValue={sample} onChange={e => setData(e.target.value)} rows="18" />
                                </div>
                                <hr></hr>
                                <button className="btn btn-success" onClick={sent}>send</button>
                            </div>
                        </div>
                            <hr></hr>
                    </main>
                </div>
            </div>
        </>

    )
}
export default DevDocAPI;