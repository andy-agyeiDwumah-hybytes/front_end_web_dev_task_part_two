// React
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

// Components
import HelloWorld from "./components/helloWorld/HelloWorld";
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import ProfileCard from "./components/profileCard/ProfileCard";
import List from "./components/list/List";
import ParentChild from "./components/parentChild/ParentChild";
import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";
import Quiz from "./components/quiz/Quiz";
import ToDoListForm from "./components/toDoListForm/ToDoListForm";
import Timer from "./components/timer/Timer";
import FetchData from "./components/fetchData/FetchData";
import Button from "./components/button/Button";

// Images
import profileUserImg from "./assets/images/linkedin_pic.PNG";

// Utils
import BackgroundHandler from "./utils/BackgroundHandler";

// Constants
const profileUserName = "Andy";
const profileUserBio =
  "FrontEnd Developer Assistant at hybytes";

const listArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "one"];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BackgroundHandler />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="hello" element={<HelloWorld name="Andy" />} />
      <Route
        path="profilecard"
        element={
          <ProfileCard
            profileUserName={profileUserName}
            profileUserBio={profileUserBio}
            profileUserImg={profileUserImg}
          />
        }
      />
      <Route path="list" element={<List listArr={listArray} />} />
      <Route path="button" element={<Button onClick={() => console.log("Hehe")} label="Check console when clicked" /> } />
      <Route path="parentchild" element={<ParentChild /> } />
      <Route path="counter" element={<Counter /> } />
      <Route path="form" element={<Form />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="timer" element={<Timer />} />
      <Route path="todolistform" element={<ToDoListForm />} />
      <Route path="fetchdata" element={<FetchData />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
