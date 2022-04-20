import {useState} from "react";
// Задание 3 ------------------------
function Exercise3() {
  return (
    <div className="exercise">
      <h1 className="exercise__title">Задание 3</h1>
      <Rating rate={1} onChange={(rate) => console.log(rate)} />
    </div>
  );
}
/*
Это компонент для показывания рейтингов.
1. Нужно, чтобы по клику на звезду, должны быть активными
и другие звезды, которые находятся до нее.
2. В зависимости от пропса rate, по умолчанию
должны быть активным соотвествующее количество звезд.
Как бы рейтинг по умолчанию.
3. После клика нужно передавать рейтинг в коллбэк onChange 
*/
function Rating({ rate, onChange }) {
  const [rating, setRating] = useState(rate);

  console.log(rating);
  return (
    <div style={{ display: "flex" }}>
      <Star active={rating >= 1} onClick={() => setRating(1)} />
      <Star active={rating >= 2} onClick={() => setRating(2)} />
      <Star active={rating >= 3} onClick={() => setRating(3)} />
      <Star active={rating >= 4} onClick={() => setRating(4)} />
      <Star active={rating >= 5} onClick={() => setRating(5)} />
    </div>
  );
}

function Star({ active, ...props }) {
  return (
    <svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M10 .5l2.781 5.595L19 6.998l-4.5 4.353 1.062 6.149L10 14.595 4.438 17.5 5.5 11.35 1 6.999l6.219-.903L10 .5v0z"
        stroke={active ? "#FFA84C" : "#999"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Exercise3;
