const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '8ntCzYCL#SWGdicpO67zKrqblnQQHeKlgkExvHfyYOLfCLFB8qko', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://Coltar07:<db_password>@coltar07.diwgx.mongodb.net/',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '2348109966247',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '2348209966247'    // Enter Your Bot Number
};
