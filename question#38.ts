// Q38 - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


// answer:

function describe_city(city:string="karachi",country:string="pakistan"){
    console.log(`${city} is in ${country}.`);
    
}
describe_city()
describe_city("mumbai","india")
describe_city("beijing","china")
describe_city("colombo","srilanka")
describe_city("london","england")