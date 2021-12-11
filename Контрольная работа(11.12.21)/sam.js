hod=1
function  f1 ()
  { 
    //получение значения в кнопке
    button =document.getElementById("id_1").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        //записываем значение в кнопке
        document.getElementById("id_1").innerHTML  = permennaya;
        hod=hod+1;
    }
    //вызов функции с проверкой выигрыша
    prav();     
}
function  f2 ()
  {     
    button =document.getElementById("id_2").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_2").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f3 ()
  {     
    button =document.getElementById("id_3").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_3").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f4 ()
  {     
    button =document.getElementById("id_4").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_4").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f5 ()
  {     
    button =document.getElementById("id_5").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_5").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f6 ()
  {     
    button =document.getElementById("id_6").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_6").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f7 ()
  {     
    button =document.getElementById("id_7").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_7").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f8 ()
  {     
    button =document.getElementById("id_8").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_8").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  f9 ()
  {     
    button =document.getElementById("id_9").innerHTML;
    if(button === "") 
    {
        if (hod%2==1){
            permennaya = "X";
        }
        else{
            permennaya = "0";
        }
        document.getElementById("id_9").innerHTML  = permennaya;
        hod=hod+1;
    }
    prav();     
}
function  prav()
{
    //запись значений всех ячеек поля в переменные
    a1 =document.getElementById("id_1").innerHTML;
    a2 =document.getElementById("id_2").innerHTML;
    a3 =document.getElementById("id_3").innerHTML;
    b1 =document.getElementById("id_4").innerHTML;
    b2 =document.getElementById("id_5").innerHTML;
    b3 =document.getElementById("id_6").innerHTML;
    c1 =document.getElementById("id_7").innerHTML;
    c2 =document.getElementById("id_8").innerHTML;
    c3 =document.getElementById("id_9").innerHTML;
    el=[[a1,a2,a3],[b1,b2,b3],[c1,c2,c3]];
    //правила игры
    if (el[0][0]==="X" && el[0][1]==="X" && el[0][2]==="X"){
        alert('Выиграл X!');
        //обновление страницы  
        location.reload();
    }
    else if (el[0][0]==="0" && el[0][1]==="0" && el[0][2]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[1][0]==="X" && el[1][1]==="X" && el[1][2]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[1][0]==="0" && el[1][1]==="0" && el[1][2]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[2][0]==="X" && el[2][1]==="X" && el[2][2]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[2][0]==="0" && el[2][1]==="0" && el[2][2]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[0][0]==="X" && el[1][0]==="X" && el[2][0]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[0][0]==="0" && el[1][0]==="0" && el[2][0]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[0][1]==="X" && el[1][1]==="X" && el[2][1]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[0][1]==="0" && el[1][1]==="0" && el[2][1]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[0][2]==="X" && el[1][2]==="X" && el[2][2]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[0][2]==="0" && el[1][2]==="0" && el[2][2]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[0][0]==="X" && el[1][1]==="X" && el[2][2]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[0][0]==="0" && el[1][1]==="0" && el[2][2]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (el[0][2]==="X" && el[1][1]==="X" && el[2][0]==="X"){
        alert('Выиграл X!');  
        location.reload();
    }
    else if (el[0][2]==="0" && el[1][1]==="0" && el[2][0]==="0"){
        alert('Выиграл 0!');  
        location.reload();
    }
    else if (hod===10){
        alert('Ничья!');  
        location.reload(); 
    }
}