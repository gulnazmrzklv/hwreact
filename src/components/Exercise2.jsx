import {useState} from "react";
import { useEffect} from "react"
// Задание 2 ------------------------
function Exercise2() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 2</h1>
      <Pagination from={1} to={5} />
    </div>
  );
}
/*
Создать кнопки страниц от указанного числа
в пропсе from до пропса to.
При клике на одну из кнопок, надо сменить номер страницы
в теге p  на соответствующее число.
*/
 
function Pagination({ from, to }) {
  const [current, setCurrent] = useState(from);
  useEffect(() => {
    setCurrent(from);
  }, [from]);
  const pages = [];
  for (let i = from; i <= to; i++) {
    pages.push(i);
  }
  return (
    <div>
      <p>Страница: {current}</p>
      {pages.map(pageNum => (
        <button key={pageNum} onClick={() => setCurrent(pageNum)}>
          {pageNum}
        </button>
      ))}
    </div>
  );
}
export default Exercise2;