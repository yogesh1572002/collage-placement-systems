class CompanyController{
    static display = async (req, res) => {
        try {
            res.render("company/display")
        } catch (error) {
            console.log(error) 
        }
    }
}


module.exports =CompanyController