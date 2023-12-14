import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import Navigation from './Compononts/Navigation/Navigation'
import Dashboard from './Compononts/Dashboard/DashBoard';
import Income from './Compononts/Income';
import Expenses from './Compononts/Expense/Expenses';
import { useGlobalContext } from './Context/GlobalContext';
import { MainLayout } from './Styles/LayoutS';
function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }


  return (
    <AppStyled className="App">
      
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }`;

export default App;
