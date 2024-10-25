import { motion, MotionValue } from "framer-motion";
import Can from "./Can";

export default function Product({SCREEN_HEIGHT, scrollY}:{SCREEN_HEIGHT:number, scrollY:MotionValue}) {
  return (
    <section className="Product">
        <div className="item">
            <div style={{width:"100%", aspectRatio:1/1, zIndex:1}}>
            <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={false}/>
            </div>
            <div className="disk"/>
            <img src="/images/Nitro Blue.png" alt=""/>
            <small>High intensity</small>
            <strong>12.0 $</strong>
        </div>
        
        <div className="item">
            <div style={{width:"100%", aspectRatio:1/1, zIndex:1}}>
            <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={false}/>
            </div>
            <div className="disk"/>
            <img src="/images/Nitro Eng.png" alt=""/>
            <small>High intensity</small>
            <strong>12.0 $</strong>
        </div>
        
        <div className="item">
            <div style={{width:"100%", aspectRatio:1/1, zIndex:1}}>
            <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={false}/>
            </div>
            <motion.div className="disk" transition={{duration:1}} whileInView={{background:"radial-gradient(circle, #272727 0%, #000000 40%, #ffffff 100%)"}}/>
            <img src="/images/Nitro Green.png" alt=""/>
            <small>High intensity</small>
            <strong>12.0 $</strong>
        </div>
        
        <div className="item">
            <div style={{width:"100%", aspectRatio:1/1, zIndex:1}}>
            <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={false}/>
            </div>
            <div className="disk"/>
            <img src="/images/Nitro Red.png" alt=""/>
            <small>High intensity</small>
            <strong>12.0 $</strong>
        </div>
        
        <div className="item">
            <div style={{width:"100%", aspectRatio:1/1, zIndex:1}}>
            <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={false}/>
            </div>
            <div className="disk"/>
            <img src="/images/Nitro Sky.png" alt=""/>
            <small>High intensity</small>
            <strong>12.0 $</strong>
        </div>
    </section>
  )
}
