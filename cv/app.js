var left=document.getElementById("left");
var right=document.getElementById("right");
var div1=document.getElementById("div1");
var div2=document.getElementById("div2");
var obj={
   profile_src:"pic.jpg",
    name:"Muhammad Usama",
    
    profession:"Back-End Developer",
   
    img_src:["contact.png","email.png","location.png","web.png"],
    
    ps_txt:["0312-8751656","uaslam345@gmail.com","Baldia Town,Karachi,Pakistan","https://www.myproject-3eae6.firebaseapp.com"],
   
    objective_p:"To get the Job of Back-end Developer and use the leadership skills to run the organization",
    
    education_details:"SIR SYED UN  IVERSITY OF ENGINEERING & TECHNOLOGY<br> - Bachelor Of Science In Computer System Engineering<br><br>INTERMEDIATE<br> - Saleem Nawaz Fazaia College PAF BASE MASROOR<br><br>MATRICULATION<br> - Army Public School & College System BASE FAISAL",
    
    qualification_details:"WEB DEVELOPER<br> - BACK-END Developer Using HTML5, CSS3, JAVASCRIPT, BOOTSTRAP<br><br>JAVA (Object Oriented Programming)<br> - Learning Back-End Programming In JAVA",
    
    projects_details:"- SAYLANI CLONE<br> - School Website<br> - TODO APP<br> - JavaScript Calculator",
    
    aims_details:"Coding is my passion. Want to be the best BackEnd Developer.I am Learning Mobile And Web Development<br>and Recently Start Learning JAVA. I Want To make a team of best developer that can cope up with any problem<br>and ability to troubleshoot any problem"
}

var img=document.createElement("IMG");
var profileName=document.createElement("P");
var profileTxt=document.createTextNode(obj.name);
var profession=document.createElement("P");
var professionTxt=document.createTextNode(obj.profession);
div1.setAttribute("class","left_div1");
div1.style.backgroundColor="rgb(38,106,155)";
img.setAttribute("src",obj.profile_src);
img.setAttribute("class","profilePic");
img.setAttribute("alt","Profile Pic");
div1.appendChild(img);

profileName.setAttribute("class","p_name");
profession.setAttribute("class","p_profession");
profileName.appendChild(profileTxt);
profession.appendChild(professionTxt);
div1.appendChild(profileName);
div1.appendChild(profession);


div2.setAttribute("class","left_div2");

var obj_p=document.getElementById("obj_p");
obj_p.innerHTML=obj.objective_p;
obj_p.setAttribute("class","obj_pstyle");

var edu_ul=document.getElementById("div3_ul");
var edu_li = edu_ul.getElementsByTagName("li");
edu_li[1].firstChild.innerHTML=obj.education_details;
edu_li[3].firstChild.innerHTML=obj.qualification_details;
edu_li[5].firstChild.innerHTML=obj.projects_details;
edu_li[7].firstChild.innerHTML=obj.aims_details;
console.log(edu_li[1]);
var ps=div2.getElementsByTagName("p");
for(var i=0;i<4;i++){
    ps[i].innerHTML=obj.ps_txt[i];
}
