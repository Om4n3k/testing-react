import {motion, AnimationControls, TargetAndTransition, VariantLabels, Transition,} from 'framer-motion';
import {FC} from 'react';

interface Props {
  type?: 'submit' | 'button' | 'reset'
  animate?: boolean | AnimationControls | TargetAndTransition | VariantLabels;
  transition?: Transition;
}

const Button: FC<Props> = (props) => {
  return (
    <motion.button className='bg-primary/10 transition-all border border-primary shadow shadow-primary/50 rounded px-4 py-3 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/60' animate={props.animate}
                   transition={props.transition} type={props.type}>
      {props.children}
    </motion.button>
  )
};

Button.defaultProps = {
  type: "button",
  animate: false
}

export default Button;