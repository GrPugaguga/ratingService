import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { SideBar } from './SideBar/SideBar';
import { Footer } from './Footer/Footer';
import { P } from '@/components';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (<div className={styles.wrapper}>
        <Header className={styles.header} />
        <SideBar className={styles.sidebar} />
        <div className={styles.body}>
            {children}
        </div>
        <Footer className={styles.footer} >
        </Footer>
    </div>


    );
};