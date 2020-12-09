import * as React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { CopyRightStrip } from '../Components/Footer.component';
import { Loader } from '../Components/Loader.component/Loader.component';
import { NavBar } from '../Components/Navbar.component';
import { NoResult } from '../Components/NoResult.component';
import { SomethingWentWrong } from '../Components/SomethingWrong.component';
import { AppContext } from '../Context/App.context';
import { FilterAttribsContext } from '../Context/FilterAttribs.context';
import { UserContext } from '../Context/User.context';
import { GetProfileData, } from '../Services/Api.service';
import { JobStatusList, Routes, Theme } from '../Services/App.service';
import '.././Pages/Profile.page/Profile.page.css';


export const ProfileContext = React.createContext<any>({});

function ProfileContextProvider(props: any) {

    const [profileData, setProfileData]: any = React.useState({
        profile_data: {},
        education: [],
        skills_list: [],
        headline: '',
        resume: {},
        summary: '',
        experience: [],
        projects: [],
        profile_images: {},
        somethingWrong: false,
    });

    // const [profileData, setProfileData]: any = React.useState({
    //   profile_data: {
    //     user_id: 8,
    //     full_name: "dev trehan",
    //     candidate_current_location: null,
    //     primary_number: null,
    //     alternate_phone: null,
    //     headline: 'efreg hsudhrjn',
    //     summary: ' ehggb thyt jy juyj',
    //     employment_status: false,
    //     profile_completion_percentage: 53,
    //     email: "dev@mail.com",
    //     date_of_birth: null,
    //     email_verified: false,
    //     gender: "Prefer not to answer",
    //     nationality: "",
    //     joined_on: "2020-11-20T11:04:13.327596",
    //     marital_status: "Prefer not to answer"
    //   },
    //   education: [1, 2,],
    //   headline: 'efreg hsudhrjn',
    //   summary: ' ehggb thyt jy juyj',
    //   skills_list: [1, 2, 3],
    //   profile_images: {
    //     image: "/media/default.jpg",
    //     cover_image: "/media/cover_images/dev_trehan_profile_cover_image_jpeg_Abt5gsD"
    //   },
    //   experience: [1, 2, 3],
    //   resume: {
    //     id: 5,
    //     has_no_resume: true,
    //     resume_file: null,
    //     resume_uploaded_at: null
    //   },
    //   projects: []
    // });

    const [message, setMessage]: any = React.useState('');
    const [loading, setLoading]: any = React.useState(false);
    const [requestedSlug, setRequestedSlug]: any = React.useState('');
    const { user, token, setUser } = React.useContext(UserContext);
    const { openSnackbar, showAlert } = React.useContext(AppContext);
    const { getFilterOptions } = React.useContext(FilterAttribsContext);

    const history = useHistory();
    const location = useLocation();
    const RouteMatch: any = useRouteMatch();

    const getProfileData = async (profileSlug: string = user.slug) => {

        if (user?.id) {
            console.log(user,profileSlug)
            if ((user?.slug === profileSlug) || ((location.pathname.split('/')[1]) === 'profile')) {

                setLoading(true);
                let response = await GetProfileData(token?.access, profileSlug);
                setLoading(false);

                if (response) {

                    if (response.is_authenticated) {

                        if (response?.status == false) {

                            setMessage(response.message[0]);

                        } if (response?.status) {
                            setMessage(null);
                            setProfileData(response?.data);
                        }
                    } else {
                        setProfileData((prev: any) => {
                            return { ...prev, somethingWrong: true }
                        })
                        setMessage('You are not authorized to access');
                    }
                } else {
                    setProfileData((prev: any) => {
                        return { ...prev, somethingWrong: true }
                    })
                    setMessage('Sorry! \n Something went wrong');
                }

            } else {
                setProfileData((prev: any) => {
                    return { ...prev, somethingWrong: true }
                })
                setMessage('You are not Authorized to access!');
            }
        } else {

            history.replace({ pathname: Routes.User, hash: Routes.SignInHashes.exist })
        }

    }

    React.useEffect(() => {
        let userSlug = RouteMatch?.params?.slug;
        console.log('route match', userSlug)
        if (userSlug) {
            setRequestedSlug(userSlug);
            getProfileData(userSlug);
        }
        getFilterOptions();
    }, [RouteMatch.params])


    const updateProfileData = (field: string, data: any) => {

        setProfileData((prev: any) => {
            return {
                ...prev,
                [field]: data
            }
        })
    }



    const RequestResponseHandler = (response: any, section: string) => {
        if (response) {
            if (response.is_authenticated) {

                if (response?.status == false) {

                    openSnackbar(response.message);

                } if (response?.status) {
                    openSnackbar(response.message, 'success');
                    updateProfileData(section, response.data);
                }
            } else {
                openSnackbar(['You are not authorized to access']);
            }
        } else {
            openSnackbar(['Sorry! \n Something went wrong']);
        }
    }


    return (
        <ProfileContext.Provider value={{
            profileDetails: profileData,
            userProfileSlug: profileData?.profile_data?.slug,
            setProfileData: (field: string, data: any) => updateProfileData(field, data),
            RequestResponseHandler: (response: any, section: string) => RequestResponseHandler(response, section)
        }}>
            <>
                <NavBar home={true} />
                {
                    loading ?
                        <Loader />
                        : message && (profileData?.somethingWrong) ? <SomethingWentWrong message={message} />

                            : message && !profileData?.id ? <NoResult message={message} />

                                : <div>

                                    {
                                        props.children
                                    }

                                </div>
                }
                <CopyRightStrip color={'#000'} />

            </>
        </ProfileContext.Provider>
    );

}

export default ProfileContextProvider;