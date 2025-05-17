class hodcontroller{
    static display =async(req,res)=>{
        try{
            res.render('hods/display')    //folder(student) 
        }catch (error){
            console.log(error)
        }
    }
}



module.exports =hodcontroller