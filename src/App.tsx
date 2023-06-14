import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Action, Colors, Create, HomeContainer, StatusModel } from './styles/home';
import { CaretRight } from '@phosphor-icons/react';



function App() {
  const degrade = ["#FF0000", "#FF6600", "#FFCC00", "#33CCFF", "#0000FF"];
  const [status, setStatus] = useState<string>()
  const [statusColor, setStatusColor] = useState<string>()

  const [statusList, setStatusList] = useState<any[]>([])

  function CreateStatus() {
    let newStatus =
    {
      label: status,
      color: statusColor
    }


    const statusNew = [...statusList, newStatus]
    setStatusList(statusNew)
    console.log(status)
  }

  const CheckboxWithColor = ({ color }: any) => {
    const checkboxStyle = {
      backgroundColor: color,
      width: '20px',
      height: '20px',
      marginRight: '5px',
    };

  }

  const inputStyle = {
    all: 'unset',
    border: '1px solid black',
    width: '20px',
    height: '20px',
    display: 'inline-block',
  };

  return (
    <HomeContainer >
      <header>Gerenciamento <CaretRight size={20} /><span>Status</span></header>
      <h1>Gerenciamento de status</h1>

      <div>
        <Action>
          <div>
            <p>Nome do status</p>
            <input type="text" placeholder='Ex: Aprovado' onChange={(e) => setStatus(e.target.value)} />
          </div>
          <div>
            <p>Prévia</p>
            <StatusModel color={statusColor}>
              <p>{status}</p>
            </StatusModel>
          </div>
        </Action>
        <div>
          {degrade.map((color, index) => (
            <Colors color={color} onClick={() => setStatusColor(color)}>
              
            </Colors>
          ))}
        </div>

      </div>
      
      {statusList.map((status, index) => (
        <StatusModel key={index} color={status.color}>
          <p>{status.label}</p>
        </StatusModel>
      ))}

      <Create onClick={() => CreateStatus()}>Criar Status</Create>
    </HomeContainer >
  );
}

export default App;
