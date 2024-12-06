import './App.css'
import Profile from './components/Profile'
import profile from "./components/profile.json"

function App() {
  return (
    <>
      <Profile
      name={profile.username}
        tag={profile.tag}
        location={profile.location}
        image={profile.avatar}
        stats={profile.stats}/>
    </>
  )
}

export default App
