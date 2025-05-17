const Adminmodel = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

class FrontController {
    static home = async (req, res) => {
        try {
            res.render("home")
        } catch (error) {
            console.log(error)

        }
    }

    static about = async (req, res) => {
        try {
            res.render("about")
        } catch (error) {
            console.log(error)

        }
    }

    static login = async (req, res) => {
        try {
            res.render("login", { msg: req.flash('error') })
        } catch (error) {
            console.log(error)

        }
    }

    static register = async (req, res) => {
        try {
            res.render("register")
        } catch (error) {
            console.log(error)

        }
    }

    static dashboard = async (req, res) => {
        try {
            res.render("dashboard")
        } catch (error) {
            console.log(error)

        }
    }

    static verifylogin = async (req, res) => {
        try {
            const { email, password, role } = req.body;
            if (!role) {
                req.flash("error", "please select your role");
                return res.redirect("/login");
            }
            let user;
            switch (role) {
                case "admin":
                    user = await Adminmodel.findOne({ email });
                    break;
                case "hod":
                    user = await HodModel.findOne({ email });
                    break;
                case "company":
                    user = await CompanyModel.findOne({ email });
                    break;
                case "student":
                    user = await StudentModel.findOne({ email });
                    break;
                default:
                    req.flash("error", "invalid role selected");
                    return res.redirect("/login")


            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                req.flash("error", "email or password not match");
                return res.redirect("/login");
            }
            // generate jwt token

            const token = jwt.sign(
                { id: user._id, role: role, name: user.name },
                "pninfosyshdgghsgey26hgdsb", // secret key — ise environment variable me rakhna best practice hai
                { expiresIn: "1d" }
            );
           // console.log(token)

           // Store token in HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      }); // 1 day
      // 1 day = 24 hours = 24 * 60 minutes = 24 * 60 * 60 seconds = 86400 seconds
      // 24 hours 60 minutes per hour 60 seconds per minute 1000 milliseconds per second
      // 1 din ke milliseconds — yani 86,400,000 milliseconds.
      // httpOnly: true matlab ye cookie sirf backend ke liye accessible hai (JavaScript se nahi)
      // Cookie = Browser mein chhoti file (data snippet) jo website ke liye info rakhti hai.
      // Session = Server side memory jo user ke info ko temporarily store karta hai.
      // JWT in cookie = Secure token jo user ke identity ko verify karta hai, aur cookie ke through har request mein backend ko bheja jaata hai.





            return res.redirect("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }



    static registerAdmin = async (req, res) => {
        try {
            // console.log(req.boby)
            const { name, email, password } = req.body
            const hashpassword = await bcrypt.hash(password, 10)

            const result = await Adminmodel.create(
                {
                    name,
                    email,
                    password: hashpassword
                }
            )
            res.redirect('/login')//web pr jyega
        } catch (error) {
            console.log(error)

        }
    }

}
module.exports = FrontController