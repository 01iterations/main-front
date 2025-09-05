import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalHeader from './GlobalHeader.component';
import GlobalFooter from './GlobalFooter.component';
import { LayoutContainer, MainContent } from './Layout.styles';

interface LayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <LayoutContainer>
            {!isHomePage && <GlobalHeader />}
            <MainContent>
                {children || <Outlet />}
            </MainContent>
            <GlobalFooter />
        </LayoutContainer>
    );
}

export default Layout;
