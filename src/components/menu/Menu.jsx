// React
import { Link } from "react-router";

const menuInfo = [
  { link: "hello", text: "Hello World" },
  { link: "profilecard", text: "Static Profile Card" },
  { link: "list", text: "Dynamic List Component" },
  { link: "button", text: "Reusable Button Component" },
  { link: "parentchild", text: "Parent-Child Interaction" },
  { link: "counter", text: "Dynamic Counter" },
  { link: "form", text: "Form Component with State" },
  { link: "todolistform", text: "Todo App with Hooks" },
  { link: "timer", text: "Timer using useEffect Hook" },
  { link: "fetchdata", text: "Fetching API Data with useEffect" },
  { link: "quiz", text: "Quiz App with Props" },
];

export default function Menu({ styles }) {
  return (
    <menu className={styles.homeList}>
      {menuInfo.map((item, idx) => {
        return (
          <li key={idx} className={styles.listItem}>
            <Link to={item.link} className={styles.itemLink}>{item.text}</Link>
          </li>
        );
      })}
    </menu>
  );
}
