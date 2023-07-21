/* Module 2: Declare variable types in TypeScript
   Lab start  */

/*  EXERCISE 1
TODO: Modify the code to add types to the variable declarations. 
The resulting JavaScript should look the same as the original example when you're done. */

    let firstName:string;
    let lastName:string;
    let fullName:string;
    let age:number;
    let ukCitizen:boolean;
    
    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
    
/* EXERCISE 2
TODO: You can use types to ensure operation outcomes. Run the code as is and then modify 
it to have strongly typed variables. Then, address any errors you find so that the result 
returned to a is 12. */
    
    let x:number;
    let y:number;
    let a:number;
    
    x = 5;
    y = 7;
    a = x + y;
    
    console.log(a);
    
/* EXERCISE 3
 TODO: In the following code, implement an enum type called Season that represents 
the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
 you can pass in the season by referencing an item in the enum, for example 
Season.Fall, instead of the literal string "Fall". */

enum Season{
            Fall="Fall",
            Winter="Winter",
            Spring="Spring",
            Summer="Summer"
        }

        function whichMonths(season:Season) {
        
            let monthsInSeason: string;
        
            switch (season) {
                case "Fall":
                    monthsInSeason = "September to November";
                    break;
                case "Winter":
                    monthsInSeason = "December to February";
                    break;
                case "Spring":
                    monthsInSeason = "March to May";
                    break;
                case "Summer":
                    monthsInSeason = "June to August";
                default:
                    monthsInSeason = "Invalid season";
            }
        
            return monthsInSeason;
        }
        
        console.log(whichMonths(Season.Fall));
    
/* EXERCISE 4
TODO: Declare the array as the type to match the type of the items in the array. */
    
       let randomNumbers:number[]=[]; // Se declara como un array y comienza vacío
       let nextNumber;
       
       for (let i = 0; i < 10; i++) {
           nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
           randomNumbers.push(nextNumber);
       }
       
       console.log(randomNumbers);