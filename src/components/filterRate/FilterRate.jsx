import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const FilterRate = ({rechercheRate,setRechercheRate, isRating, rate}) => {
  const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
        {isRating ?(
            <Rate
            tooltips={desc}
            onChange={setRechercheRate}
            value={rechercheRate}
            />
        ) :(
            <Rate disabled value={rate} />
        )}

    </Flex>
  );
};
export default FilterRate;