require("../rest_api_and_mongoose/src/db/mongoose");
const Task = require("../rest_api_and_mongoose/src/models/task");

Task.findByIdAndDelete("62c112e9ea07341f79b9479c").then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log("error")
})

// same as above but using async await functionality  

// const updateTaskAndCount = async (id) => {
//     const task=await Task.findByIdAndDelete(id);
//     const count=await User.countDocuments({completed:false});
//     return count;
//     }
    
//     updateTaskAndCount("62c112e9ea07341f79b9479c").then((count)=>{
//         console.log(count);
//     }).catch((e)=>{
//         console.log(e);
//     })