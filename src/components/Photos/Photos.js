import React from "react";
import { useFetch } from "../../hooks";

import "./Photos.css";

function Photos() {
  /* Using custom hook, that returns the data, and a boolean that is 
  true if the data is loaded. */
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );

  return (
    <>
      <h1>Photos</h1>

      {/* Render list only when the data is loaded */}
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Photos;
