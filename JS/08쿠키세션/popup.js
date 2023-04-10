function createCookie() {

    var date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    document.cookie = "pop = no; expires=" + date.toUTCString();
    window.close();
}

function getCookie() {


    var cookArr = document.cookie.split("; ");
    for (var i in cookArr) {
        if (cookArr[i].indexOf("pop")!=-1) {
            return "true";
        }
    }
}