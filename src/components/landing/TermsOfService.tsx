'use client';

import { useEffect, useState } from 'react';
import styles from './PrivacyPolicy.module.css';
import { Header } from './Header';
import { Footer } from './Footer';

const TermsOfService = () => {
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
          <h1>Terms of Service</h1>
          <p>Please read these terms carefully before using Calry AI</p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.lastUpdated}>Last Updated: {lastUpdated || 'October 26, 2023'}</div>
          
          <div className={styles.importantNotice}>
            <h3>Important Notice</h3>
            <p><strong>Calry AI is not a medical application.</strong> The calorie and nutrition estimates provided by our AI are for informational purposes only and should not be considered medical advice. Always consult with a healthcare professional before making significant changes to your diet.</p>
          </div>
          
          <p>Welcome to Calry AI. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Calry AI mobile application, website, and services (collectively, the &quot;Service&quot;). Please read these Terms carefully before using our Service.</p>
          
          <p>By accessing or using Calry AI, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.</p>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>1</span> Account Registration</h3>
            <p>To access certain features of Calry AI, you may need to register for an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and accept all risks of unauthorized access</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
            <p>You must be at least 13 years old to use Calry AI. If you are under 18, you represent that you have your parent or guardian&apos;s permission to use the Service.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>2</span> License to Use</h3>
            <p>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download, install, and use Calry AI for your personal, non-commercial purposes.</p>
            <p>You agree not to:</p>
            <ul>
              <li>Copy, modify, or create derivative works of the Service</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Use the Service to harm, threaten, or harass others</li>
            </ul>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>3</span> User Content</h3>
            <p>Calry AI allows you to upload, submit, store, send, or receive content, including food photos, nutritional data, and health information (&quot;User Content&quot;). You retain ownership of your User Content.</p>
            <p>By submitting User Content, you grant us a worldwide, royalty-free license to use, host, store, reproduce, modify, and analyze your User Content solely for the purpose of providing and improving the Service. This includes using your anonymized data to train our AI models.</p>
            <p>You are solely responsible for your User Content and agree that it will not:</p>
            <ul>
              <li>Infringe any third-party rights, including copyright, trademark, or privacy rights</li>
              <li>Contain unlawful, defamatory, or inappropriate material</li>
              <li>Contain malicious code or viruses</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>4</span> AI-Powered Estimates</h3>
            <p>Calry AI uses artificial intelligence to analyze food photos and provide calorie and nutrition estimates. You acknowledge and agree that:</p>
            <ul>
              <li>These estimates are approximations and may not be 100% accurate</li>
              <li>Accuracy may vary based on photo quality, lighting, and food presentation</li>
              <li>We continuously work to improve accuracy but do not guarantee precision</li>
              <li>You should use these estimates as a guide rather than absolute measurements</li>
              <li>For specific dietary needs or medical conditions, consult a nutritionist or healthcare provider</li>
            </ul>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>5</span> Subscription and Payments</h3>
            <p>Calry AI may offer both free and premium subscription tiers. For premium subscriptions:</p>
            <ul>
              <li>Payment will be charged to your chosen payment method</li>
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              <li>You can manage your subscription and turn off auto-renewal in your account settings</li>
              <li>All fees are non-refundable except as required by law or as otherwise stated</li>
              <li>We reserve the right to change subscription fees with 30 days&apos; notice</li>
            </ul>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>6</span> Intellectual Property</h3>
            <p>The Calry AI Service, including its design, features, and functionality, is owned by us and protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written consent.</p>
            <p>All rights not expressly granted to you in these Terms are reserved by us.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>7</span> Termination</h3>
            <p>You may stop using our Service at any time by deleting your account.</p>
            <p>We may suspend or terminate your access to the Service if you violate these Terms. Upon termination, your right to use the Service will immediately cease.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>8</span> Disclaimer of Warranties</h3>
            <p>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p>WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>9</span> Limitation of Liability</h3>
            <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CALRY AI, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
            <ul>
              <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE</li>
              <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE</li>
              <li>ANY CONTENT OBTAINED FROM THE SERVICE</li>
              <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
            </ul>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>10</span> Indemnification</h3>
            <p>You agree to defend, indemnify, and hold harmless Calry AI and its affiliates, licensors, and service providers from any claim, liability, damage, loss, or expense (including attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Service.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>11</span> Governing Law</h3>
            <p>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>12</span> Changes to Terms</h3>
            <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
          </div>
          
          <div className={styles.termSection}>
            <h3><span className={styles.termNumber}>13</span> Contact Information</h3>
            <p>If you have any questions about these Terms, please contact us at:</p>
            
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> aicalry.app@gmail.com</p>
              {/* <p><strong>Address:</strong> [Your Company Name, Address]</p> */}
            </div>
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

export default TermsOfService;