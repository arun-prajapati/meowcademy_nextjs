"use client"
import { Collapse } from "antd";
import { useState } from "react";

const ReferralTerms = () => {
    const [activeKey, setActiveKey] = useState(["1"]); // Default active key

    const handleCollapseChange = (key:any) => {
        setActiveKey(key);
      };
      const termsAndCond = [
        {
          key: "1",
          label: (
            <div
              className={`font-bold ${
                activeKey.includes("1") ? "text-[#aa945b]" : "text-black"
              }`}
            >
              Terms & Conditions
            </div>
          ),
          children: (
            <div className="cmp-text">
            <p><a id="Terms"></a>&nbsp;</p>
        <p>This is an ongoing promotion unless otherwise stated.</p>
        <p><br/>
        <b>For Referred Parents (New Households)</b></p>
        <p>1. This promotion is valid for new MEOWCADEMY household enrolling new students in Meowcademy’s core programme(s) only.</p>
        <p>i. If your child has enrolled/is enrolled in a special/holiday programme before, you are still eligible for this promotion.</p>
        <p>ii. Your child must not have been enrolled in a core programme in the past 6 months.</p>
        <p>2. Referred Parent must not have participated in a Lesson Experience in the last 6 months. This is because promotions are not stackable.</p>
        <p>3. Enrolment for core programme must be for a minimum of one term. <u>Strictly, no midterm withdrawals are allowed.</u></p>
        <p>4. Payment for core programme must be made within 3 days of confirmation of classes.</p>
        <p>5. Referred parent can enrol their child(ren) for more than one subject with the same value of incentives awarded to the second subject onwards.</p>
        <p>For example, if Referred Parent enrols one child for 3 subjects and made the full term’s fees, he or she will receive: SGD 300 x 3 = SGD 900 off that term fees</p>
        <p><b><br/>
        For MEOWCADEMY Households (Referrers)</b></p>
        <p>6. Referrer must be an existing MEOWCADEMY household to enjoy this promotion.</p>
        <p>7. Student must remain enrolled in 2 subsequent terms to be eligible for the promotion to be applicable. <u>Strictly, no midterm withdrawals are allowed.</u></p>
        <p>8. Each existing MEOWCADEMY household can refer up to 3 successful referrals.</p>
        <p>9. Existing parent will enjoy the total value of the incentives for each successfully registered new household, up to 3 households, reflected in the invoice 2 terms after the Referred student&apos;s attended term.</p>
        <p>For example, if Parent B refers 3 new household who successfully registered and made the full Term 1 - 2023 fees, he or she will receive: SGD 300 x 3= SGD 900 off Term 3 fees.&nbsp;</p>
        <p><b><br/>
        General</b></p>
        <p>10. Incentives are not exchangeable for cash.</p>
        <p>11. Referrals are on a first-come-first-serve basis, each new referral can only be attributed to 1 Referrer.</p>
        <p>12. We reserve the right, at our sole discretion, to change, modify, add or remove any of the Terms and Conditions contained herein at any time and without prior notice.&nbsp;</p>
        
        </div>
          ),
        },
      ];
  return (
  <>
   <div className="container my-20">
        <Collapse
          defaultActiveKey={["1"]}
          size="large"
          ghost
          activeKey={activeKey}
          onChange={handleCollapseChange}
          items={termsAndCond}
        />
      </div>
  </>
  )
}

export default ReferralTerms