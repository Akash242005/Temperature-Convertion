const temp = document.getElementById("temp");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let num;
function convert()
{
    if(toFahrenheit.checked)
    {
        num = Number(temp.value);
        num = ((num*9)/5) + 32;
        result.textContent = num + "°F";
    }
    else if(toCelsius.checked)
    {
        num = Number(temp.value);
        num = (num-32)*(5/9);
        result.textContent = num + "°C";
    }
    else
    {
        result.textContent = `Select an Unit`;
    }
}
