const mongoose=require('mongoose')
const Local_Url="mongodb://127.0.0.1:27017/CollegePlacementSystem"

const Connectdb=()=>
{
    return mongoose.connect(Local_Url)
    .then(()=>
    {
        console.log("Connectdb")
    }).catch((error)=>
    {
        console.log(error)
    })
}


module.exports=Connectdb