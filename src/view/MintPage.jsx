import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css';

import sample4 from '../assets/images/gallery/4.png';
toast.configure()

class MintPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '0x12434343434333',
            copied: false,
            count: 5,
            connected: false
        };

        this.countHandler.bind(this);
        this.tooltipHandler.bind(this);
    }

    countHandler(e) {
        this.setState({ count: e.target.value });
    }

    tooltipHandler(e) {
        e.preventDefault();
        let tooltipNode = e.currentTarget.querySelector('.popuptext');
        tooltipNode.classList.add('show');

        setTimeout(() => {
            tooltipNode.classList.remove('show');
        }, 2000);
    }

    render() {
        const notify = () => {
            if (this.state.count < 0) {
                toast('The Number is Invalid')
            }
        }

        const data = {
            current: "PRE-SALE",
            price: "500",
            targetSupply: "800",
            contactAddress: "0x12434343434333",
            discount: [
                {
                    amount: '10',
                    nft: '5'
                },
                {
                    amount: '15',
                    nft: '10'
                },
                {
                    amount: '25',
                    nft: '25'
                }
            ]
        }

        return (
            <Fragment>
                <div className="mint-page">
                    <div className="banner bg-overlay">
                        <figure>
                            <img src={sample4} width="1903" height="800" alt="bg" />
                        </figure>

                        <div className="banner-layer text-center pd-t140 d-flex align-items-center justify-content-center flex-column w-100">
                            <h1 className="fw-800 f-72 text-white border-bottom border-bottm-width-7">CURRENT : {data.current}</h1>
                            <h2 className="fw-800 f-40 text-white mb-0 pd-b10">Price: ${data.price} each</h2>
                            <h2 className="fw-800 f-40 text-white mb-0 pd-b10">Target Supply: {data.targetSupply} NFT's</h2>
                            <h2 className="fw-800 f-40 text-white pd-b140 d-flex align-items-center address">
                                <span className="d-flex align-items-center flex-md-row flex-column">Contract Address:
                                    <span className='ml-2'>
                                        {data.contactAddress}
                                        <CopyToClipboard text={this.state.value}
                                            onCopy={() => this.setState({ copied: true })}>
                                            <a href="#" className="popup" onClick={e => this.tooltipHandler(e)}>
                                                <i className="fas fa-copy text-white mr-10"></i>
                                                <span className="popuptext" id="myPopup">Copied!</span>
                                            </a>
                                        </CopyToClipboard>
                                    </span>
                                </span>
                            </h2>

                            <div className="connection-group d-flex align-items-center justify-content-center pd-b60">
                                <a href="#" className="btn btn-gradient btn-type-one mr-4 d-flex align-items-center justify-content-center" onClick={e => { e.preventDefault(); this.setState({ connected: true }); }}>{this.state.connected ? 'CONNECTED' : 'CONNECT'}</a>
                                <input type="number" min="1" max="25" dir="rtl" className="form-control" placeholder="Enter Here" onChange={(e) => { this.countHandler(e); }} value={this.state.count} />
                                <a href="#" className="btn btn-gradient btn-type-one ml-4 d-flex align-items-center justify-content-center" onClick={e => { e.preventDefault(); notify(); }}>MINT</a>
                            </div>

                            <h4 className="fw-400 f-24 text-white mb-0">By buying in bulk, Save even more</h4>
                            {
                                data.discount.map((item, index) => (
                                    <h4 className="fw-400 f-24 text-white mb-0" key={'Item:' + index}>{item.amount}% discount for {item.nft}+ NFT's</h4>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export default MintPage;
