var nombre= new Stack();
var apellido=new Stack();
var nombres=[];

function Stack(){

  var nom=[];

    this.push = function(element){
    nom.push(element);
    };
    this.pop = function(){
      return nom.pop();
    };
    this.peek = function(){
      return nom[nom.length-1];
    };
    this.isEmpty = function(){
      return nom.length==0;
    };
    this.size = function(){
      return nom.length;
    };
  this.print = function(){
    console.log(nom);
  };
}

nombre.push("Alma");
nombre.push("Lorena");
nombre.push("Emma");
nombre.push("Loreley");
nombre.push("Ana");
apellido.push("López");
apellido.push("Mendoza");
apellido.push("Castelán");
apellido.push("Solano");
apellido.push("Pinzón");

nombre.print();
apellido.print();


for(var i =0;i<8;i++){

  nombres.push(nombre.pop() + apellido.pop());

}
console.log(nombres);
