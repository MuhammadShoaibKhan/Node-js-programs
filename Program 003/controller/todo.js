const todoModel = require('../models/todoSchema')




const addTodo = async(req, res) => {

    let userCreate = new todoModel({
        todoName: req.body.todoWalaKaam
    });
    userCreate
        .save()
        .then((response) => {
            //   console.log(response, 'response success')
            res
                .status(200)
                .send({ result: response, message: "Todo Added Successfully" });
        })

    .catch((err) => {
        //  console.log(err, 'err');
        res.status(400).send({
            result: err.message,
            message: "Todo not added successfully",
        });
    });

}

const getAllTodo = async(req, res) => {
    var result = await todoModel.find({})
    res.status(200).send({ message: 'All Data Fetched Successfully.', data: result })
}

module.exports = (addTodo, getAllTodo)