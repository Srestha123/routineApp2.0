class Inputs{
  constructor(){
    this.image=loadImage("rimg.png");
    this.name=createInput('name');
    this.wakeup=createInput('time');
    this.o1=createSelect();
    this.o1.option('AM');
    this.o1.option('PM');
    this.studyDuration=createSelect();
    this.studyDuration.option('less');
    this.studyDuration.option('1-3 hrs');
    this.studyDuration.option('4-6 hrs');
    this.studyDuration.option('6-10 hrs');
    this.studyDuration.option('more');
    this.studyDuration.selected('1-3 hrs');
    this.school=createSelect();
    this.school.option('3-5 hrs');
    this.school.option('6-8 hrs');
    this.school.option('more');
    this.school.selected('6-8 hrs');
    this.rest= createInput('duration');
    this.o2=createRadio();
    this.o2.option('hrs');
    this.o2.option('mins');
    this.tv=createSelect();
    this.tv.option('1-5 hrs');
    this.tv.option('more');
    this.tv.option('less');
    this.specialClass=createInput('duration');
    this.o3=createRadio();
    this.o3.option('hrs');
    this.o3.option('mins');
    this.hobby=createInput('duration');
    this.o4=createRadio();
    this.o4.option('hrs');
    this.o4.option('mins');
    this.play=createInput('duration');
    this.o5=createRadio();
    this.o5.option('hrs');
    this.o5.option('mins');
    this.miscellaneous=createInput('duration');
    this.o6=createRadio();
    this.o6.option('hrs');
    this.o6.option('mins');
    this.sleep=createSelect();
    this.sleep.option('select sleep hours');
    this.sleep.option('8-12 hrs');
    this.sleep.option('more');
    this.sleep.option('less');
    this.submit=createButton('SUBMIT');
  }
  display(){
    imageMode(CENTER);
    image(this.image,displayWidth/2,displayHeight/2,displayWidth,displayHeight+150);
    this.name.position(600,200);
   // this.name.style("color", "blue");  
    this.wakeup.position(600,250);
    var sleepop= this.sleep.value();
    
    if(sleepop==='8-12 hrs'){
      text("your sleep duration is perfect!",300,400)
      console.log(sleepop);
    }
    else if(sleepop==='more'){
      text("you need to sleep less",300,400);
      console.log(sleepop);
    }
    else if(sleepop==='less'){
      text("you need more sleep",300,400);
      console.log(sleepop);
    }
    this.o1.position(790,250);
    this.studyDuration.position(600,300);
    this.school.position(600,350);
    this.rest.position(600,400);
    this.o2.position(790,400);
    this.submit.position(700,790);
    fill("blue")
    text("name:",200,150);
    text("wake up time:",160,200);
    text("Study time(duration):",125,250);
    text("school duration:",150,300);
    text("rest duration:",165,350);
    text("T.V. time:",180,400);
    text("Special Class Duration:",105,450);
    text("Hobby:",190,500);
    text("play:",200,550);
    text("miscellaneous:",145,600);
    text("sleep time:",160,650);
    textSize(25);
    text("Routine App",300,30);
    this.tv.position(600,450);
    this.o3.position(790,500);
    this.hobby.position(600,550);
    this.o4.position(790,550);
    this.play.position(600,600);
    this.o5.position(790,600);
    this.miscellaneous.position(600,650);
    this.o6.position(790,650);
    this.sleep.position(600,700);
    this.specialClass.position(600,500);
    console.log("message");
    /*text("name:",displayWidth/4-100,displayHeight/5);
    text("name:",displayWidth/4-100,displayHeight/5);
    text("name:",displayWidth/4-100,displayHeight/5);*/
  /* var name=this.name.value();
  this.submit.mousePressed(()=>{
   user.update(name);
    console.log(name);
    gameState=1;
    })*/
    
  }
}