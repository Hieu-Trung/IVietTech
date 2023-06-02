import './App.css';
import { useState } from 'react';
// Bai tap 1
// import Card from './Baitap1/Card';

// Bài Tập 2
// import Card from './BaiTap2/Card';

// Bài Tập Task
// import Header from './BaiTapTask/Header';
// import TabBar from './BaiTapTask/TabBar';
// import Content from './BaiTapTask/Content';

// Bài tập truyền props qua nhiều component
// import BaiTap from './PropsComponents/BaiTap';

// bài tập state sữ dụng interval thay vì dùng event
// import State from './StateInterval/State';

// Bai tap List
// import List from './ListRendery/List';

// BT Lifecycle
// import Lifecycle from './Lifecycle/Lifecycle';

// BT fetch Api
// import FetchApi from './FetchApi/FetchApi';
// import FetchListRendery from './FetchApi/FetchListRendery';

// BT todo
// import TodoApp from './BTTodo/TodoApp';

// BT slide menu
import SlideMenu from './SlideMenu/SlideMenu';
function App(props) {
  // Bai tap List
  // const colors = ["red", "green", "yellow", "black", "blue"]

  // Bài Tập Task
  // const [isCreate, setIsCreate] = useState(false)

  //BT lifecycle
  // const [isShow, setIsShow] = useState(true)
  // const handleToggle = () => {
  //   setIsShow(!isShow)
  // }
  return (

    // Bai tap 1
    // <div className="App">
    // {/* dùng để truyền children content nằm giữa nội dung thẻ đống và mở */}
    // <Card>#000000</Card>
    // </div>

    // Bài Tập 2
    // <div className="App">
    //   <Card>red</Card>
    // </div>

    // Bài Tập Task
    // <div>
    //   <Header setIsCreate={setIsCreate}/>
    //   <div className='task'>
    //     <TabBar />
    //     <Content isCreate={isCreate} setIsCreate={setIsCreate}/>
    //   </div>
    // </div>

    // Bài tập truyền props qua nhiều component
    // <div>
    //   <BaiTap>Truyền Prop từ BT đến BTcon qua BT chau</BaiTap>
    // </div>

    // bài tập state sữ dụng interval thay vì dùng event
    // <State />

    // Bai tap List
    // return colors.map((color, index) =>{
    //   console.log(color, index);
    //   return(
    //     <List key={index + color} bgColor={color}/>

    // BT lifecycle
    // <div>
    //   <button onClick={handleToggle}>Clear</button>
    //   {isShow && <Lifecycle />}
    // </div>

    //BT fetch Api
    // <div>
    //   <FetchApi/>
    //   <FetchListRendery/>
    // </div>

    // BT todo
    // <div>
    //   <TodoApp />
    // </div>

    // BT slide menu
    <div>
      <SlideMenu />
    </div>
  );
  // })
}

export default App;
