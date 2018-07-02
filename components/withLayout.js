import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Favicon from 'react-favicon';
import stylesheet from 'styles/index.scss';
import $ from 'jquery';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const withLayout = (WrappedComponent) => {
  class WithLayout extends React.PureComponent {
    componentDidMount() {
      $(document).ready(function () {
        var $hamburger = $('.hamburger');
        var isActive = false;

        $($hamburger).click(function() {
          if (isActive === false) {
            isActive = true;
            $hamburger.addClass('is-active');
            $('html, body').animate({
              scrollTop: 0
            }, 0, function() {
              $('html, body').addClass('blocked'),
              $('aside').fadeIn('200', function() {
                $('.menu').addClass('expanded');
              });
            }); 
          }
          else {
            isActive = false;
            $hamburger.removeClass('is-active');
            $('html, body').removeClass('blocked');
            $('.menu').removeClass('expanded');
            $('aside').fadeOut('200');
          }
        });
        var top = !1;
        $(document).scroll(function() {
          $(window).scrollTop() > 650 ? top || ($('nav').hide().stop().fadeIn(300).css({
            position: 'fixed',
            top: '15px',
          }).find('.logo-burger').css({
            display: 'inline-block'
          }),
          top = !0) : ($('nav').css({
            position: 'absolute',
            top: '0'
          }).find('.logo-burger').css({
            display: 'none'
          }),
          top = !1);
        });
      });

      ReactGA.initialize('UA-3241810-3');
      ReactGA.pageview(window.location.pathname + window.location.search);

      console.log('yeah bro!');
    }
    static async getInitialProps(...args) {
      if (typeof WrappedComponent.getInitialProps === 'function') {
        return WrappedComponent.getInitialProps(...args);
      }

      return {};
    }

    render() {
      const { props } = this;

      return (
        <div>
          <Favicon url="/static/img/faveico.png" />
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <meta name="description" content="DFW's most epic burger ranking publication of all time.  Feed your life-long burger quest in Dallas, TX." />
            <meta name="keywords" content="burger, burgers, beef, america, dallas, dfw, texas, top ten, best of, blog, tasty, weekly, grease, best, yum, photos, local, food, reviews" />
            <meta name="author" content="Brian Parks" />
            <meta property="og:url" content="https://eatthisbeef.com/" />
            <meta property="og:site_name" content="Eat This Beef!" />
            <meta property="og:description" content="DFW's most epic burger ranking publication of all time.  Feed your life-long burger quest in Dallas, TX." />
          </Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <aside>
            <div className={'menu'}>
              <Link href="/"><a className={'menu__item'}>Home</a></Link>
              <Link href="/top-ten"><a className={'menu__item'}>Top Ten</a></Link>
              <Link href="/honorable-mention"><a className={'menu__item'}>Honorable Mention</a></Link>
              <Link href="/fail"><a className={'menu__item'}>Fail</a></Link>
              <Link href="/destination"><a className={'menu__item'}>Destination</a></Link>
              <Link href="/about"><a className={'menu__item'}>About</a></Link>
            </div>
          </aside>
          <nav className={'nav wow slideInDown'}>
            <div className={'nav__inner center-flex'}>
              <button className={'hamburger hamburger--spin'}>
                <span className={'hamburger-box'}>
                  <span className={'hamburger-inner'}></span>
                </span>
              </button>
            </div>
          </nav>
          <main>
            <WrappedComponent {...props} />
          </main>
          <footer>
            <div>&copy; {(new Date().getFullYear())} created with a belly full of burgers by Eat This Beef. All rights reserved.</div>
            <div>Let's talk about burgers: <a href="mailto:hello@eatthisbeef.com">hello@eatthisbeef.com</a></div>
          </footer>
        </div>
      );
    }
  }

  WithLayout.displayName = `withLayout(${WrappedComponent.displayName || WrappedComponent.name || 'UnknownComponent'})`;
  return WithLayout;
};

export default withLayout;
