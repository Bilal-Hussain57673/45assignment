// Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:

// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list.

// answer:

let myguest:string[]=["sir ameen alam","sir hamzah syed","sir hamzah alvi"]
myguest.forEach(guest=>{
    console.log(`hello sir, ${myguest}, would you like to dinner with me at my home. `);
    
})

let unableToAttend:string="sir ameen"
console.log(`${unableToAttend} will not come for dinner because he will be busy at that time.`);

// replace the guest
let newguest="miss minaheel";
myguest[myguest.indexOf(unableToAttend)]=newguest;

// new invitation
myguest.forEach(guest=>{
    console.log(`dear sir and miss, ${myguest}, would you like to dinner with me at my house.`);
    
})