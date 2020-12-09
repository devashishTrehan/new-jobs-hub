import * as React from 'react';
import { GetFilterOptions } from '../Services/Api.service';
import { UserContext } from './User.context';

interface user {
    user: object,
    logout: Function
}

export const FilterAttribsContext = React.createContext<any>({});


export function FilterAttribsContextProvider(props: any) {

    const [filterAttribs, setFilterAttribs]: any = React.useState({});
    const [cities, setCities]: any = React.useState([]);
    const [skills, setSkills]: any = React.useState([]);
    const [loading, setLoading]: any = React.useState(true);


    const getFilterOptions = async () => {
        if (!Object.keys(filterAttribs).length) {

            console.log('filter options loading');
            let response = await GetFilterOptions();
            if (response?.data) {
                setFilterAttribs(response.data);
                makeCityOption(response.data.location);
                makeSkillOption(response.data.skill);
                console.log('filter options', response.data);
                return response.data;
            } else {
                return null;
            }
        } else {
            return filterAttribs;
        }
    }

    const makeCityOption = (list: any) => {
        // let userCity = null;
        let cities = list?.map((city: any) => {
            return city.label.split(',')[0];
        })
        setCities(cities);
    }

    const makeSkillOption = (list: any) => {
        // let userCity = null;
        let skills = list?.map((city: any) => {
            return (city.label).replace('(', '--').split('--')[0];
        })
        setSkills(skills);
    }


    return (
        <FilterAttribsContext.Provider value={{
            filterOptions: filterAttribs,
            cities: cities,
            skills: skills,
            getFilterOptions: getFilterOptions,
        }}>
            {
                props.children
            }
        </FilterAttribsContext.Provider>
    );
}
