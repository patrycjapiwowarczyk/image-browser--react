import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onImageClick(this.props.image);
  };

  render() {
    return (
      <li>
        <img
          src={this.props.image.webformatURL}
          alt=""
          onClick={this.handleClick}
          loading="lazy"
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
