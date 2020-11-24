
var database,user,bgimg
function preload()
{
bgimg=loadImage("rimg.png");
}
function setup() {
createCanvas(600,800 );
dn=new Inputs();
//user=new Users();


}
function draw(){
    dn.display();
}