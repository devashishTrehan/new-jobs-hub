import { faCamera, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip, } from '@material-ui/core';
import * as React from 'react';
import { Loader } from '../../Components/Loader.component/Loader.component';
import { UserContext } from '../../Context/User.context';
import { Domain, UpdateCoverImage, UpdateProfileImage } from '../../Services/Api.service';
import { ProfileContext } from '../../Context/Profile.context';

import './FormPages.css';

export const HeaderSection = (props: any) => {

    const [selectedImage, setSelectedImage]: any = React.useState('');
    const [type, setType]: any = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const { user, token, setUser } = React.useContext(UserContext);
    const { RequestResponseHandler, profileDetails, userProfileSlug } = React.useContext(ProfileContext);
    const { image, cover_image } = profileDetails.profile_images;


    const getBase64 = (file: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {

            setSelectedImage(`${reader.result}`)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const onImageSelect = (event: any, _type: string) => {

        setType(_type);
        getBase64(event.target.files[0]);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const submitHandler = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        if (type === 'profile') {

            var response = await UpdateProfileImage(token?.access, userProfileSlug, { image: selectedImage });
        } else {

            var response = await UpdateCoverImage(token?.access, userProfileSlug, { cover_image: selectedImage });
        }
        setLoading(false);
        // console.log(`image upload of ${type}`, response);
        RequestResponseHandler(response, 'profile_images');
        if (response?.status) {
            setUser({ ...user, profilePicture: response.data.image })
            setModalOpen(false);
        }

    }

    return (
        <>
            <div className="clearfix"></div>

            <div className="container ">
                <div className="banner-section">

                    {/* <div className="profile-bnr">
                  <div className={'bnr-img'} >
                    <img src={cover_image ? Domain + cover_image : '/assets/bg-images/profileBanner.jpg'} />
                  </div>
                  <div className="user-info">
                    <form>
                      <label className="bg-img-change" htmlFor="cover-img" title="Change Background Img" ><FontAwesomeIcon icon={faCamera} /></label>
                      <input onChange={(event) => onImageSelect(event, 'cover')} type="file" name="" id="cover-img" />
                    </form>
                  </div>
  
                </div> */}
                    <div className="user-img">
                        <img src={image ? Domain + image : "/assets/images/defaultProfile.png"} title="Change Profile Picture" alt="Change Profile Picture" />
                        {
                            props?.isEditable ?
                                <form>
                                    <Tooltip title="Change Profile Picture" >
                                        <label className="user-img-chng" htmlFor="user-img">
                                            <FontAwesomeIcon icon={faCamera} />
                                        </label>
                                    </Tooltip>
                                    <input type="file" onChange={(event) => onImageSelect(event, 'profile')} name="" id="user-img" />
                                </form>
                                : null
                        }
                    </div>
                </div>
            </div>

            <Dialog fullWidth open={modalOpen} onClose={closeModal} className={'imageModal'}>

                <DialogTitle>Image Upload</DialogTitle>
                <DialogContent>
                    <div className='imageWrapper'>
                        <img style={{ objectFit: 'contain', maxWidth: '100%', }} src={selectedImage} id='preview-image' />
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button onClick={closeModal} color="default">Cancel</Button>
                    <Button onClick={submitHandler} color="primary" >Upload</Button>
                </DialogActions>
                {
                    loading && (
                        <Loader />
                    )
                }
            </Dialog>
        </>
    )
}