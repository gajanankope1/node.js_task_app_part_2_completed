require("../rest_api_and_mongoose/src/db/mongoose");
const User = require("../rest_api_and_mongoose/src/models/user");

User.findByIdAndUpdate("62c10c772f53af9115e5b9b1", { age: 20 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 20 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log("error")
})

// same as above but using async await functionality  

const updateAgeAndCount = async (id, age) => {
const user=await User.findByIdAndUpdate(id,{age});
const count=await User.countDocuments({age});
return count;
}

updateAgeAndCount("62c10c772f53af9115e5b9b1",2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})