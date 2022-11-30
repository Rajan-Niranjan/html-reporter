import React from 'react';
import { TimerOutlined } from '@mui/icons-material';
import { Time, TimerIconWrapper, Wrapper } from './style';

type Props = {
  time: {
    hour?: number;
    min?: number;
    sec?: number;
  };
  color: string;
};

const Timer: React.FC<Props> = ({ time: { hour, min, sec }, color }) => {
  const getTime = (hour?: number, min?: number, sec?: number): string => {
    return `${hour ? `${hour} hr` : ''} ${min ? `${min} mins` : ''} ${sec ? `${sec} secs` : ''}`;
  };

  return (
    <Wrapper>
      <TimerIconWrapper>
        <TimerOutlined />
      </TimerIconWrapper>
      <Time dateTime={`PT${hour ?? 0}H${min}M${sec ?? 0}S`} color={color}>
        {getTime(hour, min, sec)}
      </Time>
    </Wrapper>
  );
};

export default Timer;
