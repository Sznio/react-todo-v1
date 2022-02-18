const ListItem = ({ title, content, id, finishDate, removeMethod }) => {
      const remove = () => {
            removeMethod(id);
      };

      return (
            <li className="task" key={id}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <p>
                        Wykonać do: <b>{finishDate}</b>
                  </p>
                  <button onClick={remove} className="dismissTask">
                        X
                  </button>
            </li>
      );
};
export default ListItem;
