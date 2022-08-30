import './Home.scss'
import { Outlet } from 'react-router-dom'
import { Background, Parallax } from 'react-parallax';


// const Home = () => {
//     return (
//         <div className='content'>
//             <Parallax speed={-10}>
//                 PRAFU  <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br> PRAFUL <br></br> PRAFUL  <br></br>
//             </Parallax>
//             <div className='content-r'>
//             <Parallax speed={10}>
//                 VAT <br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>  VATS<br></br>  VATS <br></br>
//             </Parallax>
//             </div>
//         </div>
//     )
// }

// export default Home

const Home = () => {
    return (
            <div className='content'>

                <div className='content-l'>
                Hello, I’m a Software Developer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>and Web Designer with niche<br></br> interest in Full Stack Development.<br></br>Absolute carnage in those bleep<br></br>metaverse of kayak innvovation.
<div></div>Assembling a tesseract of<br></br>  tools and technologies and<br></br> solving challenging problems<br></br> with passion and determination.<br></br> To Infinity and Beyond.
                </div>

                {/* <div className='content-l'>
                     PRAFUL VATS<br></br>
                </div> */}
                
                {/* <div className='content-r'>
                     VATS <br></br>
                </div> */}
                
            </div>
    )
}

export default Home