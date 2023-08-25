import PostsList from "./features/posts/PostsList";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <div className="App">
      <UsersList/>
      <PostsList />
    </div>
  );
}

export default App;
