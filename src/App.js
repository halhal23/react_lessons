import React from 'react';

// class App extends Component {
//   render() {
//     return <div><h2>Hello World halhal!!!!!</h2></div>
//   }
// }
const App = () => {
  const profiles = [
    { name: 'hiroharu', age: 22 },
    { name: 'tarou', age: 37 },
    { name: 'yamada', age: 32 },
    { name: 'takashi' },
    { age: 43 }
  ]

  return (
    <React.Fragment>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age} />
        })
      }
    </React.Fragment>
  )
}

const User = (props) => {
return <h1>I am { props.name } and my old is { props.age } !</h1>
}

User.defaultProps = {
  name: 'NoName',
  age: 0
}


export default App;
