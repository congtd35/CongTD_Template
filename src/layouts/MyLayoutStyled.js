import { Layout, Menu } from 'antd';
import styled from "styled-components";

const { Header, Content, Sider } = Layout;

export const LayoutContainer = styled.div`
    :where(.css-dev-only-do-not-override-fpg3f5).ant-layout {
    }
`;
export const LayoutStyled = styled(Layout)`
    background-image: url(${props => props.backgroundImage});
    background-size: 100% auto;
    background-repeat: no-repeat;
    :where(.css-dev-only-do-not-override-fpg3f5).ant-layout {
    }
    min-height: 100vh;
    min-width: 100vw;
    border-radius: 0 !important;
`;

export const MenuStyled = styled(Menu)`
  flex: 1;
  background: ${props => props.bgColor} !important;
  .ant-menu-item {
    color: #fff
  }
  font-size: 16px;
`;

export const LayoutInside = styled(Layout)`
  background-color: ${props => props.backgroundColor} !important;
`;

export const MySider = styled(Sider)`
  display: flex;
  height: 100%;
  flex-direction: column !important;
  .ant-layout-sider-children {
    display:flex;
    flex-direction: column;
  }
`;

export const MyContent  = styled(Content)`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;

export const MyContentInSide = styled(Content)`
  display: flex;
  flex-direction: column;
`;

export const BreadCrumbWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 300;
  margin: 16px 0 0 16px;
  color: ${props => props.color}
`;

export const MyHeader = styled(Header)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: none;
`;

export const ContentMain = styled.div`
  margin: 20px;
  border-radius: 26px;
  background: #fff;
  flex: 1;
  padding: 16px;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const ProviderContainer = styled.div`
  display:flex;
  align-items: center;
`;

export const NoLayout = styled.div`
  height: 100vh;
  width: 100vw;
`;