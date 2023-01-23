const app = require('./app');
const dotenv = require('dotenv');
// uncaught exceptions
process.on('uncaughtException', (err)=>{
    console.log(`Error :${err.message}`);
    console.log('Shutting down server due to uncaught exceptions');
    server.close(()=>process.exit(1));
})
//config
dotenv.config({path:'config/config.env'});
const server = app.listen(process.env.PORT , ()=>{
    console.log(`server is working on port ${process.env.PORT}`);
})
// Unhandled promise rejection
 process.on('unhandledRejection', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down server due to unhandled promise rejection');
    server.close(()=>process.exit(1));
})