// Firebase
	var config = {
    apiKey: "AIzaSyB8oLnEY4sbeipB0SET1EDKaDfHTIVVJag",
    authDomain: "bootcamp-f6bb9.firebaseapp.com",
    databaseURL: "https://bootcamp-f6bb9.firebaseio.com",
    storageBucket: "bootcamp-f6bb9.appspot.com",
  	};
  
	firebase.initializeApp(config);

	var database = firebase.database();

// Add Train Button
$("#addTrainBtn").on("click", function() {

	// Get input
	var trainName = $("#trainNameInput").val().trim();
	var destination =$("#destinationInput").val().trim(); 
	var firstTrain = $("#firstTrainTimeInput").val().trim();
	var frequency = $("#frequencyInput").val().trim();

	// object for new train
	var newTrain = {
		newName: trainName,
		newDestination: destination,
		newFirstTrain: firstTrain,
		newFrequency: frequency
	}

	// updates to firebase
	database.ref().push(newTrain);	

	// console logs everything sanity check
	console.log(newTrain.trainName);
	console.log(newTrain.destination);
	console.log(newTrain.firstTrain);
	console.log(newTrain.frequency);

	// clear it out after
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainTimeInput").val("");
	$("#frequencyInput").val("");

	return false;	
});

// Firebase event for adding new train
database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store child details in variables
	var trainName = childSnapshot.val().newName;
	var destination = childSnapshot.val().newDestination;
	var firstTrain = childSnapshot.val().newFirstTrain;
	var frequency = childSnapshot.val().newFrequency;

	// Calc time til next train
	var minutesAway = frequency;
	
	// Add all the stuff to the table
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrain + "</td><td>" + frequency + "</td><td>" + minutesAway + "</td>");

}); 

















