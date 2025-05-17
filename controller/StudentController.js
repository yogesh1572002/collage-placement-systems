class StudentController{
    static display =async(req,res)=>{
        try{
            res.render('student/display')    //folder(student) 
        }catch (error){
            console.log(error)
        }
    }
}



module.exports =StudentController