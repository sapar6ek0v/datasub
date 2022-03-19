import Payment from '../models/models.js'


export const savePayment = (req, res) => {
    const {cardNumber, cvv, expirationDate, amount} = req.body

    const newPayment = new Payment({cardNumber, cvv, expirationDate, amount})

    newPayment.save((error, payment) => {
        if (error) return res.status(401).json({message: "Ошибка в платежа", error})

        res.json({
            message: "Вы успешно оплатили",
            requestId: payment._id,
            amount: payment.amount
        })
    })
}

