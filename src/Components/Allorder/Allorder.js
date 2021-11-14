import React from 'react';

const Allorder = (props) => {
    const { _id, bikeName, status, address, mail } = props.allorders;
    return (
        <>
            <tr>
                <td>{bikeName}</td>
                <td>{mail}</td>
                <td>{address}</td>
                {
                    (status === "pending") ?
                        <>
                            <td>{status}</td>
                            <td><button onClick={() => props.handelAcceptOrder(_id)} className="fw-bold btn btn-danger ">Accept</button> / <button onClick={() => props.handelDeleteOrder(_id)} className="text-dark border-0" ><i class="fas fa-trash-alt"></i></button></td></>
                        :
                        <>
                            <td className="text-info fw-bold">{status}</td>
                            <td><button onClick={() => props.handelDeleteOrder(_id)} className="text-dark border-0" ><i class="fas fa-trash-alt"></i></button></td>
                        </>
                }
            </tr>
        </>
    );
};

export default Allorder;