//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class circle{
    constructor(radius,color){
        this._radius=radius
        this._color=color
    }
    get radius(){
        return this._radius 
    }
       
    set radius(radius){
            return this._radius
    }
    get color(){
       return this._color
    }    
    set color(color){
            return this._color
        }
    get area(){
        return Math.PI*(Math.pow(this._radius,2))
    }
    get circumference(){
        return 2*Math.PI*this._radius
    }           
}
var a=new circle(9,"red")
console.log(circle)
console.log(a.radius)
console.log(a.radius,a.color)
console.log(a.radius)
console.log(a.color)
console.log(a.area.toFixed(3))
console.log(a.circumference.toFixed(3))
console.log(a.toString())

//2.Write a “person” class to hold all the details

class person{
    constructor(name,age,dob,address,pincode,martial_status,number,city,state,country,religion,Annual_salary){
        this.name=name
        this.age=age
        this.dob=dob
        this.address=address
        this.pincode=pincode
        this.martial_status=martial_status
        this.number=number
        this.city=city
        this.state=state
        this.country=country
        this.religion=religion
        this.Annual_salary=Annual_salary
    }
    
    person_all_details(){
       return this
        }       
}
var person1=new person("Raja",25,"26-03-1999","12/2,road,erode",638301,"single",9876543210,"Erode","Tamilnadu","India","Hindhu",12000)
console.log(person1.person_all_details())

//3.write a class to calculate the Uber price.
class uber{
    constructor(km){
        this.km=km
    }
    Auto(){
        return (`In auto you can pay directly to driver ,cash/upi 
Price:${this.km*20.89}
Travel Time:${this.km*0.375} minutes
Thanks for choosing uber
Happy journey`)
    }
    Uber_go(){
        return (`4 Seats. Affordable, compact rides 
Price:${this.km*28.73}
Travel Time:${this.km*1} minutes
Thanks for choosing uber
Happy journey`)
    }
    go_seden(){
        return (`4 Seats. Affordable, sedan rides 
Price:${this.km*35.56}
Travel Time:${this.km*1} minutes
Thanks for choosing uber
Happy Journey`)
    }
    Uber_XL(){
        return (`4 Seats. Affordable, SUV rides 
Price:${this.km*55.60}
Travel Time:${this.km*0.875} minutes
Thanks for choosing uber
Happy Journey`)
    }   
}
var ride1=new uber(8)
console.log(ride1.go_seden())
console.log(ride1.Auto())
console.log(ride1.Uber_go())
console.log(ride1.Uber_XL())

//4.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie{
    constructor(title,studio,rating="PG13"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
    getPG(title,rating="PG13")
    {
        if(this.rating=="PG13")
        {
            return (this.title)
        }     
    }
}    
var movie1=new Movie("dark knigth","DC","PG13")
var movie2=new Movie("IRON MAN","MARVEL","PG13")
var movie3=new Movie("DEADPOOL","DC")
var movie4=new Movie("CONJURING","GHOST","R")
var movie5=new Movie("Casino Royale","Eon Productions","PG13")
var movies=[]
var result=[]
movies.push(movie1.getPG())
movies.push(movie2.getPG())
movies.push(movie3.getPG())
movies.push(movie4.getPG())
movies.push(movie5.getPG())
for(i=0;i<=movies.length;i++)
{
    if(movies[i]!=undefined)
    {
        result.push(movies[i])
    }
}
console.log(result)