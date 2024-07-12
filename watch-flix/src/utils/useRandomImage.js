import { useEffect, useState } from "react";

const useRandomImage = () => {
  const [image, setimage] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = res.url;
    setimage(data);
  };
  return image;
};

export default useRandomImage;
