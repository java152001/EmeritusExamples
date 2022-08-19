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

	// Create a root reference
	var storage = firebase.storage();
	var storageRef = storage.ref();

	// get elements
	const file     = document.getElementById('file');
	const upload   = document.getElementById('upload');	
	const download = document.getElementById('download');		
	const status   = document.getElementById('status');	
	const image    = document.getElementById('image');

	// upload file
	upload.addEventListener('click', e => {
		// Create a file reference
		var ref = storageRef.child('globe');
		let photo = document.getElementById("file").files[0];

		// upload
		ref.put(photo).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
			status.innerHTML = 'Uploaded blob or file!'
		});
	});

	// download file
	download.addEventListener('click', e => {
		// file reference
		var ref = storage.ref('globe');

		ref.getDownloadURL().then(function(url) {
			// insert url into an <img> tag to "download"
			image.src = url;
			status.innerHTML = 'Downloaded blob or file!'			

		}).catch(function(error){console.log(error)});


	});


}());