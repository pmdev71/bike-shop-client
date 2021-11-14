import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Myorder from '../Myorder/Myorder';

const Myorders = () => {

    const { user } = useAuth();
    const userEmail = user.email;


    const [allorders, setAllorders] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-gorge-53746.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data.filter(order => order?.mail == userEmail)))
    }, [allorders])

    const handelDeleteOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://afternoon-gorge-53746.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = allorders.filter(order => order?._id !== id);
                        setAllorders(remainingOrders);
                    }
                });
        }
    }

    const handelAcceptOrder = id => {
        const proceed = window.confirm('Are you sure, you want to Accept order?');
        if (proceed) {
            const url = `https://afternoon-gorge-53746.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order Accepted');
                    setAllorders(allorders);
                });
        }
    }

    return (
        <div>
            <div className="container pb-5">
                <h1 className="p-2 fw-bold bg-dark text-white mt-4">My Orders</h1>
                {/* Pass the data to another component using map  */}

                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <th>Bike Name</th>
                            <th>MAIL</th>
                            <th>ADDRESS</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map(allorders => <Myorder
                                handelAcceptOrder={handelAcceptOrder}
                                handelDeleteOrder={handelDeleteOrder}
                                allorders={allorders} key={allorders._id}></Myorder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Myorders;