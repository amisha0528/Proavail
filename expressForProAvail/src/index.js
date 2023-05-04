const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("../../mongoose/src/db/conn");
const Signs = require("../../mongoose/src/models/signseeker");
const Signp = require("../../mongoose/src/models/signprovider");
const Query = require("../../mongoose/src/models/contact");
const port = process.env.PORT || 2000;

const staticPath = path.join(__dirname , "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//to set view engine
app.set("view engine" , "hbs");
app.set("views" , templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index');
    });
;

app.get('/about' , (req, res) => {
    res.render("about");
});

app.get('/help' , (req, res) => {
    res.render("help");
});


app.get('/signup' , (req, res) => {
    res.render("signup");
});

app.get('/signupS' , (req, res) => {
    res.render("signupS");
});

app.get('/signupP' , (req, res) => {
    res.render("signupP");
});

app.get('/index' , (req, res) => {
    res.render("index");
});

app.get('/login' , (req, res) => {
    res.render("login");
});

app.get('/loginS' , (req, res) => {
    res.render("loginS");
});

app.get('/loginP' , (req, res) => {
    res.render("loginP");
});

app.get('/dashboardS' , (req, res) => {
    res.render("dashboardS");
});

app.get('/dashboardP' , (req, res) => {
    res.render("dashboardP");
});

app.get('/plumber' , (req, res) => {
    res.render("plumber");
});

app.get('/appliancerepair' , (req, res) => {
    res.render("appliancerepair");
});

app.get('/beautyservices' , (req, res) => {
    res.render("beautyservices");
});

app.get('/blacksmith' , (req, res) => {
    res.render("blacksmith");
});

app.get('/carpenter' , (req, res) => {
    res.render("carpenter");
});

app.get('/cleaning' , (req, res) => {
    res.render("cleaning");
});

app.get('/electrician' , (req, res) => {
    res.render("electrician");
});

app.get('/gardener' , (req, res) => {
    res.render("gardener");
});

app.get('/glassrepair' , (req, res) => {
    res.render("glassrepair");
});

app.get('/homepainting' , (req, res) => {
    res.render("homepainting");
});

app.get('/laundry' , (req, res) => {
    res.render("laundry");
});

app.get('/movers' , (req, res) => {
    res.render("movers");
});

app.get('/technicians' , (req, res) => {
    res.render("technicians");
});

app.get('/profileS' , (req, res) => {
    res.render("profileS");
});

app.get("*", (req, res) => {
   res.render("404", {
    errorcomment : "OOPS ! Page couldn't be found",
   });
});

app.post('/signupS' , async (req, res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if (password.localeCompare(cpassword) === 0){
            const signseeker = new Signs({

                fname: req.body.fname,
                lname :req.body.lname,
                username :req.body.uname,
                phone : req.body.phone,
                email : req.body.email,
                gender :req.body.gender,
                address : req.body.address,
                city : req.body.city,
                pincode : req.body.pincode,
                password : req.body.password,
                confirmpassword: req.body.confirmpassword
            })
            const registered = await signseeker.save();
            res.status(201).render("dashboardS");
        }else{
            console.log("passwords are not matching");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/signupP',  async(req, res) => {
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        console.log(req.file);
        if (password.localeCompare(cpassword) === 0){
            const signprovider = new Signp({

                businessname: req.body.bname,
                username :req.body.uname,
                phone : req.body.phone,
                email : req.body.email,
                address : req.body.address,
                city : req.body.city,
                pincode : req.body.pincode,
                password : req.body.password,
                confirmpassword: req.body.confirmpassword,
                services : req.body.services,
                timing : req.body.timing,
                days: req.body.days,
                verification: req.body.verification,
                avatar: req.body.avatar
            })
            const submitted = await signprovider.save();
            res.status(201).render("dashboardP");
        }else{
            console.log("passwords are not matching");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/help' , async (req, res) => {
    try{ 
            console.log(req.file);
            const contact = new Query({
                fname: req.body.fname,
                lname :req.body.lname,
                email : req.body.email,                
                question: req.body.question
            })
            const conquery = await contact.save();
            res.status(201).render("dashboardS");
        } catch (error) {
            res.status(400).send(error);
        }
});

app.post("/loginS", async(req,res) =>{
    try{
        const username = req.body.uname;
        const password = req.body.password;

        const logi = await Signs.findOne({username:username});
        if (logi.password === password){
            res.status(201).render("dashboardS");
        }else{
            res.send("passwords are not matching");
        }
    } catch (error) {
        res.status(400).send("invalid username");
    }
})

app.post("/loginP", async(req,res) =>{
    try{
        const username = req.body.uname;
        const password = req.body.password;

        const logi = await Signp.findOne({username:username});
        if (logi.password === password){
            res.status(201).render("dashboardP");
        }else{
            res.send("passwords are not matching");
        }
    } catch (error) {
        res.status(400).send("invalid username");
    }
})

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
});