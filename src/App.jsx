import Counter from './Counter.jsx';
import Users from './Users.jsx';
import Friends from './Friends.jsx';
import Posts from './Posts.jsx';
import Players from './Players.jsx';
import Batsman from './Batsman.jsx';
import CounterPersonal from './CounterPersonal.jsx';
import ToogleText from './ToogleText.jsx';
import UsersTwo from './UsersTwo.jsx';
import './App.css'
import { Suspense } from 'react';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick() {
    alert("I am clicked.");
  }

  const handleClick3 = () => {
    alert("Clicked 3rd");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Get started</h3>

      <Suspense fallback={<h3>Loading...</h3>}>
        <CounterPersonal fetchUsers={fetchUsers}></CounterPersonal>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <ToogleText fetchUsers={fetchUsers}></ToogleText>
      </Suspense>
      <Suspense fallback={<h3>Loading...</h3>}>
        <UsersTwo fetchUsers={fetchUsers}></UsersTwo>
      </Suspense>

      <Players></Players>

      <Suspense fallback={<h4>Posts are Loading...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends Are Cumming for treats...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() { alert("clicked 2nd") }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("click 4th")}>Click Me 4</button>

      <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  )
}

export default App
