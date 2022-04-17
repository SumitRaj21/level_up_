const Superheroes=['Batman','Superman','Spiderman','Aquaman'];
const classList=['one','two','three','four'];
for(let i=0;i<Superheroes.length;i++)
{
    const x=document.createElement('h1');
    x.innerText=Superheroes[i];
    x.classList.add('myClass1',classList[i] );
    const y=document.getElementById('raj');
    y.appendChild(x);
};
document.getElementById("Raj").innerText="fidg";
// for(let i = 0; i<names.length; i++){
//         const newElement = document.createElement('p')
//         newElement.innerText = names[i]
//         newElement.classList.add('myClass1')
//         const target = document.querySelector('div')
//         target.appendChild(newElement)
//     }
    