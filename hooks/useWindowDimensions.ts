import { useState, useEffect } from 'react';

const getDim = (x: number) => {
  let newDim: string = '';
  if (x >= 1200) {
    newDim = 'xl';
  } else if (x >= 992) {
    newDim = 'lg';
  } else if (x >= 768) {
    newDim = 'md';
  } else if (x >= 576) {
    newDim = 'sm';
  } else {
    newDim = 'xs';
  }

  return newDim;
};

/**
 * @author Mahmoud
 * @howToUse const dim = useWindowDimensions()
 * @whenToUse when you want to make changes to the component according to window width
 * @return string <'xl' | 'lg' | 'md' | 'sm' | 'xs'>
 */
export default () => {
  const [dim, setDim]: (string | Function)[] = useState('');
  useEffect(() => {
    const val = getDim(window.innerWidth);
    if (dim !== val) {
      setDim(val);
    }
    window.addEventListener('resize', () => {
      const { innerWidth } = window;

      const newDim = getDim(innerWidth);
      if (dim !== newDim) {
        setDim(newDim);
      }
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  });

  return dim;
};
