import * as React from 'react';
import { GetFilterOptions, GetJobList, GetSearchedJobList, GetUserJobList } from '../Services/Api.service';
import { UserContext } from './User.context';



export const JobListContext = React.createContext<any>({});


export function JobListContextProvider(props: any) {

    const [joblist, setJoblist]: any = React.useState([
        // { "id": 1, "job_title_name": "Python Developer", "job_description_summary": "Job Description\r\n\r\nWe are looking for a Python Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-sid", "salary_offered": "4-8 Lakh INR per Year", "time_difference": "18 days ago", "type": "FULLTIME", "experience_required": "1-3 years", "company_name": "Test Company", "industry_list": ["Information & Technology", "Software"], "city_list": ["Ghaziabad", "New Delhi", "Hyderabad"], "education_list": ["Bachelor of Technology"], "slug": "python-developer-test-company-1-3-years7ghdj" },
        // { "id": 2, "job_title_name": "Software Developer", "job_description_summary": "Job Description\r\n\r\nWe are looking for a Python Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-sid", "salary_offered": "2-3 Lakh INR per Year", "time_difference": "22 days ago", "type": "FULLTIME", "experience_required": "4-8 years", "company_name": "Test Company", "industry_list": ["Information & Technology", "Software"], "city_list": ["New Delhi", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "software-developer-test-company-4-8-yearsri7l6" },
        // { "id": 3, "job_title_name": "Tax Manager", "job_description_summary": "Delivering a full range of tax services in compliance with laws and regulations within timeframe\r\nBuilding relationships and interacting with clients to provide excellent planning, consulting and expe", "salary_offered": "3-5 Lakh INR per Year", "time_difference": "30+ days ago", "type": "FULLTIME", "experience_required": "2-3 years", "company_name": "Test Company", "industry_list": ["Accounting", "Banking"], "city_list": ["Ghaziabad", "Pune"], "education_list": ["Bachelor of Commerce"], "slug": "tax-manager-test-company-2-3-yearsc70ha" },
        // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
        // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
        // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
        // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
        // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
    ]);
    const [userJobList, setUserjobList]: any = React.useState([]);
    const [message, setMessage] = React.useState('');
    const [loading, setLoding] = React.useState(false);
    const { token, user } = React.useContext(UserContext);


    const JobResponseHandler = (response: any) => {
        console.log('jobs', response)
        if (response) {
            if (response.is_authenticated) {

                if (response?.status == false) {
                    setMessage(response.message);

                } if (response?.status) {
                    if (response?.data?.length) {
                        setMessage('');
                        setJoblist(response?.data);
                    } else {
                        setJoblist([]);
                        setMessage('Sorry? \n No Job found')
                    }
                }
            } else {
                setJoblist(null);
                setMessage('You are not authorized to access');
            }
        } else {
            setJoblist(null);
            setMessage('Sorry! \n Something went wrong');
        }
    }

    const UserJobResponseHandler = (response: any) => {
        console.log('jobs', response)
        if (response) {
            if (response.is_authenticated) {

                if (response?.status == false) {
                    setMessage(response.message);

                } if (response?.status) {
                    if (response?.data?.length) {
                        setMessage('');
                        setUserjobList(response?.data);
                    } else {
                        setUserjobList([]);
                        setMessage('Sorry? \n No Job found')
                    }
                }
            } else {
                setUserjobList(null);
                setMessage('You are not authorized to access');
            }
        } else {
            setUserjobList(null);
            setMessage('Sorry! \n Something went wrong');
        }
    }


    const getJobList = async (filters: any) => {
        setLoding(true);
        let response = await GetJobList(token?.access, filters, user?.id);
        setLoding(false);
        JobResponseHandler(response);
        return showFirstJob(response);

    }

    const getUserJobList = async (status: string) => {
        setLoding(true);
        let response = await GetUserJobList(token?.access, status, user?.slug);
        setLoding(false);
        UserJobResponseHandler(response);
    }

    const FindJobIndex = (jobs: any, slug: any) => {
        for (let i = 0; i < jobs.length; i++) {
            if (slug === jobs[i].slug) {
                return i;
            } else if (i === jobs.length - 1) {
                return -1;
            }
        }
        return -1;
    }

    const updateJob = (slug: string, updateObject: any) => {
        console.log('id', slug, updateObject);

        setJoblist((prev: any) => {
            // let list = [...prev];
            let index = FindJobIndex(prev, slug);
            console.log('index', index);
            if (index >= 0) {
                prev[index] = { ...prev[index], ...updateObject }
            }
            let newList = [...prev];
            console.log(newList[index]);
            return newList;
        })
    }


    const showFirstJob = (response: any) => {
        let windowWidth = window.innerWidth;
        if (response?.data?.length && windowWidth > 960) {
            return {
                toShow: true,
                slug: response?.data[0]?.slug,
                isDesktop: true
            }
        } else {
            return {
                toShow: false,
            }
        }
    }


    const getSearchedJobList = async (keyword: string, location: string) => {
        console.log('search', keyword, location)
        setLoding(true);
        let response = await GetSearchedJobList(token?.access, keyword, location, user?.id);
        setLoding(false);
        JobResponseHandler(response);
        return showFirstJob(response);
    }



    return (
        <JobListContext.Provider value={{
            joblist: joblist,
            _UserJobList: userJobList,
            loading: loading,
            message: message,
            getJobList: getJobList,
            getUserJobList: getUserJobList,
            updateJob: updateJob,
            getSearchedJobList: getSearchedJobList
        }}>
            {
                props.children
            }
        </JobListContext.Provider>
    );
}
