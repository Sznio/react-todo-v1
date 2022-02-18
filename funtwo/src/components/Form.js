import { useState } from "react";

import "./styles/Form.css";

const Form = ({ submit }) => {
      const submitData = (e) => {
            e.preventDefault();
            submit({
                  type: "ADD",
                  text: titleInputText,
                  content: contentInputText,
                  finishDate: dateInput,
            });
            setTitleInputText("");
            setContentInputText("");
            setDateInput(new Date().toISOString().slice(0, 10));
      };

      const [titleInputText, setTitleInputText] = useState("");
      const [contentInputText, setContentInputText] = useState("");
      const [dateInput, setDateInput] = useState(
            new Date().toISOString().slice(0, 10)
      );
      return (
            <form className="addForm">
                  <div className="inputWrapper">
                        <div className="input">
                              <label htmlFor="titleInput">Tytuł zadania</label>
                              <input
                                    type="text"
                                    value={titleInputText}
                                    onChange={(e) =>
                                          setTitleInputText(e.target.value)
                                    }
                                    id="titleInput"
                                    placeholder="Tytuł"
                              />
                        </div>
                        <div className="input">
                              <label htmlFor="contentInput">
                                    Treść zadania
                              </label>
                              <input
                                    type="text"
                                    value={contentInputText}
                                    onChange={(e) =>
                                          setContentInputText(e.target.value)
                                    }
                                    id="contentInput"
                                    placeholder="Treść"
                              />
                        </div>
                        <div className="input">
                              <label htmlFor="dateInput">
                                    Termin wykonania
                              </label>
                              <input
                                    min={new Date().toISOString().slice(0, 10)}
                                    type="date"
                                    id="dateInput"
                                    value={dateInput}
                                    onChange={(e) =>
                                          setDateInput(() => {
                                                let data = e.target.value;
                                                let dateObj = new Date(data);
                                                let currentDayDate = new Date();
                                                currentDayDate.setHours(0);
                                                currentDayDate.setMinutes(0);
                                                currentDayDate.setSeconds(0);
                                                if (
                                                      dateObj.getTime() <
                                                      currentDayDate.getTime()
                                                ) {
                                                      return currentDayDate
                                                            .toISOString()
                                                            .slice(0, 10);
                                                }

                                                const splitVal =
                                                      e.target.value.split("-");

                                                if (splitVal[0].length > 4) {
                                                      return `${currentDayDate.getFullYear()}-${
                                                            splitVal[1]
                                                      }-${splitVal[2]}`;
                                                }

                                                return e.target.value;
                                          })
                                    }
                              />
                        </div>
                  </div>
                  <button onClick={submitData}>Dodaj zadanie</button>
            </form>
      );
};
export default Form;
