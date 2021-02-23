import logo from "./logo.svg";
import "./App.css";

function App() {
  const developers = {
    member: [
      "Saimun Hossain",
      "Mujahid Islam",
      "Aminul Islam",
      "Muhtasim Islam Nayem",
      "Moshiur Rahman",
      "Abir Khan",
    ],
    profession: [
      "Front-End Developer",
      "Back-End Developer",
      "Full-Stack Developer",
      "Python Developer",
    ],
  };

  return (
    <div className="App">
      <div className="Title">
        <img src={logo} alt="" srcset="" />
        <h1>Future Developer</h1>
      </div>
      <header className="App-header">
        <Developer
          image="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/152292743_453133519065311_1694000697125901491_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=Xcanc3OW8v8AX8qsd_C&_nc_ht=scontent-maa2-1.xx&oh=47d16d2d005db5b8112c42f98c2703d7&oe=605B6244"
          name={developers.member[1]}
          profession={developers.profession[3]}
        ></Developer>
        <Developer
          image="https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/133849852_1128696670914622_5446476156493034349_o.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=T5UxurnHLQAAX_evArP&_nc_ht=scontent-sin6-3.xx&oh=f20f4bfa58b21cc9d120a103fe762992&oe=605929A3"
          name={developers.member[0]}
          profession={developers.profession[0]}
        ></Developer>
        <Developer
          image="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/138631234_2820022121658799_7910409085905168074_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=eNPO9Opp4nQAX-Xk2Jq&_nc_ht=scontent-maa2-2.xx&oh=7b0071b9a29fe89de4f8a7f35cab9d1f&oe=605C26BB"
          name={developers.member[2]}
          profession={developers.profession[2]}
        ></Developer>
        <Developer
          image="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/123354880_741727730020724_7252671445200178828_n.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=Ilj3sZFzrQAAX--3eX2&_nc_ht=scontent-maa2-1.xx&oh=15fa50b23e966dcc050752f07b6a49b1&oe=605C8333"
          name={developers.member[3]}
          profession={developers.profession[0]}
        ></Developer>
        <Developer
          image="https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/133695893_1383612798651710_8478505461775051450_n.jpg?_nc_cat=104&ccb=3&_nc_sid=174925&_nc_ohc=YdBCHA9oxSIAX-HTdaj&_nc_ht=scontent-sin6-3.xx&oh=e31d2590267995a36950c3d29bba4a69&oe=6059D099"
          name={developers.member[4]}
          profession={developers.profession[2]}
        ></Developer>
        <Developer
          image="https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/18838942_1834397313544819_4342121564046317912_n.jpg?_nc_cat=104&ccb=3&_nc_sid=174925&_nc_ohc=Zsa6S90XIAIAX8E4ft4&_nc_ht=scontent-sin6-3.xx&oh=ddea76c008b25cb9a1f46b6109886936&oe=6059B0E8"
          name={developers.member[5]}
          profession={developers.profession[2]}
        ></Developer>
      </header>
    </div>
  );

  function Developer(props) {
    return (
      <div className="developerStyle">
        <div className="flex-container">
          <img src={props.image} alt="" srcset="" />
          <p>{props.name}</p>
          <p>{props.profession} </p>
        </div>
      </div>
    );
  }
}

export default App;
