(function(){

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyAK4yaWMXXOF4O6otFw0MECGBpGSHyaoPk",
		authDomain: "testerino2-25bc4.firebaseapp.com",
		databaseURL: "https://testerino2-25bc4-default-rtdb.firebaseio.com",
		projectId: "testerino2-25bc4",
		storageBucket: "testerino2-25bc4.appspot.com",
		messagingSenderId: "807891951949",
		appId: "1:807891951949:web:b87bad7bb533d8db545704"
	};
	
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

	// get elements
	const message = document.getElementById('message');
	const write   = document.getElementById('write');
	const read	  = document.getElementById('read');
	const status  = document.getElementById('status');

	// write
	write.addEventListener('click', e => {
		const messages = db.ref('messages');

		// simple id - ok for example, do not use in production
		const id = (new Date).getTime(); 

		// write to db
		messages.child(id).set({'message' : message.value})
			.then(function(){
				status.innerHTML = "Wrote to DB!";
			});
	});

	// read
	read.addEventListener('click', e => {
		status.innerHTML = '';
		const messages = db.ref('messages');

		messages.once('value')
		  .then(function(dataSnapshot) {
		  	var data = dataSnapshot.val();
		  	var keys = Object.keys(data);

		  	keys.forEach(function(key){
		  		console.log(data[key]);
				status.innerHTML += JSON.stringify(data[key]) + '<br>';
		  	});
		});
	});


}());