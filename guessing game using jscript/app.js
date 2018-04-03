    var a=prompt("Enter Your Word");
    var dash="";
    var letter="";
    var letterPart="";
    var lives=0;
    for(var i=0;i<a.length;i++){
        dash=dash+"_"+" ";
    }
    alert("Total No Of Letters: "+dash);
    alert("You have three lives left.");
	alert("Enter 1 Letter at a time.")
    for(var i=1;i<a.length+2;i++)
    {
        var bol=false;
        var number=0;
        letter=prompt("Your turn : "+i);
        for(var j=0;j<a.length;j++){
            letterPart=a.charAt(j);
        if(letter==letterPart){
            number=++number;
            bol=true;
        }
        }
        alert("Letter : "+letter+"   Present:  "+number);
        if(bol==false){
            lives=lives+1;
            alert("You have "+(3-lives)+" lives remaining.")
        }
        if(lives==3){
            alert("Sorry You lost!!!  Answer is "+ a);
            break;
        }
    }