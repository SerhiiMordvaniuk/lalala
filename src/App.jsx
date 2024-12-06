import './App.css'
import Profile from './components/Profile/Profile'
import profile from "./components/Profile/profile.json"
import friends from './components/FriendList/friends.json'
import FiendsList from './components/FriendList/FriendList'
import transactions from "./components/TransactionHistory/transactions.json"
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

function App() {
  return (
    <>
      <Profile
      name={profile.username}
        tag={profile.tag}
        location={profile.location}
        image={profile.avatar}
        stats={profile.stats} />
      <FiendsList props={friends} />
      <TransactionHistory/>
    </>
  )
}

export default App
