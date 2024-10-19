const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'SaQgXCoQ#6b7CJBIrbFhNRry8-4KjvYk3QSNsvXLMXrzg2sculyY', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '2348109966247',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '2348209966247'    // Enter Your Bot Number
};
