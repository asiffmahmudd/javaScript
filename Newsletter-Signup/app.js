const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
    apiKey: "884aad294ee82238c48240e378c5883e-us2",
    server: "us2"
});

const app = express();

app.use(bodyParser.urlencoded({extented:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const mail = req.body.email;

    const listId = "780c18a4e4";
    const subscribingUser = {
        firstName: fName,
        lastName: lName,
        email: mail
    };

    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });

        console.log(
            `Successfully added contact as an audience member. The contact's id is ${
            response.id
            }.`
        );
    }

    run();
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});

//unique id 780c18a4e4
//api key 884aad294ee82238c48240e378c5883e-us2