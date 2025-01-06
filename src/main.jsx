import './index.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import App from './App.jsx'

const isMobile = () => {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
  }



const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
    <Canvas
        camera={{
        fov: isMobile() ? fovForMobile : fovForPc,
        near: 0.1,
        far: 200,
        position: [52, 7, 12],
    }}
    >
        <App/>
        <Perf position="top-left" />
    </Canvas>

    
)