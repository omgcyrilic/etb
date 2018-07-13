import React from 'react';
import Waypoint from 'react-waypoint';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api';
import withLayout from '../components/withLayout';
import { buildImageaArray, getClosedClass, dateDisplay, getCategoryTag, getGoogleMapsUrl } from '/components/helpers';

const isServer = typeof window === 'undefined';
const Lightbox = dynamic(import('react-image-lightbox'));

class Home extends React.PureComponent {
  state = {
    page: 1,
    totalPages: 1,
    loading: false,
    hasMore: true,
    photoIndex: 0,
    isOpen: false,
  }

  static async getInitialProps() {
    const posts = await api.posts().perPage(10).page(1).order('desc').orderby('date');
    return { posts };
  }

  loadMore = async () => {
    if (this.state.loading || !this.state.hasMore) {
      return;
    }

    this.setState({ loading: true});
    const posts = await api.posts().perPage(10).page(this.state.page + 1).order('desc').orderby('date');
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
      loading: fase
    });
    if (!isServer) {
      window.wow.sync();
    }
  }

  getTotalPages = async () => {
    await api.posts().perPage(10).page(1).then((response) => {
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
    if (!isServer) {
      window.WOW = require('wowjs');
      window.wow = new WOW.WOW({
        live: false
      });
      window.wow.init();
    }
  }

  componentDidUpdate() {
    if (!isServer) {
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
    const title = 'Eat This Beef, bruh';

    return (
      <section>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'https://eatthisbeef.com/static/img/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'https://eatthisbeef.com/static/img/' + posts.map(post => (post.img))[0]} />
        </Head>
        <section>
          <img src={'/static/img/logo.png'} className={'logo wow fadeInDown'} />
          <img src={'/static/img/logo-stacked.png'} className={'logo stacked wow fadeInDown'} />
          <h1 className={'wow fadeInDown'}>WELCOME TO DFW'S UNDISPUTED MOST EPIC BURGER RANKING PUBLICATION OF ALL TIME</h1>
          <h4 className={'wow fadeInDown'}>BURGERS THAT JUST MET OUR BELLIES</h4>
        </section>
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
                <img src={'/static/img/tags/' + getCategoryTag(post.section, post.rank) + '.png'} className={'tag'}/>
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
                  <img src={'/static/img/' + post.imgthumb}/>
                </button>
                <div className={'copy'}>
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />                
                </div>
                <div className={'date'}>Masticated in: {dateDisplay(post.date)}</div>
              </section>
            ))
          }
        </section>
        {this.state.page < this.state.totalPages && this.state.hasMore && <Waypoint key={this.state.page} onEnter={this.loadMore} />}
        {this.state.page < this.state.totalPages && this.state.loading && <div className={'loading-more'}><img src={'/static/img/logo-burger.png'} /></div>}
      </section>
    );
  }
}

export default withLayout(Home);
