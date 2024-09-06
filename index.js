
import "dotenv/config"
import http from 'http'
import app from "./src/app.js"
import connectDB from "./src/db/connectDB.js"

const server = http.createServer(app)
const port = process.env.PORT || 5000

const main = async () => {
	try {
		await connectDB();
		server.listen(port, async () => {
			console.log('Server is listening on port 5000');
		});
	} catch (e) {
		console.log('Database Error');
		console.log(e);
	}
};

main();