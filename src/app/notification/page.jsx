import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Logo from '@/components/logo/Logo';
import Avatar from '@/components/avatar/Avatar';
import NotificationCard from '@/components/notificationcard/NotificationCard';

export default function Notification() {
  return (
    <PageLayout className={styles.container} active={5}>
        <div className={styles.top}>
            <Logo/>
            <Avatar/>
        </div>
        <div className={styles.pageHeading}>
            <p className={styles.headingText}>Notifications</p>
        </div>
        <div className={styles.notifications}>
          <NotificationCard/>
          <NotificationCard/>
          <NotificationCard/>
          <NotificationCard/>
          <NotificationCard/>
          <NotificationCard/>
        </div>
    </PageLayout>
  );
};
