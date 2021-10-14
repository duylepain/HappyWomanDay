const inputName = document.querySelector('#name');
const loginForm = document.querySelector('.login-form');
const btnLogin = document.querySelector('.btn__login');
const messErr = document.querySelector('.mess-err');
const checkName = document.querySelector('.checkName');
const statusNode = document.querySelector('.status');
const contentContainer =  document.querySelector('.content-container');
var listName = ['Hương','Linh','Huyền'];
document.querySelector('audio').volume = 0.1;
async function btnClick(){
    btnLogin.addEventListener('click',function(){
        for(var i = 0 ; i < listName.length; i++){
            if(listName[i] === inputName.value){
                checkName.style.visibility = "hidden";
                statusNode.style.display = 'block';
                loginForm.style.display = 'none';
                break;
            }
        }
    });
}
inputName.addEventListener('change', function(){
    for(var i = 0 ; i < listName.length; i++){
        if(listName[i] !== inputName.value){
            messErr.innerHTML = `Tên không được được xác thực !`;
            checkName.style.visibility = "visible"
        }else{
            btnClick();
//             showMess();
            
        }
    }
});

// async function showMess(){
//     statusNode.addEventListener('click', function(){
//         statusNode.style.display = 'none';
//         contentContainer.classList.add('showFlex')
//     })
// }
