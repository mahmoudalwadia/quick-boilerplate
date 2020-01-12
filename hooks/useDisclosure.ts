import { useState } from 'react';

/**
 * @author Mahmoud
 * @howToUse const { isOpen, onOpen, onClose } = useDisclosure();
 * @whenToUse when you want toggle state
 * @desc this is a general state toggling manager
 * @return object
 */
export default () => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return { isOpen, onOpen, onClose };
};
