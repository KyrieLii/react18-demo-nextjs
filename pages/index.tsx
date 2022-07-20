import type { NextPage } from "next";
import { Button, Image } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { useState, useTransition } from 'react';
import { randImg } from '@ngneat/falso';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const getImg = async () => {
    await sleep(1000);
    return await new Promise<string>((resolve) => {
        resolve(randImg());
    })
}

const App = () => {
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const onClick = async () => {
    const img = await getImg();
    console.log(img)
    startTransition(() => {
      setValue(img);
    });
    console.log('process', process)
  };
  return (
    <div>
      <Button onClick={onClick}>hello react 18</Button>
      {isPending ?   'loading...': <Image src={value} />}
    </div>
  );
};

export default App;

