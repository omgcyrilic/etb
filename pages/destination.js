import React from 'react';
import Waypoint from 'react-waypoint';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api';
import withLayout from '../components/withLayout';
import { buildImageaArray, getClosedClass, getGoogleMapsUrl } from '/components/helpers';

let isServer = typeof window === 'undefined';
const Lightbox = dynamic(import('react-image-lightbox'));

class Destination extends React.PureComponent {
  state = {
    page: 1,
    totalPages: 1,
    loading: false,
    hasMore: true,
    photoIndex: 0,
    isOpen: false,
  }

  static async getInitialProps() {
    const posts = await api.posts().order('asc').orderby('title').perPage(20).category(5);
    return { posts };
  }

  loadMore = async () => {
    if (this.state.loading || !this.state.hasMore) {
      return;
    }

    this.setState({ loading: true});
    const posts = await api.posts().order('asc').orderby('title').perPage(10).category(5).page(this.state.page + 1);
    if (posts.length > 0) {
      this.setState({
        posts: this.state.posts.concat(posts),
        page: this.state.page + 1
      });
    }
    else {
      this.setState({ hasMore: false });
    }
    this.setState({
      loading: false
    });
  }

  getTotalPages = async () => {
    await api.posts().order('asc').orderby('title').perPage(10).category(5).then((response) => {
      this.setState({
        totalPages: response._paging.totalPages
      });
    });
  }

  componentWillMount() {
    this.setState({
      posts: this.props.posts
    });
    this.getTotalPages();
  };

  componentDidMount() {
    if(!isServer) {
      window.WOW = require('wowjs');

      window.wow = new WOW.WOW({
        live: true
      });
      window.wow.init();
    }
  }

  componentDidUpdate() {
    if(!isServer) {
      window.wow.sync();
    }
  }

  initializeLightbox = (post) => {
    window.images = [];
    window.images = buildImageaArray(post);
    this.setState({ isOpen: true });
  }

  render() {
    const { posts, photoIndex, isOpen } = this.state;
    const title = 'Eat This Beef, bruh - Destination';

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'https://eatthisbeef.com/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'https://eatthisbeef.com/' + posts.map(post => (post.img))[0]} />
        </Head>
        <h1 className={'wow fadeInDown'}>Destination</h1>
        <h3 className={'wow fadeInDown'}>The list broadens. Who doesn't love a good burger when you're on vacation? These are the burger joints outside of DFW worth checking out if you're in the area.</h3>
        {isOpen && (
          <Lightbox
            mainSrc={window.images[photoIndex].src}
            nextSrc={window.images[(photoIndex + 1) % window.images.length].src}
            prevSrc={window.images[(photoIndex + window.images.length - 1) % window.images.length].src}
            imageTitle={window.images[photoIndex].title}
            animationOnKeyInput={true}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + window.images.length - 1) % window.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % window.images.length,
              })
            }
          />
        )}
        <section className={'restaurant-list'}>
          {
            posts.map(post => (
              <section key={post.id} className={'restaurant wow fadeInUp ' + getClosedClass(post.closed)} data-wow-duration=".5s" data-wow-offset="10">
                <Link
                  href={{
                    pathname: '/restaurant',
                    query: {
                      slug: post.slug,
                    },
                  }}
                  as={`/restaurant/${post.slug}`}
                >
                  <a>
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </a>
                </Link>
                <div className={'address'}>
                  <a href={getGoogleMapsUrl(post)} target="_blank">{post.addressstreet + ', ' + post.addresscity + ', ' + post.addressstate}</a>
                </div>
                <button className={'img-thumb'} onClick={() => this.initializeLightbox(post)}>
                  <img src={'https://images.eatthisbeef.com/zoom.png'} className={'zoom'} />
                  <img src={'https://images.eatthisbeef.com/' + post.imgthumb}/>
                </button>
                <div className={'copy'}>
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />                
                </div>
              </section>
            ))
          }
        </section>
        {this.state.page < this.state.totalPages && this.state.hasMore && <Waypoint key={this.state.page} onEnter={this.loadMore} />}
        {this.state.page < this.state.totalPages && this.state.loading && <div className={'loading-more'}><img src={'https://images.eatthisbeef.com/logo-burger.png'} /></div>}
      </div>
    );
  }
}

export default withLayout(Destination);
