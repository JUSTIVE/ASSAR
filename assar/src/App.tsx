import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainContent } from './StyledObj';

const App = () => {
  return (
    <div className="App">
      <MainContent >
        <p>현대의 사용자 인터페이스들은 아이콘이 있는 버튼을 이용하여 특정 상태와 해당 버튼의 동작을 동시에 나타내곤 합니다.<br />
          그러나, 모든 아이콘이 있는 버튼들이 상태를 가지는 것이 아니기 때문에, 종종 특정한 상황에서 사용자에게 직관적이지 않을 수 있습니다.</p>
      </MainContent>
    </div>
  );
}

export default App;
