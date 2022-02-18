import List from "../components/List";
import ListItem from "../components/ListItem";

import "./ToDoPage.css";

const ToDoPage = () => {
      let items = [<ListItem title="title1" content="content1" id={1} />];
      return (
            <div className="toDoPage">
                  <List />
            </div>
      );
};
export default ToDoPage;
