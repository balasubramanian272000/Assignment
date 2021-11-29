var UserIdAutoIncrement = 1;
var NewUserNameStatus = false;
var NewUserAgeStatus = false;
var NewUserPhoneNumberStatus = false;
var CurrentUserId;
var CurrentUserName;
var User = /** @class */ (function () {
    function User(paramUserName, paramUserAge, paramUserPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "C" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.UserAge = paramUserAge;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
    return User;
}());
var lang = /** @class */ (function () {
    function lang(paramLanguageType, paramTakingHours) {
        this.LanguageType = paramLanguageType;
        this.TakingHours = paramTakingHours;
    }
    return lang;
}());
var UserArrayList = new Array();
UserArrayList.push(new User("Bala", 23, 8825914020));
UserArrayList.push(new User("Thilee", 23, 9600474537));
function newUserPage() {
    var homePage = document.getElementById('homePage');
    var newUserPage = document.getElementById('newUserPage');
    homePage.style.display = "none";
    newUserPage.style.display = "block";
}
function AddDetails() {
    var newUserName = document.getElementById('newUserName').value;
    var newUserAge = document.getElementById('newUserAge').value;
    var newUserPhoneNumber = document.getElementById('newUserPhoneNumber').value;
    UserArrayList.push(new User(newUserName, +newUserAge, +newUserPhoneNumber));
    alert("Your registration is completed");
    var user = new User(newUserName, +newUserAge, +newUserPhoneNumber);
    UserArrayList.push(user);
    alert("Your user id is " + user.UserId);
    var homePage = document.getElementById('homePage');
    var newUserPage = document.getElementById('newUserPage');
    homePage.style.display = "block";
    newUserPage.style.display = "none";
}
function logIn() {
    var homePage = document.getElementById('homePage');
    var logIn = document.getElementById('logIn');
    homePage.style.display = "none";
    logIn.style.display = "block";
}
function signIn() {
    var ExistUserId = document.getElementById('existingUserId').value;
    for (var i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].UserId == ExistUserId) {
            CurrentUserId = UserArrayList[i].UserId;
            CurrentUserName = UserArrayList[i].UserName;
        }
    }
    if (CurrentUserId) {
        alert("Hello," + CurrentUserName);
        var logIn_1 = document.getElementById('logIn');
        var option = document.getElementById('option');
        logIn_1.style.display = "none";
        option.style.display = "block";
    }
    else {
        alert("Please enter valid user Id !");
        var logIn_2 = document.getElementById('logIn');
        logIn_2.style.display = "block";
    }
}
function available() {
    var option = document.getElementById('option');
    var available = document.getElementById('available');
    option.style.display = "none";
    available.style.display = "block";
}
function cLanguage() {
    var Cnum = 30;
    alert("You should have " + Cnum + " days for this Course Completion");
    var option = document.getElementById('option');
    var available = document.getElementById('available');
    option.style.display = "block";
    available.style.display = "none";
    var Clang = new Clang(Cnum);
    LangType.push(Clang);
}
function csharpLanguage() {
    var Csharpnum = 60;
    alert("You should have " + Csharpnum + " days for this Course Completion");
    var option = document.getElementById('option');
    var available = document.getElementById('available');
    option.style.display = "block";
    available.style.display = "none";
    var Cslang = new Cslang(Csharpnum);
    LangType.push(Cslang);
}
function javaLanguage() {
    var javanum = 90;
    alert("You should have " + javanum + " days for this Course Completion");
    var option = document.getElementById('option');
    var available = document.getElementById('available');
    option.style.display = "block";
    available.style.display = "none";
    var Jlang = new Jlang(javanum);
    LangType.push(Jlang);
}
function pythonLanguage() {
    var pythonnum = 20;
    alert("You should have " + pythonnum + " days for this Course Completion");
    var option = document.getElementById('option');
    var available = document.getElementById('available');
    option.style.display = "block";
    available.style.display = "none";
    var Plang = new Plang(pythonnum);
    LangType.push(Plang);
}
var LangType = new Array();
LangType.push(new lang("CLanguage", 0));
function enrolledCourse() {
    var option = document.getElementById('option');
    var enrolledCourse = document.getElementById('enrolledCourse');
    option.style.display = "none";
    enrolledCourse.style.display = "block";
}
function enroll() {
    var enrolledCourse = document.getElementById('enrolledCourse');
    var enroll = document.getElementById('enroll');
    enrolledCourse.style.display = "none";
    enroll.style.display = "block";
    for (var i = 0; i < LangType.length; i++) {
        var sum = sum + LangType[i];
    }
    alert("You have " + sum + "days to complete your courses");
}
function home() {
    var enrolledCourse = document.getElementById('enrolledCourse');
    var homePage = document.getElementById('homePage');
    enrolledCourse.style.display = "none";
    homePage.style.display = "block";
}
