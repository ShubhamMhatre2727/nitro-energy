import {
    motion,
    useMotionValueEvent,
    useScroll,
    useAnimation,
    useMotionTemplate,
    useMotionValue,
    useTransform,
    easeInOut,
    easeIn,
    MotionValue,
  } from "framer-motion";


export default function Can({SCREEN_HEIGHT, scrollY, animate}:{SCREEN_HEIGHT:number, scrollY:MotionValue, animate:boolean}) {


  const width = useTransform(
    scrollY,
    [0, SCREEN_HEIGHT / 2, SCREEN_HEIGHT],
    ["50%", "60%", "30%"]
  );
  const right = useTransform(
    scrollY,
    [SCREEN_HEIGHT / 2 + 10, SCREEN_HEIGHT],
    ["0px", "-325px"]
  );
  const rotate = useTransform(
    scrollY,
    [SCREEN_HEIGHT / 2 + 10, SCREEN_HEIGHT],
    ["0deg", "-90deg"]
  );
  return (
    (animate)?
    <motion.div
        className="Can"
        initial={{
            "--right": "-200px",
            translateY: "-500%",
          }}
        animate={{
            "--right": "0px",
            translateY: "-50%",
          }}
        transition={{ ease:"easeOut", duration:1 }}
        style={{
          "--right": right,
          position: "absolute",
          left: "50%",
          translateX: "-50%",
          top: "50%",
          width,
          rotate,
        }}
      />
      :
      <motion.div
        className="Can"
        style={{
            "--right": "0px",
            rotate:"-90deg",
            width:"100%",
            translateY:"-55%"
          }}
      />
  )
}
