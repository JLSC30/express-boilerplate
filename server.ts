//#region Import
import App from './src/config/express.config';
import dotenv from 'dotenv';
import { Connect } from './src/config/mongoose.config'
//#endregion

//#region Config

// Loads variable in .env file
dotenv.config();
const port = process.env.PORT;

// Connect to MongoDB
Connect()

// Start Express App
App.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
//#endregion