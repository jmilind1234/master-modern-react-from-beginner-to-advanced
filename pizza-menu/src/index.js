import React from "react";
import ReactDOM from 'react-dom/client';


function App(){
    return <div><Header/><Menu/><Footer/></div>
}

function Pizza(){
    return <div>
        <img src="images/prosciutto.jpg"/>
        <h2>Pizza Prosciutto</h2>
    <p>Tomato, mozarella, ham, aragula, and burrata cheese</p></div>
}

function Header(){
    return <h1>Fast React Pizza Co.</h1>
}

function Menu(){
    return(
        <div>
            <h2>Our menu</h2>
            <Pizza/>
            <Pizza/>
            <Pizza/>
        </div>
    )
}

function Footer(){
    const hour = new Date().getHours();
    console.log(hour);
    return (<footer>{new Date().toLocaleDateString()} We're currently open</footer>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App/></React.StrictMode>);