"use client"
import { Collapse } from "antd";

import React, { useState } from 'react'

const ReferralQuestion = () => {
    const [activeKey, setActiveKey] = useState(["1"]); // Default active key
    const handleCollapseChange = (key:any) => {
        setActiveKey(key);
      };
    const items = [
        {
          key: "1",
          label: (
            <div
              className={`font-bold ${
                activeKey.includes("1") ? "text-[#aa945b]" : "text-black"
              }`}
            >
              Who can be a Referred friend?
            </div>
          ),
          children: (
            <p>
              The Referred friend has to be a new meowcademy household with no
              enrolments in our programmes in the last 6 months for the referral to
              be successful. If the Referred friend has previously enrolled his or
              her child in a Special Programme, he or she{" "}
              <span className="font-bold">is eligible</span> for this Referral
              Programme.
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <div
              className={`font-bold ${
                activeKey.includes("2") ? "text-[#aa945b]" : "text-black"
              }`}
            >
              How do I know if my referral is successful?
            </div>
          ),
          children: (
            <>
              <div>
                A referral is considered successful when a new household (&apos;Referred
                Friend&apos;) successfully enrols their child(ren) at The Meowcademy,
                made full payment for the term&apos;s registered core programme(s) and
                started lessons with us. Click here for more terms and conditions on
                this.
                <p className="my-3">
                  Upon a successful referral, the applicable incentives will be
                  reflected in their invoice as follows:
                </p>
                <table
                  cellPadding="1"
                  cellSpacing="0"
                  style={{ borderCollapse: "collapse", width: "100%" }}
                >
                  <tbody>
                    <tr>
                      <td
                        height="0"
                        width="0"
                        style={{
                          textAlign: "left",
                          border: "1px solid black",
                          padding: "8px",
                        }}
                      >
                        For Referrer (Existing Household)
                      </td>
                      <td
                        style={{
                          textAlign: "left",
                          border: "1px solid black",
                          padding: "8px",
                        }}
                      >
                        2 terms after the Referred student&apos;s attended term.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          textAlign: "left",
                          border: "1px solid black",
                          padding: "8px",
                        }}
                      >
                        For Referred Friend (New Household)&nbsp;&nbsp;
                      </td>
                      <td
                        style={{
                          textAlign: "left",
                          border: "1px solid black",
                          padding: "8px",
                        }}
                      >
                        In the new term invoice&nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          key: "3",
          label: (
            <div
              className={`font-bold ${
                activeKey.includes("3") ? "text-[#aa945b]" : "text-black"
              }`}
            >
              What&apos;s the incentive for referring a friend?
            </div>
          ),
          children: (
            <p>
              As the Referrer, you will receive $300 off your term fees per
              successful referral. This will be reflected in your subsequently
              issued invoice (2 terms later). Please note that you will only be
              rewarded for your first 3 successful referrals every term.{" "}
            </p>
          ),
        },
        {
          key: "4",
          label: (
            <div
              className={`font-bold ${
                activeKey.includes("4") ? "text-[#aa945b]" : "text-black"
              }`}
            >
              What will my friend get through this Referral Programme?
            </div>
          ),
          children: (
            <div className="flex flex-col gap-3">
              <p>
                As the Referred Party or a new MEOWCADEMY Household, your friend
                will enjoy $300 off their child&apos;s term fees, per subject, per child.
              </p>
              <p>
                If your friend is enrolling more than 1 child with us, all
                registrations must be done at the same time.
              </p>
              <p>
                For example, if your friend registers both his or her children for 3
                subjects at the same time, he or she will be entitled to 2
                (children) x 3 (subjects) x SGD 300 = SGD 1800 off the current
                issued invoice. One child may start lessons immediately whilst the
                other child may start lessons later due to scheduling, however,
                since full payment has been made for both children at the same time,
                your friend is eligible for the prevailing referral incentives.
              </p>
            </div>
          ),
        },
        {
          key: "5",
          label: (
            <div
              className={`font-bold ${
                activeKey.includes("5") ? "text-[#aa945b]" : "text-black"
              }`}
            >
              Is there a limit to the number of friends I can refer to The Meowcademy?
            </div>
          ),
          children: (
            <p>
              There is no limit to the number of friends or family you can refer.
              However, you will only be rewarded for your first 3 successful
              referrals every term.
            </p>
          ),
        },
      ];
  return (
   <>
    <div className="container">
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl mb-4">Have a Question for Us?</h1>
            <p>Here are the Frequently Asked Questions</p>
          </div>

          <div className="mt-10">
            <Collapse
              defaultActiveKey={["1"]}
              size="large"
              ghost
              activeKey={activeKey}
              onChange={handleCollapseChange}
              items={items}
            />
          </div>
        </div>
   </>
  )
}

export default ReferralQuestion