const country=[{
    countryname:'Sweden',
    capital:'Stockholm',
    population:'10,242,141',
    flag:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg'
},
{
    countryname:'Finland',
    capital:'Helsinki',
    population:'5,560,243',
    flag:''
},
{
    countryname:'Chile',
    capital:'Santiago',
    population:'19,488,539',
    flag:'./flags/Flag_of_Chile.svg'
},
]
function getCountryInfo(){
    const info= document.getElementById('info');
    const newCountryList=document.createElement('ul');
    const newCountryListitem=document.createElement('li');
    const newCountryDiv=document.createElement('div');
    const newFlagImg=document.createElement('img');
    const newCountryName=document.createElement('h3');
    const newCountryCapital=document.createElement('h3');
    const newCountryPopulation=document.createElement('h3');
    newCountryDiv.classList='country-container';
    newFlagImg.src=country[2].flag;
    info.appendChild(newCountryList);
    newCountryList.appendChild(newCountryListitem);
    newCountryListitem.appendChild(newCountryDiv);
    newCountryDiv.appendChild(newFlagImg);
    newCountryDiv.appendChild(newCountryName);
    newCountryDiv.appendChild(newCountryCapital);
    newCountryDiv.appendChild(newCountryPopulation);
    newCountryName.innerHTML=country[2].countryname;
    newCountryCapital.innerHTML=country[2].capital;
    newCountryPopulation.innerHTML=country[2].population;

}
