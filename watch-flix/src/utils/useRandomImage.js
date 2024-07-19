import { useEffect, useState } from "react";

const useRandomImage = () => {
  const [image, setimage] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/portraits/2.jpg");
    // const data = res.url;
    // setimage(data);
    const data = await res;
    console.log(data);
  };
  // return image;
};

export default useRandomImage;
