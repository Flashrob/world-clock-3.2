import { useState } from "react";
import { useEffect } from "react";

// Clock function
export default function Clock(props) {
  // useState allows you to add state to functional components. It essentially allows you to store and update data.
  const [date, setDate] = useState(new Date());
  // useEffect tells the clock to move by second. useEffect is used to perform side effects in a component.
  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  return (
    // Add time zone label to make it clearer which time zone each clock is rendering.
    <>
      {/* {props.timeZone} */}
      <p>{date.toLocaleString("en-GB", { timeZone: `${props.timeZone}` })}</p>
    </>
  );
}
