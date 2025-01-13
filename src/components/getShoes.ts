import { useState, useEffect } from "react";

const shoeImageUrls: string[] = [
    "https://thursdayboots.com/cdn/shop/products/1024x1024-Men-Captain-Whiskey-030922-Side.jpg?v=1658505769&width=1008",
    "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
    "https://cdn.khadims.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/06-apr-2022/35923835930_4.jpg",
    "https://i.redd.it/v3jqhi6ew0b71.jpg"
  ];

export const useShoeList = () => {
  const [shoes, setShoes] = useState([]);
  console.log("useShoeList");

  useEffect(() => {
    const getList = async () => {
      let data = [];
      const response = await fetch("http://127.0.0.1:3000/api/shoes", {
        headers: {
            "Content-Type": "application/json",
        },
      });
      console.log(response);
      try {
        data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      // Add a random image to each shoe if empty
      data.forEach((element: { image: string }) => {
        if (!element.image) {
          element.image =
            shoeImageUrls[Math.floor(Math.random() * shoeImageUrls.length)];
        }
      });

      setShoes(data);
    };
    getList();
  }, []);

  return shoes;
};
