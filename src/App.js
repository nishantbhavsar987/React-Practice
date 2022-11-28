import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Welcome } from "./components/Class";
import { Message } from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import { ConditionalRendaring } from "./components/ConditionalRendaring";
import List from "./components/List";
import StyleSheet from "./components/StyleSheet";
import InlineStyle from "./components/InlineStyle";
import "./components/style.css";
import styles from "./components/app.module.css";
import FormControl from "./components/FormControl";
import LifeCycleA from "./components/LifeCycleA";
function App() {
  return (
    <div className="App">
      <LifeCycleA />
      {/* <FormControl /> */}
      {/* <h1 className="green">Success </h1>
      {console.log(styles)}
      <h1 className={`${styles.error} ${styles.id}`} id={styles.id}>
        Error
      </h1> */}
      {/* <InlineStyle /> */}
      {/* <StyleSheet className={`primary size`} /> */}
      {/* <List /> */}
      {/* <Message /> */}
      {/*       
      <Counter/>
      <Greet name="Nishant">
        <p>I am a BCA student at SOU</p>
      </Greet>
      <Welcome name="Nishant">
        <button>Click Me</button>
      </Welcome> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendaring /> */}
    </div>
  );
}

export default App;
