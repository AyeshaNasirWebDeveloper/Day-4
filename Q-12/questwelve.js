// Array containing friends' names
var names = ["Ayesha", "Benish", "Chulbuli", "Daniyal", "Erum"];
// Function to print a personalized greeting message
function greetFriends(names) {
    for (var i = 0; i < names.length; i++) {
        console.log("Hello, " + names[i] + "! Hope you're doing well.");
    }
}
// Call the function to greet each friend
greetFriends(names);
