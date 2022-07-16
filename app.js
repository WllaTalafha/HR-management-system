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
    console.log(this);

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

    let textPlace = document.getElementById("rend");
    let x = document.createElement("p");
    x.textContent = "Employee Name: "+this.fullName+"Salary: "+this.salary+" JD";
    textPlace.appendChild(x);
    
}

function PrintData()
{
    for (let i = 0 ; i<allEmp.length ; i++)
    {
        allEmp[i].render();
    }
}


const Emp1 = new EmpInfo (1000,"Ghazi Samer","Administration","Senior","");
const Emp2 = new EmpInfo (1001,"Lana Ali","Finance","Senior",""); 
const Emp3 = new EmpInfo (1002,"Tamara Ayoubr","Marketing","Senior","");
const Emp4 = new EmpInfo (1003,"Safi Walid","Administration","Mid-Senior","");
const Emp5 = new EmpInfo (1004,"Omar Zaid","Development","Senior","");
const Emp6 = new EmpInfo (1005,"Rana Saleh","Development","Junior","");
const Emp7 = new EmpInfo (1006,"Hadi Ahmad","Finance","Mid-Senior","");


PrintData();