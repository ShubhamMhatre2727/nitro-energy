import { MotionValue } from "framer-motion";
import Can from "./Can";

export default function Product({SCREEN_HEIGHT, scrollY}:{SCREEN_HEIGHT:number, scrollY:MotionValue}) {
  return (
    <section className="Product">
        <div className="item">
        <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={false}/>
            <div className="disk"/>
            <img src="/images/Nitro Green.png" alt="" width={100}/>
            <small style={{fontSize:10, color:"gray"}}>High intensity</small>
            <p style={{fontWeight:"bold"}}>12.0 $</p>
        </div>
    </section>
  )
}
