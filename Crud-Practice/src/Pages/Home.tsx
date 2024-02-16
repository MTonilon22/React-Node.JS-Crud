import React, { useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <>dawd</>;
}

export default Home;
