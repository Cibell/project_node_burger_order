
const express = require('express')
const  uuid   =  require ( 'uuid' ) ;

const cors = require('cors')

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())


const orders = []

const checkUserId = (request, response, next) => {
    const {id} = request.params

    const index = orders.findIndex(order => order.id === id)

    if(index < 0) {
        return response.status(404).json({error: 'User not found'})
    }

    request.orderIndex = index
    request.orderId = id

    next()

}

const methodUrl = (request,response, next) => {

    console.log(`Method used: ${request.method} and the URL: /order} `)

    next()
}

app.get('/order', methodUrl, (request, response) => {
    return response.json(orders)
})
app.get('/order/:id', checkUserId, methodUrl, (request, response) => {
    const index = request.orderIndex
    
    return response.json(orders[index])
})

app.post('/order',methodUrl, (request, response) => {
    const {order, clientName, price } = request.body
    const status = "Em preparação"

    const orde = { id: uuid.v4(), order, clientName, price, status }

    orders.push(orde)

    return response.json(orde)
})
app.put('/order/:id', checkUserId, methodUrl, (request, response) => {
    const id = request.orderId
    const {order, clientName, price } = request.body
    const status = "Em preparação"

    const updatedOrder = {id, order, clientName, price, status }

    const index = request.orderIndex

    orders[index] = updatedOrder

    return response.json(updatedOrder)
})

app.delete('/order/:id', checkUserId, methodUrl, (request, response) => {
    const index = request.orderIndex
    orders.splice(index,1)

    return response.status(204).json()
})

app.patch('/order/:id', checkUserId, methodUrl, (request, response) => {
    
    const index = request.orderIndex
    const {order, clientName, price } = orders[index]
    
    const finalstatus = {order, clientName, price, status: "Pronto" }

    orders[index] = finalstatus

    return response.json(finalstatus)
    
})


app.listen(port, () => {
    console.log(`🚀 Server started on porta ${port} `)

})