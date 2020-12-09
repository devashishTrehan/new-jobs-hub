import { faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import * as React from 'react';
import { FilterAttribsContext } from '../Context/FilterAttribs.context';
import { Theme } from '../Services/App.service';
import { List, ListItem, MenuList, Popover, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const listItemHeight = 34;
const listHeight = 34 * 12;

const useStyles = makeStyles({
    container: {
        margin: '10px 20px',
        width: 'calc(100% - 40px)',
        overflowX: 'hidden',
        '&>div': {
            margin: '0 -5px',
            display: 'flex',
            overflowX: 'scroll',
            flexDirection: 'row',
            paddingBottom: 10,
            justifyContent: 'flex-start',
            flexWrap: 'nowrap',
            '&::-webkit-scrollbar': {
                height: 5,
                borderRadius: 5,
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: '#eee',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: Theme.primary + 'aa',
            },
        }
    },
    listItem: {
        padding: '0px 10px',
        fontSize: '14px !important',
        fontWeight: 100
    },
    checkbox: {
        padding: '5px 5px 5px 0'
    },
    list: {
        overflowY: 'scroll',
        paddingTop: 45,
        maxHeight: listHeight
    },
    submitButtonWrap: {
        position: 'absolute',
        padding: 10,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 1,
        '&>button': {
            width: '100%'
        }
    },
})

export const Filters = (props: any) => {

    const { getFilterOptions } = React.useContext(FilterAttribsContext);
    const styles = useStyles();
    const [filterFields, setFilterFields]: any = React.useState({
        location: {
            anchor: null,
            name: 'location',
            label: 'Location',
            defaultLabel: 'Location',
            value: [],
            options: []
        },

        skill: {
            anchor: null,
            name: 'skill',
            label: 'Skill',
            defaultLabel: 'Skill',
            value: [],
            options: []
        },

        industry: {
            anchor: null,
            name: 'industry',
            label: 'Industry',
            defaultLabel: 'Industry',
            value: [],
            options: []
        },

        jobType: {
            anchor: null,
            name: 'jobType',
            label: 'Job-type',
            defaultLabel: 'Job-type',
            value: [],
            options: []
        },

        education: {
            anchor: null,
            name: 'education',
            label: 'Education',
            defaultLabel: 'Education',
            value: [],
            options: []
        },

        remote: {
            anchor: null,
            name: 'remote',
            label: 'Remote',
            defaultLabel: 'Remote',
            value: [],
            options: [
                // { value: true, label: 'temprorily remote (COVID-19)' },
                // { value: false, label: 'In office' },
            ]
        },
        company: {
            anchor: null,
            name: 'company',
            label: 'company',
            defaultLabel: 'company',
            value: [],
            options: []
        },

    });

    const filters = Object.keys(filterFields);
    const isMobile = useMediaQuery('(max-width:769px)');

    const getFilterFields = async () => {
        let _filterOptions = await getFilterOptions();
        if (_filterOptions) {
            setFilterOptions(_filterOptions);
        }
    }

    const setFilterOptions = (options: any) => {
        let fields = Object.keys(options);
        if (fields.length) {
            fields.forEach((field) => {
                updateFieldOption(field, options[field]);
            })
        }
    }

    React.useEffect(() => {
        getFilterFields();
    }, [])

    const makeFilterForm = (newFilters = filterFields) => {
        let form: any = {};
        filters.forEach(field => {
            form[field] = newFilters[field].value;
        })
        return form;
    }


    const handleOpen = (event: any, filterField: string) => {
        if (filterFields[filterField]?.options?.length) {

            setFilterFields((prev: any) => {
                return {
                    ...prev,
                    [filterField]: { ...prev[filterField], anchor: event.currentTarget }
                }
            });
        }

    };

    const handleClose = (filterField: string) => {
        setFilterFields((prev: any) => {
            return {
                ...prev,
                [filterField]: { ...prev[filterField], anchor: null }
            }
        });
    };

    const handleSelect = (filterField: any) => {
        let newFilters: any = [];
        setFilterFields((prev: any) => {
            newFilters = {
                ...prev,
                [filterField]:
                {
                    ...prev[filterField],
                    anchor: null,
                }
            }
            return newFilters;
        });
        let form = makeFilterForm(newFilters);
        props.onChange(form);
    };

    const findIndex = (array: any, value: any) => {
        for (let i = 0; i < array.length; i++) {

            if (value === array[i]) {
                return i;
            } else if (i === array.length - 1) {
                return null;
            }
        }
    }

    const findIndexInFilter = (array: any, value: any) => {
        for (let i = 0; i < array.length; i++) {

            if (value === array[i]?.value) {
                return i;
            } else if (i === array.length - 1) {
                return null;
            }
        }
    }

    const handleSelect2 = (filterField: string, text: string, value: any) => {

        setFilterFields((prev: any) => {

            let values = prev[filterField].value;
            let valueIndex = findIndex(values, value);
            let toDelete = valueIndex || valueIndex === 0 ? true : false;
            if (toDelete) {
                values.splice(valueIndex, 1);
                if (values.length === 1) {
                    let lastItemIndex = findIndexInFilter(prev[filterField].options, prev[filterField].value[0]);
                    if (lastItemIndex !== null && lastItemIndex !== undefined) {
                        text = prev[filterField].options[lastItemIndex]?.label;
                    }
                }
            } else {
                values.push(value);
            }

            let newFilters = {
                ...prev,
                [filterField]:
                {
                    ...prev[filterField],
                    label: text,
                    value: values
                }
            }
            return newFilters;
        });
    };

    const updateFieldOption = (filterField: string, options: any) => {
        if (options?.length) {
            setFilterFields((prev: any) => {

                return {
                    ...prev,
                    [filterField]: { ...prev[filterField], options: options }
                }
            });
        }
    };


    const handleDelete = (field: string) => {
        let newFilters: any = {};
        setFilterFields((prev: any) => {
            newFilters = {
                ...prev,
                [field]:
                {
                    ...prev[field],
                    label: prev[field].defaultLabel,
                    value: []
                }
            }
            return newFilters;
        });
        let form = makeFilterForm(newFilters);
        props.onChange(form);
    }

    return (
        <Grid container className={styles.container} >
            <div >
                {
                    filters.map((field: any) => {
                        let currentField = filterFields[field];
                        return (
                            <span key={field} style={{ margin: 5, display: 'inline-block' }}>


                                <Chip
                                    variant={currentField?.value?.length ? 'default' : 'outlined'}
                                    color={'primary'}
                                    size='medium'
                                    style={{ padding: '5px 10px', borderRadius: Theme.radius1 }}
                                    label={
                                        currentField?.value?.length > 1 ?
                                            `${currentField.defaultLabel} (${currentField?.value?.length})`
                                            : currentField?.value?.length === 1
                                                ? currentField?.label
                                                : currentField.defaultLabel}

                                    deleteIcon={<FontAwesomeIcon icon={currentField?.value?.length ? faTimes : faCaretDown} />}
                                    onClick={(event: any) => handleOpen(event, field)}
                                    onDelete={(event: any) => {
                                        if (currentField?.value?.length) {
                                            handleDelete(field)
                                        } else {
                                            handleOpen(event, field)
                                        }
                                    }}
                                />

                                <Popover
                                    id={field}
                                    anchorEl={filterFields[field].anchor}
                                    keepMounted
                                    open={Boolean(filterFields[field].anchor)}
                                    onClose={() => handleClose(field)}
                                    getContentAnchorEl={null}
                                    PaperProps={{
                                        style: {
                                            maxHeight: listHeight + 45,
                                            minWidth: isMobile ? 200 : 250,
                                            maxWidth: isMobile ? 250 : 280,
                                            overflow: 'visible',
                                            paddingBottom: 10,
                                        }
                                    }}
                                    style={{ marginTop: 10 }}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}

                                >
                                    <div className={styles.submitButtonWrap}>
                                        <Button onClick={() => handleSelect(field)} variant='outlined' size='small' color='secondary'>Done</Button>
                                    </div>

                                    <List className={styles.list} >
                                        {
                                            filterFields[field]?.options?.map((option: any) => {

                                                return <ListItem button dense={true} key={option.value}
                                                    className={styles.listItem}
                                                    onClick={() => handleSelect2(field, option?.label, option.value)}>
                                                    <Checkbox className={styles.checkbox} checked={filterFields[field]?.value.includes(option.value)} />
                                                    <Typography noWrap>{option.label}</Typography>
                                                </ListItem>

                                            })
                                        }
                                    </List>
                                </Popover>
                            </span>
                        )
                    })
                }
            </div>
        </Grid >
    )

}