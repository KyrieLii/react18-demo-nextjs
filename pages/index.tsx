import type { NextPage } from "next";
import { Button, Image } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { useEffect, useState, useTransition } from "react";
import { randImg } from "@ngneat/falso";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const mockApi = async (id: number) => {
  console.warn("mock api send", id);
  sleep(1000);
  return await `mock api ${id}`;
};

// const getImg = async () => {
//   await sleep(1000);
//   return await new Promise<string>((resolve) => {
//     resolve(randImg());
//   });
// };

export async function getStaticProps(context: any) {
  console.log("getStaticProps", context);
  const data = await mockApi(1);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const App = (props = {}) => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();
//   const onClick = async () => {
//     const img = await getImg();
//     console.log(img);
//     startTransition(() => {
//       setValue(img);
//     });
//     console.log("process", process);
//   };
  useEffect(() => {
    console.log("render");
    console.log("props", props);
  });

  const req = async () => {
    console.log("req");
    const res = await mockApi(2);
    setValue(res);
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <div>
      {/* <Button onClick={onClick}>hello react 18</Button> */}
      {/* {isPending ? "loading..." : <Image src={value} />} */}
      {(props as any).data }
      {value}
    </div>
  );
};

export default App;
