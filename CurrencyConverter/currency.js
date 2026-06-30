const currency=document.querySelector("input");
const currentcurrency=document.querySelector("#current");
const requiredcurrecy=document.querySelector("#required");
const search=document.querySelector(".search-btn");
const resultBox=document.querySelector(".result");
async function getValue(currencyname,currentcurrency,requiredcurrecy){
    if(currentcurrency==requiredcurrecy){
        resultBox.innerHTML=`
            <p>Current and Required Currency are same</p>
        `
    }
    else{
        const url=`https://api.frankfurter.dev/v1/latest?base=${currentcurrency}&symbols=${requiredcurrecy}`;
        try{
            const response=await fetch(url);
            const data=await response.json();
            if(!data.rates) throw new Error("Conversion failed");
            const requiredcurrecyrate=data.rates[requiredcurrecy];
            const result=currencyname*requiredcurrecyrate;
            resultBox.innerHTML=`
                <p>Current Currency: ${currencyname}</p>
                <p>Requrired Currency: ${requiredcurrecy}</p>
                <p>Converted Value: ${result}</p>
            `
        }
        catch(error){
            resultBox.innerHTML=`
                <p>Network Error.Please try again later.</p>
            `
        }
    }
}
search.addEventListener("click",()=>{
    const currencyname=currency.value;
    if(currencyname==""){
        resultBox.innerHTML=`
            <p>Enter Currency</p>
        `
    }
    else{
        getValue(currencyname,currentcurrency.value,requiredcurrecy.value);
    }
})
currency.addEventListener("keydown",(event)=>{
    if(event.key=="Enter") getValue(currency.value,currentcurrency.value,requiredcurrecy.value);
})
