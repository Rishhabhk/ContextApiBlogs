import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import Pagination from './components/Pagination';

function App() {

  const {fetchData} = useContext(AppContext);

  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div className="App">
      <Header/>
      <PostContainer/>
      <Pagination/>
    </div>
  );
}

export default App;
