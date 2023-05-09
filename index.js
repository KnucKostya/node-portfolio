const express = require('express')
const nodemailer = require("nodemailer");
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3010

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.get('/sendMessage', async (req, res) => {
    res.send('<div>Hello</div>')
})

app.post('/sendMessage', async (req, res) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: 'knuckostya@gmail.com',
            pass: 'micutgnuyrttjunn',

        },
    });

    let {email, name, text} = req.body

    let info = await transporter.sendMail({
        // from: email,
        // to: "knuckostya@gmail.com",
        // subject: "HR from portfolio",
        from: 'Name',
        to: email,
        subject: "HR from portfolio",


        html: `<b>Сообщение от HR, ${name} с PORTFOLIO</b>
               <div>${email}</div>
               <div>${text}</div>`,
    });

    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
