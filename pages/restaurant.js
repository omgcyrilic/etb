import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import api from '../api';
import withLayout from '../components/withLayout';
import { buildImageaArray, getCategoryIcon, getGoogleMapsUrl, getWowClass } from '/components/helpers';

const Lightbox = dynamic(import('react-image-lightbox'));

class Restaurant extends React.PureComponent {
  state = {
    photoIndex: 0,
    isOpen: false,
  }

  static async getInitialProps({ query: { slug }, res }) {
    const post = (await api.posts().slug(slug).embed())[0];
    if (post) {
      return { post };
    }

    if (res) {
      res.statusCode = 404;
    }
    return { error: true };
  }

  componentWillMount() {
    this.setState({
      post: this.props.post
    });
  };

  componentDidMount() {
    if(typeof window !== 'undefined') {
      window.WOW = require('wowjs');

      window.wow = new WOW.WOW({
        live: true
      });
      window.wow.init();
    }
  }

  initializeLightbox = (post) => {
    window.images = [];
    window.images = buildImageaArray(post);
    this.setState({ isOpen: true });
  }

  render() {
    const { post, photoIndex, isOpen } = this.state;
    const title = 'Eat This Beef, bruh';

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:image" content={'/static/img/' + post.img} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={'/static/img/' + post.img} />
        </Head>
        <section>
          <img src={'/static/img/logo.png'} className={'logo'} />
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
        <section key={post.id} className={'restaurant single'  + getWowClass(this.window)} data-wow-duration=".5s">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <img src={'/static/img/' + getCategoryIcon(post.section) + '.png'} className={'icon'}/>          
          <div className={'address'}>
            <a href={getGoogleMapsUrl(post)} target="_blank">{post.addressstreet + ', ' + post.addresscity + ', ' + post.addressstate}</a>
          </div>
          <button className={'img-thumb'} onClick={() => this.initializeLightbox(post)}>
            <img src={'/static/img/' +  post.imgthumb}/>
          </button>
          <div className={'copy'}>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />                
          </div>
        </section>
      </div>
    );
  }
}

export default withLayout(Restaurant);
