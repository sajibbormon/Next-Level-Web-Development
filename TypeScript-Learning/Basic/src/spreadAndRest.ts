/**
 * Spread and Rest
 */

//

/**
 * Spread: means scatering elements that are together. Suppose taking all elements of an array to another array or send them as parameters in function 
 */
//spread in an array

const friends = ["Rahim", "karim"];

const schoolFriends = ["Pintu", "Chintu", "Bulbul"];

const collegeFriends = ["Smart boy", "Very Smart boy"];

//now want to push school and college friends into friends array.

// friends.push(schoolFriends); //it is not possible to push an array into a string array.

// but it was possilbe in js and that look like the below one in js:

// friends = ["Rahim", "karim", ["Pintu", "Chintu", "Bulbul"]];

// this is not possible in typescript as we can not assign an array into array of strings.

// how can we insert all strings into friends array? using spread operator ...arrayName/objectName .

friends.push(...collegeFriends); //using spread

console.log(friends);

//spread in an object


const user = {
    name: "Sajib",
    phoneNo: "017XXXXXXX"
}

const otherInfo = {
    hobby: "Coding",
    favouriteColor: "White"
}

const userInfo = {...user, ...otherInfo};

console.log(userInfo);



/**
 * Rest: means combhine scattered elements together.
 */


// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Sent Invitation to ${friend1}`);
//     console.log(`Sent Invitation to ${friend2}`);
//     console.log(`Sent Invitation to ${friend3}`);
// }

// sendInvite("pintu", "chintu", "bulbul");


//suppose we want to invite more friends then we have use an array as parameter for friends. array of friend.

// to combine all friends together we can use rest operator.

const sendInvite = (...friends: string[]) => { //using rest
    friends.forEach((friend: string)=>{
        console.log(`Sent invitation to ${friend}`);
    });
}

sendInvite("pintu", "chintu", "bulbul", "chulbul");


