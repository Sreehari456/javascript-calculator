function calculate()
{
    var firstnumber = parseFloat(document.getElementById('n1').value);
    var secondnumber = parseFloat(document.getElementById('n2').value);
    var oper = document.getElementById('operators').value;
    if(oper==='+')
    {
        document.getElementById('result').value= firstnumber + secondnumber;
    }
    if(oper==='-')
    {
        document.getElementById('result').value= firstnumber - secondnumber;
    }
    if(oper==='*')
    {
        document.getElementById('result').value= firstnumber * secondnumber;
    }
    if(oper==='/')
    {
        document.getElementById('result').value= firstnumber / secondnumber;
    }
}