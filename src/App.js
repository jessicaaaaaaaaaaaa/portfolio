import './App.css';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function App() {
  return (
    <div className="bg-violet-200 min-h-screen flex overflow-hidden w-full">
      
      <div className="relative w-full">

        <h2 className="font-syne absolute top-5 left-5 uppercase text-xl text-white z-50">Belfast, NI</h2>

        <div className="after:content-[''] absolute top-16 left-0 bg-white w-1 h-full"></div>

        <a href="mailto:jessicaarodgerss@gmail.com" className="font-syne z-50 absolute bottom-5 right-5 uppercase text-xl text-white">Request a CV</a>

        <div className="flex flex-wrap text-white items-center justify-center min-h-screen tracking-wide font-cigra">

          <StarIcon styles="" className="absolute top-0"/>
          
          <h1 className="text-7xl uppercase break-words p-5 text-center relative">Jessica Rodgers<br />
            <span className="font-gyahegi text-base leading-relaxed lowercase tracking-widest absolute left-0 right-0 text-center">Front-end developer & occassional designer</span>
          </h1>

          <div className="flex bg-transparent -skew-x-[55deg] w-xl h-xl rounded-full absolute top-36 left-1/3 border border-white"></div>
          
          <StarIcon />
        
        </div>

        <div className="text-white absolute z-50 bottom-7 left-5 flex space-x-9">

          {/* linkedin */}
          <a href="https://www.linkedin.com/in/jessicaaaa/">
          
            <FaLinkedinIn className="w-4 h-4 fill-current"/>
          
          </a>

          {/* insta */}
          <a href="https://www.instagram.com/j__essicaart/" className="absolute">
          
            <FaInstagram className="w-4 h-4 fill-current"/>
        
          </a>

        </div>
        
        {/* blue blobs */}
        <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        
        {/* pink blobs */}
        <div className="absolute -top-1/2 left-1/4 w-xxl h-xxl bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="absolute top-1 right-1 w-xl h-xl bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="absolute top-1/2 right-1/4 w-xl h-xl bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="absolute top-1/3 left-1/5 w-xl h-xl bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="absolute top-1/2 -left-1/4 w-xxl h-xxl bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        {/* purple blobs */}
        <div className="absolute -bottom-1/4 -right-64 w-xxl h-xxl bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        
        <div className="absolute bottom-1/3 -right-52 w-xl h-xl bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

        <div className="absolute -top-1/4 -left-1/4 w-xl h-xl bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      
      </div>
    
    </div>
  );
}

function StarIcon(props) {
  let styles = null;
  if (!props.styles) styles = "text-black"
  styles = props.styles
  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      version="1.1"
      viewBox="0 0 26.458 26.458"
      className={styles}
    >
      <g fill="currentColor" fillOpacity="1" stroke="none" strokeOpacity="1">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="37.795"
          d="M20.434 60.962L19.13 21.095l-39.905-.66 39.867-1.305.661-39.905 1.304 39.867 39.905.661-39.867 1.304z"
          transform="matrix(0 .3237 -.32425 0 19.767 6.77)"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M4.37 13.336c5.77.184 9.059-2.357 8.831-8.83l-.274 8.456z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M4.382 13.224c5.771-.184 9.059 2.358 8.831 8.831l-.274-8.457z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M13.19 4.393c-.184 5.77 2.358 9.059 8.831 8.831l-8.457-.274z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M13.202 22.143c-.184-5.77 2.358-9.058 8.831-8.83l-8.457.273z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M9.8 13.336l4.257-1.667 4.956 1.622-3.694 1.262c-1.67.132-2.562 1.39-2.073 4.64l-.293-1.104-1.69-4.145z"
        ></path>
      </g>
    </svg>
    </>
  );
}

export default App;
