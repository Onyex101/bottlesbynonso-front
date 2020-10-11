import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <Container fluid>
            <table className="table table-hover table-responsive-md">
                <thead className="bg-light">
                    <tr>
                        <th className="py-4 pl-4 text-sm border-0">Order</th>
                        <th className="py-4 text-sm border-0">Date</th>
                        <th className="py-4 text-sm border-0">Total</th>
                        <th className="py-4 text-sm border-0">Status</th>
                        <th className="py-4 text-sm border-0">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="pl-4 py-5 align-middle"># 1754</th>
                        <th className="py-5 align-middle">22/9/2019</th>
                        <th className="py-5 align-middle">#150</th>
                        <th className="py-5 align-middle">
                            <span><Badge variant="info-light">being prepared</Badge></span>
                        </th>
                        <th className="py-5 align-middle">
                            <Link to="/" className="btn btn-outline-dark btn-sm">View</Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="pl-4 py-5 align-middle"># 1734</th>
                        <th className="py-5 align-middle">7/5/2019</th>
                        <th className="py-5 align-middle">#150</th>
                        <th className="py-5 align-middle">
                            <span><Badge variant="warning-light">Action needed</Badge></span>
                        </th>
                        <th className="py-5 align-middle">
                            <Link to="/" className="btn btn-outline-dark btn-sm">View</Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="pl-4 py-5 align-middle"># 1734</th>
                        <th className="py-5 align-middle">7/5/2019</th>
                        <th className="py-5 align-middle">#150</th>
                        <th className="py-5 align-middle">
                            <span><Badge variant="success-light">Recieved</Badge></span>
                        </th>
                        <th className="py-5 align-middle">
                            <Link to="/" className="btn btn-outline-dark btn-sm">View</Link>
                        </th>
                    </tr>
                    <tr>
                        <th className="pl-4 py-5 align-middle"># 1734</th>
                        <th className="py-5 align-middle">7/5/2019</th>
                        <th className="py-5 align-middle">#150</th>
                        <th className="py-5 align-middle">
                            <span><Badge variant="danger-light">Canceled</Badge></span>
                        </th>
                        <th className="py-5 align-middle">
                            <Link to="/" className="btn btn-outline-dark btn-sm">View</Link>
                        </th>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default Order;
