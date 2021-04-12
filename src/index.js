require('dotenv').config();

const app= require('./app');

//require('./database');

function main(){
	
	app.listen(process.env.PORT, ()=>{
		console.log("App corriendo por el puerto:", app.get('port'));
	});
	

}

main();