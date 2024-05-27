// Array containing friends' names
let names:string[] = ["Ayesha", "Benish", "Chulbuli", "Daniyal", "Erum"];

// Function to print a personalized greeting message
function greetFriends(names:string[]):void {
    for (let i = 0; i < names.length; i++) {
        console.log("Hello, " + names[i] + "! Hope you're doing well.");
    }
}

// Call the function to greet each friend
greetFriends(names);
