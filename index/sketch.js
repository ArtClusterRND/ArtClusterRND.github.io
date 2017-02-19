var x = 1;


function setup() {
	createCanvas(2000,1000);
    
    rectMode(CENTER);

}

function draw() {
    strokeWeight(0.25);
    stroke(0);
    
    x+=73;
    if(x<width || x<height){
       
       for(var i=1; i<width; i*=1.003){
        var rndQ = frameCount%(1-i);   
        var rndw = random((sin(frameCount)*0.1)*rndQ);   
        rect(x+rndw,i-rndw,70,40);
        rect(i-rndw,x+rndw,40,70);
        
        //rect(width-x,i,rndw,rndw);
        //rect(width,height-x,rndw,rndw);
       } 
        
   }else{
        x=1;
        background(255);
    //   rect(0,200,45,70)
    }
    
}