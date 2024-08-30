const a=document.querySelector('.a');

a.innerText="ghj";

function MyButton() {
    return (
    <p>I'm a button</p>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcxxome to my app</h1>
        <MyButton />
      </div>
    );
  }
  

console.log('hello')