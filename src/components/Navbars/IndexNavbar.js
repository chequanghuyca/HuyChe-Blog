import React from 'react';
import classnames from 'classnames';
import { Button, Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor('');
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames('fixed-top', navbarColor)} expand='lg'>
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand data-placement='bottom' href='/index' target='_top' title='Home' >
            <i className='fa fa-home' style={{ fontSize: '35px' }} />
          </NavbarBrand>
          <button aria-expanded={navbarCollapse} className={classnames('navbar-toggler navbar-toggler', { toggled: navbarCollapse })} onClick={toggleNavbarCollapse} >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse className='justify-content-end' navbar isOpen={navbarCollapse} >
          <Nav navbar >
            <NavItem >
              <NavLink data-placement='bottom' href='https://zalo.me/0939260508' target='_blank' title='Twitter'>
                <i className='fa fa-phone-square' style={{ fontSize: '25px' }} />
                <p className='d-lg-none'> Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-placement='bottom' href='https://www.facebook.com/huycheeeeee' target='_blank' title='Facebook' >
                <i className='fa fa-facebook-square' style={{ fontSize: '25px' }} />
                <p className='d-lg-none'> Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-placement='bottom' href='https://www.instagram.com/huycheee/' target='_blank' title='Instagram' >
                <i className='fa fa-instagram' style={{ fontSize: '25px' }} />
                <p className='d-lg-none'> Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-placement='bottom' href='https://github.com/chequanghuyca' target='_blank' title='GitHub'>
                <i className='fa fa-github' style={{ fontSize: '25px' }} />
                <p className='d-lg-none'> GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className='btn-round' color='danger' href='https://me.momo.vn/qr-page/P2P/huyche' target='_blank' >
                <i className='fa fa-usd'></i> Ủng hộ Huy
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
