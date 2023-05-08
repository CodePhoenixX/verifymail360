import React from 'react'
import '../CSS/Subscription.css'

function SubscriptionCard() {
    return (
        <>
            <div className="center">
                <div className="article-card">
                    <div className="left-content">
                        <div className="form-group">
                            <p className="text">How many emails do you have?</p>
                            <input type="text" className='input-text' />
                        </div>

                        <div className="box-container">

                            <h2>Calculate Here</h2>

                        <button type='submit'className="bye-now">Bye Now</button>

                        </div>

                    </div>
                    <div className="right-content">
                        <span className='h5'>Pay As You Go Rates</span>

                        <table className="rate-table">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Price per Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="one" class="active">
                                    <td>up to <strong>10,000</strong></td>
                                    <td>$0.008</td>
                                </tr>
                                <tr id="two" class="">
                                    <td>up to <strong>100,000</strong></td>
                                    <td>$0.005</td>
                                </tr>
                                <tr id="three" class="">
                                    <td>up to <strong>250,000</strong></td>
                                    <td>$0.004</td>
                                </tr>
                                <tr id="four">
                                    <td>up to <strong>1,000,000</strong></td>
                                    <td>$0.003</td>
                                </tr>
                            </tbody>
                        </table>
                        <span className='h4'>Enterprise Packages</span>
                        <table className="rate-table">
                            <tbody>
                                <tr id="enterprise">
                                    <td>over <strong>1,000,000</strong></td>
                                    <td>Contact Us</td>
                                </tr>
                            </tbody>
                        </table>
                        <a className='learn-more'>Learn more about enterprise</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionCard
