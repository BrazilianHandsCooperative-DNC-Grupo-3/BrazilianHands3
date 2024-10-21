import './index.scss';
import NavBar from '../../components/navBar/navBar.jsx';
import Footer from '../../components/footer/footer'

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar/>

      <section className='container'>
        <div className='policy'>
          <h1 className='priv'>BrazilianHands Cooperative Privacy Policy</h1>
          <h3 className='poli'>1. Introduction</h3>
          <p className='spriv'>Your privacy is important to us. This Privacy Policy describes how we collect, use, store, and protect your personal information in compliance with the General Data Protection Law (LGPD) and other applicable laws. By accessing our website, you agree to the practices described in this policy.</p>
          
          <h3 className='poli'>2. Collection of Personal Information</h3>
          <p className='spriv'>
            We collect personal information that you provide directly, such as:<br/>
            Name<br/>
            Email address<br/>
            Phone number<br/>
            Address<br/>
            Financial information (when applicable)<br/><br/>
            Additionally, we may automatically collect information such as:<br/>
            Browsing data (IP addresses, accessed pages, access times)<br/>
            Cookies and similar technologies
          </p>

          <h3 className='poli'>3. Use of Information</h3>
          <p className='spriv'>
            The collected information is used for:<br/>
            Collecting customer and cooperative member information for service use<br/>
            Processing financial transactions<br/>
            Communicating with you about our services and offers<br/>
            Improving our website and user experience<br/>
            Fulfilling legal and regulatory obligations
          </p>

          <h3 className='poli'>4. Information Sharing</h3>
          <p className='spriv'>
            We do not sell or rent your personal information to third parties. We may share your information with:<br/>
            Service providers who help us operate the website or perform activities on our behalf<br/>
            Competent authorities when required by law
          </p>

          <h3 className='poli'>5. Storage and Security</h3>
          <p className='spriv'>
            Your personal information is stored on secure servers and protected by appropriate security measures. We retain your information for as long as necessary to fulfill the purposes described in this policy or as required by law.
          </p>

          <h3 className='poli'>6. Your Rights</h3>
          <p className='spriv'>
            You have the right to:<br/>
            Access your personal information<br/>
            Request the deletion of your information<br/>
            Revoke consent for data processing<br/><br/>
            To exercise these rights, contact us through the means indicated in the contact section.
          </p>

          <h3 className='poli'>7. Privacy Policy Changes</h3>
          <p className='spriv'>
            We reserve the right to update this Privacy Policy at any time. Changes will be posted on our website with the date of the last update.
          </p>

          <h3 className='poli'>8. Contact</h3>
          <p className='spriv'>
            If you have any questions or concerns about this Privacy Policy or the treatment of your personal information, contact us:<br/>
            Email: [your-email@cooperative.ie]<br/>
            Phone: [phone number]<br/>
            Address: [cooperative address]
          </p>

          <h3 className='poli'>9. Acceptance</h3>
          <p className='spriv'>
            By using our website, you accept the terms of this Privacy Policy. If you do not agree, we ask that you do not use our services.<br/><br/>
            This policy was created to ensure transparency and protection of our users' personal data. We thank you for your trust in Brazilian Hands Cooperative!
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
