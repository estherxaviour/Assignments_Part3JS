


function Car(make,model,year){
this.make = make;
this.model = model;
this.year = year;
this.display = function() {
	console.log(this.make);
	console.log(this.model);
	console.log(this.year);
     }
}
 var car1 = new Car("Abc","def",2002);
 var car2 = new Car("xtz","sdf",2000);
 car1.display();
 car2.display();
	
