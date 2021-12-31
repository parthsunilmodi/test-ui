import React from 'react';
import { Button } from 'antd';
import {useHistory} from "react-router-dom";

const Test = () => {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => history.push('/two')}>Asdas</Button>
      <div>This is from the test component</div>
    </>
  )
};

export default Test;
