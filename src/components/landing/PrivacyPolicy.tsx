'use client';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './PrivacyPolicy.module.css';

import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Set last updated date
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const today = new Date().toLocaleDateString('en-US', options);
    setLastUpdated(today);

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hash !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.privacyPolicy}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Privacy Policy</h1>
          <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.lastUpdated}>Last Updated: {lastUpdated || 'October 26, 2023'}</div>
          
          <p>Welcome to Calry AI. Your privacy is critically important to us. This Privacy Policy explains how <strong>Calry AI</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and safeguards your information when you use our mobile application and services (the &quot;Service&quot;).</p>
          
          <p>Please read this policy carefully. <strong>By using Calry AI, you consent to the practices described in this policy.</strong> If you do not agree with this policy, please do not use our Service.</p>
          
          <div className={styles.tldr}>
            <h3>A Quick Summary (TL;DR)</h3>
            <p>We believe in transparency. Here&apos;s a simplified overview:</p>
            <ul>
              <li><strong>We Need Photos to Work:</strong> The core feature of Calry AI is to analyze photos of your food to estimate calories and nutrition. We collect these photos to provide this service.</li>
              <li><strong>We Protect Your Data:</strong> Your personal health data and photos are treated with care. We use industry-standard security measures and do not sell your personal information to third parties.</li>
              <li><strong>You&apos;re in Control:</strong> You can view, update, or delete your data at any time through the app settings.</li>
              <li><strong>AI Improvement:</strong> With your permission, we may use anonymized data to improve our AI models for everyone. You can opt out of this.</li>
            </ul>
          </div>
          
          <h2 id="information-we-collect">1. Information We Collect</h2>
          
          <h3>a) Information You Provide Directly:</h3>
          <ul>
            <li><strong>Account Data:</strong> Email address, username, and password when you create an account.</li>
            <li><strong>Profile and Health Data:</strong> Information you enter to personalize your experience, such as age, weight, height, gender, health goals, and dietary preferences.</li>
            <li><strong>User Content:</strong> This is the core of our service. It includes the <strong>photos and videos you capture or upload</strong> for food scanning, and any manual text entries you make about your meals.</li>
          </ul>
          
          <h3>b) Information Collected Automatically:</h3>
          <ul>
            <li><strong>Usage Data:</strong> Information about how you interact with the Service (e.g., features used, time spent, frequency of scans).</li>
            <li><strong>Device Information:</strong> Data about your device, including operating system (iOS/Android), device model, unique device identifiers, and IP address. This helps us ensure compatibility and troubleshoot issues.</li>
          </ul>
          
          <h2 id="how-we-use-information">2. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>To Provide the Core Service:</strong> Analyzing your food photos to provide calorie and nutrition estimates.</td>
                <td>Performance of a Contract</td>
              </tr>
              <tr>
                <td><strong>To Personalize Your Experience:</strong> Tailoring your dashboard, goals, and food recommendations based on your profile and history.</td>
                <td>Legitimate Interest / Consent</td>
              </tr>
              <tr>
                <td><strong>To Improve & Train Our AI:</strong> Using anonymized and aggregated scan data to enhance the accuracy of our food recognition algorithms.</td>
                <td>Legitimate Interest (with opt-out)</td>
              </tr>
              <tr>
                <td><strong>To Communicate with You:</strong> Sending you essential service-related notices (e.g., security alerts, policy changes) and, if you opt-in, promotional messages.</td>
                <td>Legitimate Interest / Consent</td>
              </tr>
              <tr>
                <td><strong>To Maintain Security:</strong> Protecting our Service and users from fraud, abuse, and security threats.</td>
                <td>Legitimate Interest</td>
              </tr>
            </tbody>
          </table>
          
          <h2 id="how-we-share-information">3. How We Share Your Information</h2>
          <p>We <strong>do not sell</strong> your personal information. We only share your data in the following limited circumstances:</p>
          
          <ul>
            <li><strong>With Trusted Service Providers:</strong> We work with third-party vendors who help us operate our Service (e.g., cloud storage providers like AWS/Google Cloud, data analytics services, customer support platforms). These partners are contractually bound to handle your data confidentially and only on our instructions.</li>
            <li><strong>For Legal Reasons:</strong> We may disclose information if we believe it is necessary to comply with a legal obligation, protect our rights, or ensure the safety of our users.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred to the new entity, subject to the same Privacy Policy.</li>
          </ul>
          
          <h2 id="your-rights">4. Your Rights and Choices (You Are in Control)</h2>
          <p>You have the following rights regarding your personal data:</p>
          
          <ul>
            <li><strong>Access and Update:</strong> You can review and change your account information directly in the app&apos;s settings.</li>
            <li><strong>Data Portability:</strong> You can request an export of your data.</li>
            <li><strong>Deletion:</strong> You can delete your account and all associated personal data permanently through the app settings or by contacting us. This action is irreversible.</li>
            <li><strong>Opt-Out of AI Training:</strong> In the app settings, you can toggle off the option to &quot;Use my data to improve Calry AI.&quot; This will prevent your anonymized data from being used for model training.</li>
            <li><strong>Marketing Communications:</strong> You can unsubscribe from promotional emails at any time using the link provided in those emails.</li>
          </ul>
          
          <h2 id="data-retention">5. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. When you delete your account, we will initiate the process of deleting your personal data from our active databases. Some anonymized data may be retained for analytical purposes.</p>
          
          <h2 id="security">6. Security of Your Information</h2>
          <p>We implement administrative, technical, and physical security measures designed to protect your personal information. However, no electronic transmission or storage method is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
          
          <h2 id="international-transfers">7. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy, regardless of where it is processed.</p>
          
          <h2 id="children-privacy">8. Children&apos;s Privacy</h2>
          <p>Calry AI is not directed to individuals under the age of <strong>13</strong> (or 16 in the EEA/UK). We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.</p>
          
          <h2 id="changes">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy to reflect changes in our practices. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Service after any change signifies your acceptance of the updated policy.</p>
          
          <h2 id="contact">10. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> aicalry.app@gmail.com</p>
            {/* <p><strong>Address:</strong> [Your Company Name, Address - Optional but adds legitimacy]</p> */}
          </div>
        </div>
      </div>

      <Footer />

      <BackToTopButton onClick={scrollToTop} />
    </div>
  );
};

// Back to top button component
const BackToTopButton = ({ onClick }: { onClick: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href="#" 
      className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      ↑
    </a>
  );
};

export default PrivacyPolicy;