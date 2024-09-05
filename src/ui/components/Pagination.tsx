import React from 'react';
import { Button } from 'navarrete-lib';
import './pagination.scss';

interface Props {
  disabledPrevious: boolean;
  disabeldNext: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<Props> = ({disabledPrevious, disabeldNext, onNext, onPrevious }) => {
  return (
    <div className='pagination'>
      <Button label="<< Previous" onClick={onPrevious} disabled={disabledPrevious}/>
      <Button label="Next >>" onClick={onNext} disabled={disabeldNext}/>
    </div>
  );
};

export default Pagination;