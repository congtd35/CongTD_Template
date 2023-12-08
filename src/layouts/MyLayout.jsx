import React, { useState } from 'react';
import styles from './MyLayout.module.scss';
import {
  BreadCrumbWrapper,
  ContentMain,
  LayoutContainer,
  LayoutInside,
  LayoutStyled,
  MenuStyled,
  MyContent,
  MyContentInSide,
  MyHeader,
  MySider,
  NoLayout,
  ProviderContainer,
} from './MyLayoutStyled';
import { FolderOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectBackground } from '../redux/slice/backgroundSlice';
import { selectTheme } from '../redux/slice/themeSlice';
import { useTranslation } from 'react-i18next';
import LanguageProvider from '../components/LanguageProvider/LanguageProvider';
import ButtonSetting from '../components/ButtonSetting/ButtonSetting';
import ConfigDrawer from '../components/ConfigDrawer/ConfigDrawer';
import Notification from '../components/Notification/Notification';
import AvatarUser from '../components/AvatarUser/AvatarUser';
import LightDark from '../components/LightDark/LightDark';
import AnimationBox from '../animation/AnimationBox';
import { useLocation } from 'react-router';
import paths from '../constants/paths';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MyLayout = ({ children }) => {
  const { t } = useTranslation();
  const menuConstants = [
    {
      key: paths.home,
      label: <Link to={paths.home}>
        {t('sider.homePage')}
      </Link>,
      icon: <UserOutlined />,
    },
    {
      key: paths.documentManagement,
      label: <Link to={paths.documentManagement}>
        {t('sider.documentManagement')}
      </Link>,
      icon: <FolderOutlined />,
    },
  ];
  const [collapsed, setCollapsed] = useState(true);
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const background = useSelector(selectBackground);
  const theme = useSelector(selectTheme);
  const location = useLocation();
  if (location.pathname === paths.login) {
    return <NoLayout>
      {children}
    </NoLayout>;
  }
  return <LayoutContainer>
    <AnimationBox />
    <ButtonSetting openSetting={() => setIsOpenSetting(true)} />
    <ConfigDrawer isOpen={isOpenSetting} onClose={() => setIsOpenSetting(false)} />
    <LayoutStyled backgroundimage={background} className={styles.layout}>
      <MyContent className={styles.content}>
        <LayoutInside backgroundcolor={theme.background}>
          <MySider
            width={200}
            collapsed={collapsed}
            className={styles.sider}
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
          >
            <MenuStyled mode='inline' items={menuConstants} bgcolor={theme.menu} />
          </MySider>
          <MyContentInSide>
            <MyHeader backgroundcolor={theme.background}>
              <div>LOGO</div>
              <ProviderContainer>
                <LightDark />
                <Notification />
                <LanguageProvider />
                <AvatarUser />
              </ProviderContainer>
            </MyHeader>
            <BreadCrumbWrapper color={theme.breadcrumb}>
              Home / Admin
            </BreadCrumbWrapper>
            <ContentMain>
              {children}
            </ContentMain>
          </MyContentInSide>
        </LayoutInside>
      </MyContent>
    </LayoutStyled>
  </LayoutContainer>;
};
MyLayout.propTypes = {
  children: PropTypes.any,
};
export default MyLayout;