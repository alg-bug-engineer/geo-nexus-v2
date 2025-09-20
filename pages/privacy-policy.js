// pages/privacy-policy.js

import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - GEO-Nexus</title>
        <meta name="description" content="Privacy policy for geo-nexus.cn, detailing how we collect, use, and protect your data." />
      </Head>

      <article>
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> September 19, 2025</p>
        <p>
          Welcome to <Link href="https://www.geo-nexus.cn/">GEO Nexus</Link> (hereinafter referred to as "the Website"). This Website is created and maintained by Yun Yi (芝士AI吃鱼) and is dedicated to sharing knowledge about Generative Engine Optimization (GEO) and Search Engine Optimization (SEO). We understand the importance of your privacy and are committed to protecting your personal information.
        </p>

        <p>
          This Privacy Policy is intended to explain how we collect, use, disclose, and safeguard your information when you visit our Website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you visit the Website, we may collect the following types of information:</p>
        <ul>
            <li>
                <strong>Personally Identifiable Information:</strong> If you contact us via the email address provided on our "About" page (<code>646184101@qq.com</code>), we will collect the information you voluntarily provide, such as your name, email address, and any other information included in your message. We will only use this information to respond to your inquiry.
            </li>
            <li>
                <strong>Non-Personally Identifiable Information (Collected Automatically):</strong> This Website uses Vercel Analytics to help us understand how visitors interact with the site. Vercel Analytics collects anonymous data, such as the pages you visit, the time of your visit, the referring site, your browser type, operating system, and country. This information is anonymous and cannot be traced back to a specific individual. Its sole purpose is to improve the Website's content and user experience.
            </li>
        </ul>


        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To operate and maintain the Website.</li>
          <li>To improve the content, features, and user experience of the Website.</li>
          <li>To respond to your comments, questions, and requests.</li>
          <li>To monitor and analyze usage and trends of the Website.</li>
          <li>To monetize the Website through advertising services (as detailed below).</li>
        </ul>

        <h2>3. Advertising Services (Google AdSense)</h2>
        <p>This Website plans to use or is currently using the advertising services provided by Google AdSense.</p>
        <ul>
          <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this Website or other websites.</li>
          <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to this site and/or other sites on the Internet.</li>
          <li>
            Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, you can direct users to opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices/</a>.
          </li>
        </ul>

        <h2>4. Cookie Policy</h2>
        <p>
          When you first visit the Website, we will ask for your consent to use non-essential cookies (such as those for analytics and advertising) via a banner. You can manage or delete cookies at any time through your browser settings. However, please note that disabling certain cookies may affect some functionalities of your experience on the Website.
        </p>

        <h2>5. Your Data Rights</h2>
        <p>Depending on your location (e.g., under GDPR in the EU or CCPA in California), you may have the following rights:</p>
        <ul>
            <li><strong>Right of Access:</strong> The right to access the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> The right to request that we correct any inaccurate personal data.</li>
            <li><strong>Right to Erasure:</strong> The right to request that we delete your personal data.</li>
            <li><strong>Right to Opt-Out:</strong> The right to opt out of the sale or sharing of your personal information for advertising purposes.</li>
        </ul>
        <p>To exercise these rights, please contact us using the contact information provided at the end of this policy.</p>
        
        <h2>6. Links to Third-Party Websites</h2>
        <p>
          This Website may contain links to other websites (for example, the GitHub link on the "About" page). We are not responsible for the privacy practices of these third-party sites. We encourage you to read the privacy statements of each website you visit upon leaving ours.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          This Website is intended for professionals interested in SEO and GEO and is not directed at children under the age of 13. We do not knowingly collect personally identifiable information from children.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date. We encourage you to review this page periodically for any updates.
        </p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions or suggestions regarding this Privacy Policy, please contact us at:</p>
        <ul>
          <li><strong>Email:</strong> <code>646184101@qq.com</code></li>
        </ul>
      </article>
    </>
  );
}