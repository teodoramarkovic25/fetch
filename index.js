class Student{
    constructor(name,address,phone,course){
        this.name=name;
        this.address=address;
        this.phone=phone;
        this.course=course;

    }
    getInfo(){
        return "Name: " + this.name + "\n"
        + "Address:" + this.address+"\n"
        + "Phone:" + this.phone+"\n"
        +"Course:" + this.course+"\n"
    }
}
var student1= new Student("Maja", "Vojvode M", 38765498312, "JavaScript");
var student2= new Student("Nikola", "Vojvode B", 38765913322, "Java");
var student3= new Student("MArko", "Nikole Tesle", 387562412, "React");
console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());



