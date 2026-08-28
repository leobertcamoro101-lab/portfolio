import { useInView } from 'react-intersection-observer';

const useScrollReveal = (threshold = 0.15) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });
  return { ref, inView };
};

export default useScrollReveal;
