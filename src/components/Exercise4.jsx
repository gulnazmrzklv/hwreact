import { useState} from "react";
// Задание 4 ------------------------
/*
Сделать валидацию формы ввода.
border тега input должен стать
зеленым, если переданная валидация истинна,
иначе должен стать красным.
Валидация должна проверяться при каждом вводе
*/
 function Exercise4() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 4</h1>
      <TextValidate
        message="Введите больше 5 символов"
        validate={(value) => value.length > 5}
      />
    </div>
  );
}

function TextValidate({ validate, message }) {
  const [text, setText] = useState("");
  const isValid = validate(text);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        style={{ border: `6px solid ${isValid ? "green" : "red"}` }}
      />
      {!isValid && <p>{message}</p>}
    </div>
  );
} 

export default Exercise4;
