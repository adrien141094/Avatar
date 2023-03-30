import { useState } from 'react';


function Avatar({ image, firstName, lastName }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src={image} onMouseOver={() => setCount(count + 1)} />
      <figcaption>{firstName} {lastName}🍩{count}</figcaption>
    </div>
  )


};
export default Avatar