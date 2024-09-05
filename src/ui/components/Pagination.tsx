import React from 'react';
import { Button } from 'navarrete-lib';

interface Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<Props> = ({ onNext, onPrevious }) => {
  return (
    <div>
      <Button label="<< Previous" onClick={onPrevious} />
      <Button label="Next >>" onClick={onNext} />
    </div>
  );
};

export default Pagination;