/*
1. The Magical Sorting Hat:
Imagine you are creating a magical sorting hat for a wizard school.
Implement a JavaScript function that takes an array of student names and assigns them to one of 
the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8),
Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the 
length of their names.
*/

let students =["ranjan", "sipun", "subhaman", "ashishkumar","aniveshsing", "anilkumarnayak","anil"]

let houses =[]

for (const student of students) {
    if (student.length < 6){
        houses.push("Gryffindor")
    }
}