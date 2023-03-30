
import Avatar from './component/Avatar'
import './App.css'

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

const homer = {
  image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  firstName: "Homer",
  lastName: "Simpson"
};
function App() {

  return (
    <div>
      <div>
        <Avatar image={homer.image} firstName={homer.firstName} lastName={homer.lastName} />
        <Avatar image={bart.image} firstName={bart.firstName} lastName={bart.lastName} />
      </div>

    </div>
  )
}

export default App
