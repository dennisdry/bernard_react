import React from 'react';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';

// var strippedUserName = "Harry Smith";
// strippedUserName = strippedUserName.replace(/\s+/g, '_').toLowerCase();

// var profilePictureUrl = `${window.location.href}/public/profile/${strippedUserName}.png`;
// console.log(profilePictureUrl);


export default class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);

    this.profilePictureUrl = this.profilePictureUrl.bind(this);

  }



  profilePictureUrl() {
    const strippedUserName = this.props.name.replace(/\s+/g, '_').toLowerCase();
    const pictureUrl = `https://guide.allusion.hu/profile/${strippedUserName}.png`;
    return(
      pictureUrl
    );
  }


  render() {
    return (
            <div>
              <div className="image" id="CurrentUserProfilePicture">
                <Avatar src={this.profilePictureUrl()} name={this.props.name} size={this.props.size} round={true} color={'#2C9366'} />
              </div>
            </div>
    );
  }
}

ProfilePicture.propTypes = {
      name: PropTypes.string,
      company: PropTypes.string,
      position: PropTypes.string,
      size: PropTypes.number
    }
