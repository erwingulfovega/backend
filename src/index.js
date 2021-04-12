require('dotenv').config();

const app= require('./app');

require('./database');

function main(){
	
	const PORT = process.env.MONGODB_PORT || 4000;
	app.listen(PORT, () => {
    console.log('App is running on port ${ PORT }');

});

}


main();