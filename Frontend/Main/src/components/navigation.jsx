import { Image } from "./image"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a href='#page-top'>
          <img src="img/logoname2.png" style={{height:"55px"}} alt="img" />
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#team' className='page-scroll'>
                Buy Fertilizer
              </a>
            </li>
            
            <li>
              <a href='#services' className='page-scroll'>
                Food Donors
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                 NGO's
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='http://localhost:3000/signup' className='page-scroll'> 
               DO You Want To DONATE?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
