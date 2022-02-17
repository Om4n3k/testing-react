import React, {FC} from 'react';

interface Props {
  title?:string
}

const Card: FC<Props> = (props) => {
  return (
    <div className='border-primary border-2 p-4 shadow shadow-primary/50 rounded-tl-xl rounded-br-xl space-y-2'>
      {props.title && <h3 className='text-xl font-semibold'>{props.title}</h3>}
      <div className='font-light text-white/90 text-sm'>
        {props.children}
      </div>
    </div>
  )
};

export default Card;