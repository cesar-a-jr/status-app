import { useState } from "react";
import {
  Action,
  Colors,
  Create,
  HomeContainer,
  Inputs,
  InputsEdit,
  ListColors,
  ListStatus,
  Save,
  StatusModel,
} from "./styles/home";
import { CaretRight, CheckCircle, Trash, X } from "@phosphor-icons/react";
import * as Popover from "@radix-ui/react-popover";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const degrade = [
    "#009BFF",
    "#0046FF",
    "#6356EE",
    "#8850E1",
    "#8741B1",
    "#BF6CCF",
    "#CA5E97",
    "#ED92A8",
    "#B63954",
    "#CA5646",
    "#DF9655",
    "#EBD067",
    "#A8C74A",
    "#92CC82",
    "#00FFC4",
    "#1E1E1E",
    "#8D969D",
    "#D2D2D2",
    "#e8e8e8",
    "#f4f4f4",
  ];
  const [status, setStatus] = useState<string>();
  const [statusColor, setStatusColor] = useState<string>();
  const [colorSelected, setColorSelected] = useState();
  const [statusColorEdit, setStatusColorEdit] = useState<string>();
  const [statusLabelEdit, setStatusLabelEdit] = useState<string>();

  const [statusList, setStatusList] = useState<any[]>([]);

  function CreateStatus() {
    let newStatus = {
      label: status,
      color: statusColor,
    };
    const statusNew = [...statusList, newStatus];
    setStatusList(statusNew);
    toast.success("Status adicionado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function deleteStatus(index: number) {
    const updatedStatusList = [...statusList];
    updatedStatusList.splice(index, 1);
    setStatusList(updatedStatusList);
  }

  function SetColor(color: any) {
    setStatusColor(color);
    setColorSelected(color);
  }

  const saveChange = (index: any, color: string) => {
    const updatedStatusList = [...statusList];
    updatedStatusList[index] = {
      color: color,
      label: statusLabelEdit
    };
    setStatusList(updatedStatusList);
  };

  return (
    <HomeContainer>
      <header>
        Gerenciamento <CaretRight size={20} />
        <span>Status</span>
      </header>
      <h1>Gerenciamento de status</h1>
      <ToastContainer />
      <div>
        <Action>
          <div>
            <p>Nome do status</p>
            <Inputs
              type="text"
              placeholder="Ex: Aprovado"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          {status !== undefined && statusColor !== undefined && (
            <div>
              <p>Prévia</p>
              <StatusModel color={statusColor}>
                <p>{status}</p>
              </StatusModel>
            </div>
          )}
        </Action>
        <ListColors>
          {degrade.map((color, index) => (
            <Colors color={color} onClick={() => SetColor(color)}>
              {color === colorSelected && (
                <p>
                  <CheckCircle size={24} />
                </p>
              )}
            </Colors>
          ))}
        </ListColors>
      </div>
      <ListStatus>
        {statusList.map((status, index) => (
          <Popover.Root>
            <Popover.Trigger asChild>
              <StatusModel key={index} color={status.color}>
                <p>{status.label}</p>
              </StatusModel>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="PopoverContent" sideOffset={5}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10}}
                >
                  <button onClick={() => deleteStatus(index)}><Trash size={24} /></button>
                    <label className="Label" htmlFor="label">
                      Label
                    </label>
                    <InputsEdit
                      className="Input"
                      defaultValue={status.label}
                      id="label"
                      onChange={(e) => setStatusLabelEdit(e.target.value)}
                    />
                    <Save onClick={()=>saveChange(index, status.color)}>Salvar</Save>
                </div>
                <Popover.Close className="PopoverClose" aria-label="Close">
                  <X size={32} />
                </Popover.Close>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        ))}
      </ListStatus>
      <Create onClick={() => CreateStatus()}>Criar Status</Create>
    </HomeContainer>
  );
}

export default App;
