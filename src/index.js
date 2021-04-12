require('dotenv').config();

const app= require('./app');

require('./database');
const path = require('path');

function main(){
	
	app.get('*', (req, res) => {
		res.sendFile(path.join('client/build/index.html'));
	});

	app.listen(process.env.PORT, ()=>{
		console.log("App corriendo por el puerto:", process.env.PORT);
	});
	

}

main();