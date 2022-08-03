var Id= 999;


const employee1 =
     {
    "Employee ID": 0,
    "Full Name" : "Ghazi Samer",
    "Department" : "Administration" ,
    "Level" :  "Senior",
    "Image URL" : "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=360",
    "Salary" : 0,

    uniqueId: function(counter){
     this["Employee ID"]= counter +1;
     ++Id;
    },

    getRandomSalary: function(min,max) {
        let salary= Math.floor(Math.random()*(max- min) + min);
        let netSalary= salary-(salary*0.075);
        this["Salary"]= salary;
        console.log("Employee salary is: "+salary);
        console.log("Net Salary is: "+netSalary);

    }

  };

  employee1.uniqueId(Id);
  console.log("Employee ID   ", employee1["Employee ID"]);
  employee1.getRandomSalary(1500,2000);
  console.log("__________________");



  const employee2 =
   {
    "Employee ID": 0,
    "Full Name" : "Lana Ali",
    "Department" : "Finance" ,
    "Level" :  "Senior",
    "Image URL" : "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    "Salary" : 0,

    uniqueId: function(counter){
        this["Employee ID"]= counter +1;
        ++Id;
       },
   
       getRandomSalary: function(min,max) {
           let salary= Math.floor(Math.random()*(max- min) + min);
           let netSalary= salary-(salary*0.075);
           this["Salary"]= salary;
           console.log("Employee salary is: "+salary);
           console.log("Net Salary is: "+netSalary);
   
       }
   
  };

  employee2.uniqueId(Id);
  console.log("Employee ID   ", employee2["Employee ID"]);
  employee2.getRandomSalary(1500,2000);
  console.log("__________________");


  const employee3 =
   {
    "Employee ID": 0,
    "Full Name" : "Tamara Ayoub",
    "Department" : "Marketing" ,
    "Level" :  "Senior",
    "Image URL" : "https://selwyncomed.arlo.co/content/img/Women%20in%20Islam%20650px.jpg",
    "Salary" : 0,

    uniqueId: function(counter){
        this["Employee ID"]= counter +1;
        ++Id;
       },
   
       getRandomSalary: function(min,max) {
           let salary= Math.floor(Math.random()*(max- min) + min);
           let netSalary= salary-(salary*0.075);
           this["Salary"]= salary;
           console.log("Employee salary is: "+salary);
           console.log("Net Salary is: "+netSalary);
   
       }

    
  };
  employee3.uniqueId(Id);
  console.log("Employee ID   ", employee3["Employee ID"]);
  employee3.getRandomSalary(1500,2000);
  console.log("__________________");

  const employee4 =
   {
    "Employee ID": 0,
    "Full Name" : "Safi Walid",
    "Department" : "Administration" ,
    "Level" :  "Mid-Senior",
    "Image URL" : "https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg",
    "Salary" : 0,

    uniqueId: function(counter){
        this["Employee ID"]= counter +1;
        ++Id;
       },
   
       getRandomSalary: function(min,max) {
           let salary= Math.floor(Math.random()*(max- min) + min);
           let netSalary= salary-(salary*0.075);
           this["Salary"]= salary;
           console.log("Employee salary is: "+salary);
           console.log("Net Salary is: "+netSalary);
   
       }
   
  };
  employee4.uniqueId(Id);
  console.log("Employee ID   ", employee4["Employee ID"]);
  employee4.getRandomSalary(1000,1500);
  console.log("__________________");

  const employee5 =
   {
    "Employee ID": 0,
    "Full Name" : "Omar Zaid",
    "Department" : "Development" ,
    "Level" :  "Senior",
    "Image URL" : "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdlZWt8ZW58MHx8MHx8&w=1000&q=80",
    "Salary" : 0,

    uniqueId: function(counter){
        this["Employee ID"]= counter +1;
        ++Id;
       },
   
       getRandomSalary: function(min,max) {
           let salary= Math.floor(Math.random()*(max- min) + min);
           let netSalary= salary-(salary*0.075);
           this["Salary"]= salary;
           console.log("Employee salary is: "+salary);
           console.log("Net Salary is: "+netSalary);
   
       }
   
  };
  employee5.uniqueId(Id);
  console.log("Employee ID   ", employee5["Employee ID"]);
  employee5.getRandomSalary(1500,2000);
  console.log("__________________");

  const employee6 =
 {
    "Employee ID": 0,
    "Full Name" : "Rana Saleh",
    "Department" : "Development" ,
    "Level" :  "Junior",
    "Image URL" : "https://cdn.create.vista.com/api/media/small/166328236/stock-photo-muslim-woman-in-hijab",
    "Salary" : 0,

    uniqueId: function(counter){
        this["Employee ID"]= counter +1;
        ++Id;
       },
   
       getRandomSalary: function(min,max) {
           let salary= Math.floor(Math.random()*(max- min) + min);
           let netSalary= salary-(salary*0.075);
           this["Salary"]= salary;
           console.log("Employee salary is: "+salary);
           console.log("Net Salary is: "+netSalary);
   
       }
   
  };
  employee6.uniqueId(Id);
  console.log("Employee ID   ", employee6["Employee ID"]);
  employee6.getRandomSalary(500,1000);
  console.log("__________________");

  const employee7 =
   {
    "Employee ID": 0,
    "Full Name" : "Hadi Ahmad",
    "Department" : "Finance" ,
    "Level" :  "Mid-Senior",
    "Image URL" : "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000",
    "Salary" : 0,

    uniqueId: function(counter){
        this["Employee ID"]= counter +1;
        ++Id;
       },
   
       getRandomSalary: function(min,max) {
           let salary= Math.floor(Math.random()*(max- min) + min);
           let netSalary= salary-(salary*0.075);
           this["Salary"]= salary;
           console.log("Employee salary is: "+salary);
           console.log("Net Salary is: "+netSalary);
   
       }
   
  };
  employee7.uniqueId(Id);
  console.log("Employee ID   ", employee7["Employee ID"]);
  employee7.getRandomSalary(1000,1500);
  console.log("__________________");




 //for (let x =0; x < employees.length ; x++){
  //console.log(`Employee ID:${employees.valueID} `);
  //console.log("Employee name:" + employees["Full Name"]+" ");
  //console.log("Employee salary:"+employees.Salary + " ");}
  //function getRandomArbitrary(min, max) {
    //return Math.random() * (max - min) + min;}

    console.log(employee1);

  

