export const titleAnimation = {
  hidden:{
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.3}
  })
};

export const imgAnimation = {
  hidden:{
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 0.9}
  })
};