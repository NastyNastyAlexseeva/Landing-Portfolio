import cn from 'classnames';

import { ReactComponent as SpinnerSvg } from '../../assets/spinner.svg';

import cl from './Banner.module.scss';

const Banner = ({ isLoading = false, src = '' }) => {
  return (
    <section className={cl.banner} id="home">
      <div className={cn(cl.wrappImg, {[cl.load]: isLoading})}>
        {isLoading ?
          <>
            <div className={cl.spinnerBckg}></div>
            <div className={cl.spinner}>
              <SpinnerSvg />
            </div>
          </>
           : null
        }
        <img src={src} alt="banner" />
      </div>
    </section>
  );
}

export default Banner;