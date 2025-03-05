import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto pt-24">
      <h1 className="text-2xl font-bold mb-4 text-center my-6">
        Privacy Policy
      </h1>
      <p>
        <span className="font-semibold">Meowcademy Private Limited</span> (UEN
        202410054H) values and respects the privacy of the Personal Data you
        provide to us. This policy outlines our commitment to complying with
        Singapore’s Personal Data Protection Act 2012 (PDPA) and other
        applicable laws. It sets out the purposes for which Personal Data is
        collected, used, disclosed, and stored, as well as the rights of data
        subjects and our data protection practices
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4 ">1. Scope</h2>
      <p>
        This Personal Data Protection Policy applies to all individuals *data
        subjects who interact with the Company, including customers, employees,
        partners, and other stakeholders whole Personal Data is collected, used,
        or disclosed by the Company in Singapore.
      </p>
      <hr className="my-4 " />
      <h2 className="text-xl font-semibold mt-4 mb-4">
        2. Purpose of Data Collection
      </h2>
      <p className="my-4">
        We collect personal data for the following purposes:
      </p>
      <ul className="list-disc pl-10">
        <li>To provide our services and fulfill our contractual obligations</li>
        <li>
          To communicate with customers regarding our products and services
        </li>
        <li>For marketing and promotional activities, with consent</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>
      <hr className="my-4 " />
      <h2 className="text-xl font-semibold mt-6">
        3. Types of Personal Data Collected
      </h2>
      <p className="my-4">We collect the following types of personal data:</p>
      <ul className="list-disc pl-10">
        <li>Contact Information (e.g., name, phone number, email address)</li>
        <li>Financial Information (e.g., payment details)</li>
        <li>Employee Information (e.g., employment history, job role)</li>
        <li>Website Usage Data (e.g., IP address, cookies)</li>
      </ul>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">4. Consent</h2>
      <p>
        We will seek your consent before collecting, using, or disclosing your
        personal data, unless otherwise permitted or required by law. You can
        withdraw your consent at any time by contacting our Data Protection
        Officer.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        5. Access and Correction
      </h2>
      <p>
        You have the right to request access to your personal data held by us
        and to request corrections if the data is inaccurate. Please contact our
        Data Protection Officer to make such requests.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">6. Data Retention</h2>
      <p>
        We retain personal data for as long as it is necessary to fulfill the
        purposes for which it was collected. Once it is no longer required, we
        will take reasonable steps to securely dispose of or anonymize the data.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        7. Security of Personal Data
      </h2>
      <p>
        We implement strict physical, administrative, and technical safeguards
        to protect your personal data. These measures include secure storage
        systems, encryption, and access controls. Only authorized personnel have
        access to personal data.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        8. Sharing and Disclosure of Personal Data
      </h2>
      <p>
        We may share your personal data with third parties who provide services
        on our behalf, such as payment processing, IT support, or marketing. We
        will ensure that these third parties comply with data protection
        standards. If personal data is transferred overseas, we will ensure that
        it is protected in accordance with the PDPA.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        9. Rights of Individuals
      </h2>
      <p className="my-4">
        {" "}
        As an individual, you have the following rights under the PDPA:
      </p>

      <ul className="list-disc pl-10">
        <li>
          The right to request access to the personal data we hold about you
        </li>
        <li>The right to correct any inaccuracies in your personal data</li>
        <li>
          The right to withdraw your consent for the collection, use, or
          disclosure of your personal data
        </li>
      </ul>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        10. Data Breach Notification
      </h2>
      <p>
        In the event of a data breach that may cause significant harm, we will
        notify both the Personal Data Protection Commission (PDPC) and affected
        individuals in accordance with the PDPA’s data breach notification
        requirements.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        11. Cookies and Tracking Technologies
      </h2>
      <p>
        Our website uses cookies to improve user experience and collect usage
        data. You may control cookie settings in your browser. For more details,
        please refer to our Cookie Policy.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        12. Changes to the Policy
      </h2>
      <p>
        We may update this Personal Data Protection Policy from time to time.
        Any changes will be posted on our website, and we will notify you if
        required by law.
      </p>
      <hr className="my-4 " />

      <h2 className="text-xl font-semibold mt-6 mb-4">
        13. Contact Information
      </h2>
      <p>
        If you have any questions or concerns about this policy or your personal
        data, please contact our Data Protection Officer at:
      </p>

      <p className="mt-2">
        <strong>Email:</strong>{" "}
        <a href="mailto:cscat@meowcademy.com" className="text-blue-600">
          cscat@meowcademy.com
        </a>
      </p>
      <p>
        <strong>Phone:</strong> 87713358
      </p>
      <hr className="my-4 " />
    </div>
  );
};

export default PrivacyPolicy;
