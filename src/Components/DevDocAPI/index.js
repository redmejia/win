import TopNav from "../TopNav";
import LeftNav from "../LeftNav";
import { useState } from "react";

const DevDocAPI = () => {
    const dataSample = {
        company_uid: "0f56fb66-9e88-4a71-bd92-f9b6739195f4",
        product: {
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

    const [data, setData] = useState(sample)
    const [txResp, setTXResp] = useState(null)
    const [companyEnv, setEnv] = useState([])
    const [envoice, setEnvoiceUUID] = useState()
    const [envoiveInfo, setEnvInfo] = useState(null)

    const sent = () => {
        if (typeof data === 'string') {
            let newData = JSON.parse(data)
            fetch('http://localhost:8081/api/tx', {
                method: "POST",
                body: JSON.stringify(newData)
            })
                .then(resp => resp.json())
                .then(respData => setTXResp(respData))
        }
    }
   

    const getEnvUID = () => {
        fetch("http://localhost:8081/api/env/num?env_uid=" + envoice, {
            method: "GET"
        }).then(resp => resp.json())
            .then(data => setEnvInfo(data))
    }

    const cleanResponse = () =>{
        setEnvInfo(null)
    }

    const getAllDataEnv = () => {
        fetch('http://localhost:8081/api/env?company=' + dataSample.company_uid, {
            method: 'GET',
        }).then(resp => resp.json())
            .then(data => setEnv(data))
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
                                <h4>New transaction</h4>
                                <h4>
                                    <span className="badge text-bg-success">POST</span> /api/tx
                                </h4>
                                Meke transaction take a json request
                                <p><span className="fw-bold">NOTE:</span> product_price and tx_amount must have same value when your doing test.</p>
                                Test cards:
                                <p>PASS/ACCEPTED : card num. "1111222233332064" | cv num. "146"</p>
                                <p>PASS/DECLINED : card num. "2222333344442752" | cv num. "112"</p>
                                <div className="form-group">
                                    <textarea
                                        readOnly
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        defaultValue={sample}
                                        rows="8"
                                    />
                                </div>
                                <hr></hr>
                                <p>Example Response ACCEPTED or DECLINED transaction</p>
                                <div className="form-group">
                                    <textarea
                                        readOnly
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        defaultValue={JSON.stringify(dataResponse, null, 4)}
                                        rows="7"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <h4>Test</h4>
                                <div className="form-group">
                                    <textarea
                                        className="form-control bg-dark text-success"
                                        id="exampleFormControlTextarea1"
                                        defaultValue={sample} onChange={e => setData(e.target.value)}
                                        rows="18"
                                    />
                                </div>
                                <hr></hr>
                                <button className="btn btn-success" onClick={sent}>Send</button>
                                {
                                    txResp === null ? <></> :
                                        <div className="form-group">
                                            Response:
                                            <textarea
                                                readOnly
                                                className="bg-dark text-success form-control"
                                                id="exampleFormControlTextarea1"
                                                defaultValue={JSON.stringify(txResp, null, 4)}
                                                rows="7"
                                            />
                                        </div>
                                }
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col">
                                <h4>Get one envoice</h4>
                                <h4>
                                    <span className="badge text-bg-success">GET</span> /api/env/num?env_uid=
                                </h4>
                                Get a single envoice require envoice uid. You can creante new order or transaction and test from the response or test from the Orders Tab navigation.
                            </div>
                            <div className="col">
                                <h4>Test</h4>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">env_uid=</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="bg-dark text-success form-control"
                                        aria-label="Default"
                                        onChange={e => setEnvoiceUUID(e.target.value)}
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                                <hr></hr>
                                <button className="btn btn-success" onClick={getEnvUID}>Send</button>
                                <button className="btn btn-warning" onClick={cleanResponse}>Clean Response</button>
                                {envoiveInfo === null ? <p></p> :
                                    <div className="form-group">
                                        Response:
                                        <textarea
                                            className="mb-2 form-control bg-dark text-success"
                                            id="exampleFormControlTextarea1"
                                            defaultValue={JSON.stringify(envoiveInfo, null, 4)}
                                            rows="28"
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col">
                                <h4>Get all transaction envoices</h4>
                                <h4>
                                    <span className="badge text-bg-success">GET</span> /api/env?={dataSample.company_uid}
                                </h4>
                                You need the company uid. This will response an array of object containing envoices information

                            </div>
                            <div className="col">
                                <button className="btn btn-success" onClick={getAllDataEnv}>Send</button>
                                <hr></hr>
                                {
                                    companyEnv.length === 0 ? <p className="mt-4"></p> :
                                        <div className="form-group">
                                            Response:
                                            <textarea
                                                className="mb-2 form-control bg-dark text-success"
                                                id="exampleFormControlTextarea1"
                                                defaultValue={JSON.stringify(companyEnv, null, 4)}
                                                rows="28"
                                            />
                                        </div>
                                }
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </>

    )
}
export default DevDocAPI;