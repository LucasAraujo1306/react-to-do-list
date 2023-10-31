import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as C from './App.styles'
import {Item} from './types/Item'
import { ListItem } from './components/ListItem';
import {AddItemArea} from './components/AddItemArea'

const App = () => {
  const [list,setList] = useState<Item[]>([
    {
      id: 'c7f6a4ea-8b1c-40c3-a5b2-7d1e8714ff07',
      name: 'Item 1',
      done: false
    },
    {
      id: '76a2b8bd-6c2f-4a86-8f9a-8790f8a345a2',
      name: 'Item 2',
      done: true
    },
    {
      id: '09c4811e-5cc3-4b84-9d3c-55e255e3e5e1',
      name: 'Item 3',
      done: false
    },
    {
      id: '9c1be2fe-6d5e-4c2e-8e68-0f6e7218644e',
      name: 'Item 4',
      done: true
    },
    {
      id: 'bb13c7b6-ea04-45b1-96b3-ecfe056da071',
      name: 'Item 5',
      done: false
    },
    {
      id: '37e7fb1d-2f8f-4df3-9822-758ec2d4c3db',
      name: 'Item 6',
      done: true
    }
  ]);

  const handleAddTask = (taskName:string)=>{
    const newList = [...list];
    newList.push({
      id:uuidv4(),
      name:taskName,
      done:false
    });
    setList(newList);
  }

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header> 
            Lista de Tarefas
          </C.Header>

          {/* Área de adicionar nova tarefa */}
          <AddItemArea onEnter={handleAddTask}/>
       
          {/* Lista de tarefas */}
          {list.map((item,index)=>(
              <ListItem key={index} item={item}/>
          ))}
        </C.Area>
      </C.Container>
    </div>
  )
}

export default App;

