import React, { useContext } from 'react';

import { Box, Hidden, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import Logo from '../../../components/atoms/Logo';
import { SidebarContext } from '../../../contexts/SidebarContext';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';

const HeaderWrapper = styled(Box)(
    ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: ${theme.header.background};
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`,
);

const Header = () => {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

    return (
        <HeaderWrapper display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
                <Hidden lgUp>
                    <Logo />
                </Hidden>
            </Box>
            <Box display="flex" alignItems="center">
                <HeaderUserbox />
                <Hidden lgUp>
                    <Tooltip arrow title="Toggle Menu">
                        <IconButton color="primary" onClick={toggleSidebar}>
                            {!sidebarToggle ? <MenuTwoToneIcon /> : <CloseTwoToneIcon />}
                        </IconButton>
                    </Tooltip>
                </Hidden>
            </Box>
        </HeaderWrapper>
    );
};

export default Header;
