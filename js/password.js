
function gate(){
    var UserInput = prompt('パスワードを入力してください');
    location.href = "./" + UserInput + ".html"; 
    if( UserInput = null ) {
        location.href = "./" + index + ".html";
     }
}
    

