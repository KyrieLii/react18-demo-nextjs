import { useEffect, useState, useTransition } from "react";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const App = (props = {}) => {
  const { data, error } = useSWR('/api/hello', fetcher)
  
  useEffect(() => {
    console.log("render");
    console.log("props", props);
  });

  useEffect(() => {
  }, []);

  return (
    <div>
      {/* <Button onClick={onClick}>hello react 18</Button> */}
      {/* {isPending ? "loading..." : <Image src={value} />} */}
      {(props as any).data }
      {data ? JSON.stringify(data) : 'loading'}
    </div>
  );
};

export default App;
