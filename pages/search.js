import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import api from '../api';
import debounce from 'lodash/debounce';
import withLayout from '../components/withLayout';
import { buildImageaArray, getGoogleMapsUrl } from '/components/helpers';

let isServer = typeof window === 'undefined';
const Lightbox = dynamic(import('react-image-lightbox'));

class Search extends React.PureComponent {
  state = {
    photoIndex: 0,
    isOpen: false,
    searchTerm: '',
  }

  static async getInitialProps() {
    const posts = await api.posts().search('braindead');
    return { posts };
  }
  

  componentWillMount() {
    this.setState({
      posts: this.props.posts
    });
  };  

  componentDidMount() {
    if (!isServer) {
      window.WOW = require('wowjs');

      window.wow = new WOW.WOW({
        live: true
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

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  }

  render() {
    const { posts, photoIndex, isOpen } = this.state;
    const title = 'Eat This Beef, bruh - Search';

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'https://images.eatthisbeef.com/' + posts.map(post => (post.img))[0]} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'https://images.eatthisbeef.com/' + posts.map(post => (post.img))[0]} />
        </Head>
        <h1 className={'wow fadeInDown'}>SEARCH</h1>
        <h3 className={'wow fadeInDown'}>Have we been there? Probably. Search to find out.</h3>
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
        <section className="search">
          <input type="search" name="etb-search" placeholder="Enter search term" value={this.state.searchTerm} onChange={this.handleSearch} />
        </section>
        <section className={'restaurant-list'}>
          {
            posts.map(post => (
              <section key={post.id} className={'restaurant wow fadeInUp'} data-wow-duration=".5s" data-wow-offset="10">
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
      </div>
    );
  }
}

export default withLayout(Search);
