let UserIdAutoIncrement = 1;
let NewUserNameStatus = false;
let NewUserAgeStatus = false;
let NewUserPhoneNumberStatus = false;

let CurrentUserId: string;
let CurrentUserName: string;


class User {

    UserId: string;
    UserName: string;
    UserAge: number;
    UserPhoneNumber: number;

    constructor(paramUserName: string, paramUserAge: number, paramUserPhoneNumber: number) {

        UserIdAutoIncrement++;

        this.UserId = "C" + UserIdAutoIncrement.toString();

        this.UserName = paramUserName;
        this.UserAge = paramUserAge;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
}

class lang{
   LanguageType : string;
   TakingHours : number;

constructor(paramLanguageType : string, paramTakingHours : number){

    this.LanguageType = paramLanguageType;
    this.TakingHours = paramTakingHours;

}
}

let UserArrayList: Array<User> = new Array<User>();

UserArrayList.push(new User("Bala", 23, 8825914020));
UserArrayList.push(new User("Thilee", 23, 9600474537));

function newUserPage() {
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;

    homePage.style.display = "none";
    newUserPage.style.display = "block";
}

function AddDetails() {
        let newUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
        let newUserAge = (document.getElementById('newUserAge') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhoneNumber') as HTMLInputElement).value;

        UserArrayList.push(new User(newUserName, +newUserAge, +newUserPhoneNumber, ));

        alert("Your registration is completed");
        let user = new User(newUserName, +newUserAge,+newUserPhoneNumber);
        UserArrayList.push(user);

        alert("Your user id is " + user.UserId);

        let homePage = document.getElementById('homePage') as HTMLDivElement;
        let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    
        homePage.style.display = "block";
        newUserPage.style.display = "none";
}
function logIn(){

    let homePage = document.getElementById('homePage') as HTMLDivElement;

    let logIn = (document.getElementById('logIn') as HTMLDivElement);

    homePage.style.display = "none";
    logIn.style.display = "block";
}

function signIn(){


    let ExistUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;

    for(let i =0;i<UserArrayList.length;i++){

        if(UserArrayList[i].UserId == ExistUserId ){
                CurrentUserId = UserArrayList[i].UserId;
                CurrentUserName = UserArrayList[i].UserName;   
        }
    }
    if(CurrentUserId){
        alert("Hello," + CurrentUserName);
        let logIn = (document.getElementById('logIn') as HTMLDivElement);
        let option = document.getElementById('option') as HTMLDivElement;
        logIn.style.display = "none";  
        option.style.display = "block";
    }
    else{
        alert("Please enter valid user Id !");
        let logIn = (document.getElementById('logIn') as HTMLDivElement);
        logIn.style.display = "block";
    }
}

function available(){
    let option = document.getElementById('option') as HTMLDivElement;
    let available = document.getElementById('available') as HTMLDivElement;
    option.style.display = "none";
    available.style.display = "block";

}



function cLanguage(){
    var Cnum = 30;
    alert("You should have " + Cnum + " days for this Course Completion");
    let option = document.getElementById('option') as HTMLDivElement;
    let available = document.getElementById('available') as HTMLDivElement;
    option.style.display = "block";
    available.style.display = "none";
    var Clang = new Clang(Cnum);
    LangType.push(Clang);
    
}

function csharpLanguage(){
    var Csharpnum = 60;
    alert("You should have " + Csharpnum + " days for this Course Completion");
    let option = document.getElementById('option') as HTMLDivElement;
    let available = document.getElementById('available') as HTMLDivElement;
    option.style.display = "block";
    available.style.display = "none";
    var Cslang = new Cslang(Csharpnum);
    LangType.push(Cslang);
   
}


function javaLanguage(){
var javanum = 90;
alert("You should have " + javanum + " days for this Course Completion");
let option = document.getElementById('option') as HTMLDivElement;
let available = document.getElementById('available') as HTMLDivElement;
option.style.display = "block";
available.style.display = "none";
var Jlang = new Jlang(javanum);
LangType.push(Jlang);

}
function pythonLanguage(){
    var pythonnum = 20;
    alert("You should have " + pythonnum + " days for this Course Completion");
    let option = document.getElementById('option') as HTMLDivElement;
    let available = document.getElementById('available') as HTMLDivElement;
    option.style.display = "block";
    available.style.display = "none";
    var Plang = new Plang(pythonnum);
    LangType.push(Plang);
    }

    let LangType: Array<lang> = new Array<lang>();

LangType.push(new lang("CLanguage", 0 ));



    function enrolledCourse(){
        let option = document.getElementById('option') as HTMLDivElement;
        let enrolledCourse = document.getElementById('enrolledCourse') as HTMLDivElement;
        option.style.display = "none";
        enrolledCourse.style.display = "block"
    }

    function enroll(){
        let enrolledCourse = document.getElementById('enrolledCourse') as HTMLDivElement;
        let enroll = document.getElementById('enroll') as HTMLDivElement;
        enrolledCourse.style.display = "none";
        enroll.style.display = "block";
      for(var i =0;i<LangType.length;i++){

        var sum = sum + LangType[i];

      }

      alert("You have "+ sum + "days to complete your courses");

    }

    function home(){
        let enrolledCourse = document.getElementById('enrolledCourse') as HTMLDivElement;
        let homePage = document.getElementById('homePage') as HTMLDivElement;
        enrolledCourse.style.display = "none";
        homePage.style.display = "block";

    }