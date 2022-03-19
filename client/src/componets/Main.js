import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {Wrapper} from "./Main.styled.js";
import Modal from 'react-modal';


const Main = () => {
    const {handleSubmit, register, reset} = useForm()
    const [res, setRes] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);


    const handlePayment = (data) => {
        const dataPayment = {
            cardNumber: data.cardNumber,
            expirationDate: `${data.month}/${data.year}`,
            cvv: data.cvv,
            amount: data.amount
        }
        axios.post(`/api/payment/save`, dataPayment)
            .then(({data}) => {
                setRes(data)
                openModal()
                reset()
            })
            .catch(e => e.response?.data?.message || 'Ошибка!')
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Wrapper>
            <section className="component">
                <div className="credit-card">
                    <h2>Credit card</h2>
                    <form onClick={handleSubmit(handlePayment)}>
                        <input
                            {...register("cardNumber", {maxLength: 16, minLength: 16} )}
                            type="number" placeholder="CARD"
                        />
                        <div className="line">
                            <label htmlFor="expiry">EXPIRY :</label>
                            <input
                                {...register("month", {maxLength: 2, minLength: 2, max: 12, min: 1}) }
                                type="number" placeholder="MM" className="line_input"
                            /> /
                            <input
                                {...register("year", {maxLength: 4, minLength: 4, min: 2000, max: 2100})}
                                type="number" placeholder="YEAR" className="line_input"
                            />
                        </div>
                        <div className="line">
                            <input
                                {...register("cvv",{maxLength: 3, minLength: 3})}
                                type="number" placeholder="CCV/CVC" className="line_input"
                            />
                            <input
                                {...register("amount")}
                                type="number" placeholder="Amount $" className="line_input"
                            />
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </form>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 className="modal_title">{res.message}</h2>
                    <div className="modal_item">Request id: <span>{res.requestId}</span></div>
                    <div className="modal_item">Amount: <span>{res.amount}</span></div>
                </Modal>
            </section>
        </Wrapper>

    );
};

export default Main;