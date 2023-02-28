// const connection = require('./dbconnection');
const transporter = require('./mailer.js');

const defaultHandler = (request, response) => {
    response.writeHead(200, {
        "Content-Type": "application/json",
    });
    response.write(
        JSON.stringify({
            message: `API not found at ${request.url}`,
        })
    );
    response.end();
};

const getHandler = (request, response) => {
    // connection.query('SELECT * FROM user_info', (err, rows) => {
    //     if (err) throw err;
    //     response.statusCode = 200;
    //     response.setHeader('Content-Type', 'application/json');
    //     response.end(JSON.stringify(rows));
    // });
};

const postHandler = (request, response) => {
    let body = '';
    request.on('data', (chunk) => {
        body += chunk.toString();
    });
    //read the data from request
    request.on('end', () => {
        const data = JSON.parse(body);
        // connection.query('INSERT INTO user_info SET ?', { personal_details: JSON.stringify(data) }, (err, result) => {
        //     console.log(data.email);
        //     if (err) throw err;
        //     if (result.insertId) {
        //         let usermail = data.email
        //         let mailOptions = {
        //             from: 'surendar.b@redblox.io', // sender address
        //             to: usermail, // list of receivers
        //             subject: 'Test Mail', // Subject line
        //             text: 'Hello world?', // plain text body
        //             html: '<b>Hello world?</b>' // html body
        //         };
        //         transporter.sendMail(mailOptions, (error, info) => {
        //             if (error) {
        //                 console.log(error);
        //             } else {
        //                 console.log('Message sent: %s', info.messageId);
        //             }
        //         });
        //     }
        //     response.statusCode = 200;
        //     response.setHeader('Content-Type', 'application/json');
        //     response.end(JSON.stringify({ message: 'Data inserted successfully' }));
        // });
    });
}

module.exports = { defaultHandler, postHandler, getHandler };