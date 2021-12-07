var express = require ('express')
var router = express.Router()

const tasks = [
    {id:1, taskname: "washing"},
    {id:2, taskname: "cooking"},
    {id:3, taskname: "cleaning"}
]


router.get("/", function (req, res){
    res.send(tasks)
})


router.get("/:tasksId" , function (req, res){
    // + converts a string to a number (in this case is the id)
  const oneOfTheTasksOfTheTasksArray =tasks.find((aVariable) => aVariable.id === +req.params.tasksId )
   res.send(oneOfTheTasksOfTheTasksArray)
})


module.exports=router