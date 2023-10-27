const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());

const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sanjithlearn@gmail.com",
        pass: "thku xilq ymtk qmki",
    },
});

app.post("/", (req, res) => {
    console.log("post request");
    const { name, email } = req.body;
    const templatePath = path.join(__dirname, "emailTemplate.ejs");
    console.log(templatePath);
    ejs.renderFile(templatePath, { name }, (err, result) => {
        if (err) {
            console.log(err);
        }

        const emailTemplate = result;
        const data = {
            from: "sanjithlearn@gmail.com",
            to: email,
            subject: "test",
            html: emailTemplate,
        };
        mailTransporter.sendMail(data, (err) => {
            err ? console.log(err) : console.log("success");
        });
    });
});

app.listen(3000, () => {
    console.log("3000 listening");
});
