import React from 'react';

function useKeydown(callback, keys) {
  React.useEffect(() => {
    function handleKeydown(e) {
      keys?.includes(e.code) && callback();
    }

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [keys, callback]);
}

export default useKeydown;
