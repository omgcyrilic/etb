import React from 'react';
import Waypoint from 'react-waypoint';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api';
import withLayout from '../components/withLayout';
import { buildImageaArray, dateDisplay, getCategoryIcon, getGoogleMapsUrl, getWowClass } from '/components/helpers';

const Lightbox = dynamic(import('react-image-lightbox'));

class Home extends React.PureComponent {
  state = {
    page: 1,
    loading: false,
    hasMore: true,
    photoIndex: 0,
    isOpen: false,
  }

  static async getInitialProps() {
    const posts = await api.posts().perPage(10).page(1);
    return { posts };
  }

  loadMore = async () => {
    if (this.state.loading || !this.state.hasMore) {
      return;
    }

    this.setState({ loading: true});
    const posts = await api.posts().perPage(10).page(this.state.page + 1);
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
    if (typeof window !== 'undefined') {
      window.wow.sync();
    }
  }

  componentWillMount() {
    this.setState({
      posts: this.props.posts
    });
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.WOW = require('wowjs');
      window.wow = new WOW.WOW({
        live: true
      });
      window.wow.init();
    }
  }

  componentDidUpdate() {
    if (typeof window !== 'undefined') {
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
          <meta property="og:image" content={'/static/img/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'/static/img/' + posts.map(post => (post.img))[0]} />
        </Head>
        <section>
          <img src={'/static/img/logo.png'} className={'logo'} />
          <img src={'/static/img/logo-stacked.png'} className={'logo stacked'} />
          <h1>WELCOME TO DFW'S UNDISPUTED MOST EPIC BURGER RANKING PUBLICATION OF ALL TIME</h1>
          <div className={'intro'}>
            <p>Hi there. Eat this beef has been searching for the best burgers in Dallas, TX for eight years and our life long quest continues to this day. We check out new places almost every week so drop in again as the top ten is ever-evolving. ETB is burger centric in that we're not concerned with price, atmosphere, or service. It's all about the burger. We will however comment on the aforementioned if the restaurant delivers above and beyond. We prefer a "best of the best" short list as opposed to a lengthy list of options coupled with a complicated ranking system. Less is more.</p>
            <p>Established in 2010, eat this beef has cataloged <span>219</span> burgers in the DFW area to date. Fight us.</p>
          </div>
          <h1>BURGERS THAT JUST MET OUR BELLIES</h1>
        </section>
        {isOpen && (
          <Lightbox
            mainSrc={window.images[photoIndex].src}
            nextSrc={window.images[(photoIndex + 1) % window.images.length].src}
            prevSrc={window.images[(photoIndex + window.images.length - 1) % window.images.length].src}
            imageTitle={window.images[photoIndex].title}
            animationOnKeyInput={'true'}
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
              <section key={post.id} className={'restaurant ' + getWowClass(this.window)} data-wow-duration=".5s" data-wow-offset="10">
                <img src={'/static/img/' + getCategoryIcon(post.section) + '.png'} className={'icon'}/>
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
                  <img src={'/static/img/' +  post.imgthumb}/>
                </button>
                <div className={'copy'}>
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />                
                </div>
                <div className={'date'}>Masticated in: {dateDisplay(post.date)}</div>
              </section>
            ))
          }
        </section>
        {this.state.hasMore && <Waypoint key={this.state.page} onEnter={this.loadMore} />}
        {this.state.loading && <div className={'loading-more'}><img src={'/static/img/logo-burger.png'} /></div>}
      </section>
    );
  }
}

export default withLayout(Home);
