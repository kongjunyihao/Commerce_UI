import React, { useState, useEffect } from "react";

import { styled, alpha, useTheme } from '@mui/material/styles';
import { Tabs, Button, Tab } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./SearchFunctionStyle.css";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '40%',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '43ch',
        },
    },
}));

export default function SearchFunction({data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [nameEntered, setNameEntered] = useState("");


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setNameEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setNameEntered("");
    };

    return (
        <>
            {/* <Button variant="h3" sx={{marginRight: '-20px'}}>
                All
                <KeyboardArrowDownIcon />
            </Button> */}
            <Search>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={nameEntered}
                    onChange={handleFilter}
                />
                {nameEntered.length !== 0 && <Button variant="h6"
                    sx={{ display: { marginRight: 'auto' } }}>
                    <CloseIcon id="clearBtn"
                        sx={{ color: "black", fontSize: "26px" }}
                        onClick={clearInput} />
                </Button>}
            </Search>
            <Button
                variant="h6"
                sx={{ display: { marginRight: 'auto' } }}
            >
                <SearchIcon fontSize='large' />
            </Button>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value) => {
                        return (
                            <a className="dataItem" key={value.id}>
                                <p>{value.category}</p>
                            </a>
                        );
                    })}
                </div>
            )}
        </>
    );
}