import React from "react";
import { FaEthereum } from 'react-icons/fa'

const style = {
    wrapper: 'w-full p-8 justify-between items=center flex',
    logoContainer: 'flex items-center justify-center space-x-2',
    logotext: 'font-bold text-xl',
    buttonContainer: ' flex space-x-2 items-center',
    button: ' text-sm bg-[#800080] rounded text-center p-3 text-white font-bold'
}

const Navbar = () => {
  return <div className={style.wrapper}>
      <div className={style.logoContainer}>
      <FaEthereum size={30} />
      <h1 className={style.logotext}>EthBoss</h1>
      </div>
      <div className={style.buttonContainer}>
          <button className={style.button}>connect wallet</button>
      </div>
     
  </div>;
};

export default Navbar;
