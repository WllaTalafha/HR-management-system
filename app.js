'use strict';

const allEmp = [];

function EmpInfo (employeeID,fullName,department,level,imageURL) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.netSalary();

    allEmp.push(this);
    console.log (this);

}


EmpInfo.prototype.salaryCalculation = function() {

if(this.level==="Senior"){ this.salary = Math.floor(Math.random()*(2000-1500+1))+1500; }
if(this.level==="Mid-Senior"){ this.salary = Math.floor(Math.random()*(1500-1000+1))+1000; }
if(this.level==="Junior"){ this.salary = Math.floor(Math.random()*(1000-500+1))+500; }

return this.salary;
}

EmpInfo.prototype.netSalary = function() {
    
    return (Math.floor(this.salaryCalculation()*0.925)) ;
}

EmpInfo.prototype.render = function() {

    let place = document.getElementById("rend");
    let x = document.createElement("p");
    x.textContent = "Name:"+this.fullName+"-ID:"+this.employeeID+"     "+"Department:"+this.department+"-level:"+this.level+"     "+"Salary:"+this.salary+" JD";
      // return document.write ("Employee Name: "+this.fullName+"Salary: "+this.salary+" JD");
    
    let y = document.createElement("img");
    y.src = this.imageURL;
    y.alt = "Employee image";

    let z = document.createElement("div");
    z.appendChild(y);
    z.appendChild(x);
    place.appendChild(z);
    z.setAttribute("class","divs");
    y.setAttribute("id","img");
 
}

function PrintData()
{
    for (let i = 0 ; i<allEmp.length ; i++)
    {
        allEmp[i].render();
    }
}


const Emp1 = new EmpInfo (1000,"Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
const Emp2 = new EmpInfo (1001,"Lana Ali","Finance","Senior","./assets/Lana.jpg"); 
const Emp3 = new EmpInfo (1002,"Tamara Ayoubr","Marketing","Senior","./assets/Tamara.jpg");
const Emp4 = new EmpInfo (1003,"Safi Walid","Administration","Mid-Senior","./assets/Safi.jpg");
const Emp5 = new EmpInfo (1004,"Omar Zaid","Development","Senior","./assets/Omar.jpg");
const Emp6 = new EmpInfo (1005,"Rana Saleh","Development","Junior","./assets/Rana.jpg");
const Emp7 = new EmpInfo (1006,"Hadi Ahmad","Finance","Mid-Senior","./assets/Hadi.jpg");


PrintData();