//========REACT==============>
import React from "react";
import ReactDOM from "react-dom";
//=========SELF================>
import App from "./components/Layout";

let contacts = [{
  id: 1,
  name: 'Suzon',
  phone: '555 555 5555'
},
{
  id: 2,
  name: 'Joynal',
  phone: '555 556 5555'
},
{
  id: 3,
  name: 'Pritom',
  phone: '555 557 5555'
},
{
  id: 4,
  name: 'Ashik',
  phone: '555 558 5555'
},
{
  id: 5,
  name: 'Peash',
  phone: '555 559 5555'
}
]
ReactDOM.render(
    <App contacts = {contacts} />,
    document.getElementById("content")
);
