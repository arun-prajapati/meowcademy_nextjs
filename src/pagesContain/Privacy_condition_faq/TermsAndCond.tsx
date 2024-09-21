import Link from 'next/link'
import React from 'react'

const TermsAndCond = () => {
  return (
    <>
    <div className="pt-24">
        <h1 className="text-center text-2xl font-semibold mt-10">
          Terms & Conditions
        </h1>
        <div className="container mt-8 flex flex-col gap-6">
          <p className="font-bold">
            TERMS & CONDITIONS FOR REGISTRATION OF Meow COURSES
          </p>
          <p>
            I, the parent / guardian (the “Parent”) of the student (the
            “Student”), hereby agree to the following terms and conditions (the
            “General Terms”):
          </p>
          <p className="font-bold">Interpretation:</p>
          <ul className="list-decimal pl-10">
            <li>
              In these Terms & Conditions, the following words and phrases shall
              bear the following meanings, unless the context requires
              otherwise:
            </li>
            <ul className="list-decimal pl-10">
              <li>
                “Academic Year” means an academic year at the Centre, which runs
                from 1 Dec to 30 Nov of the given year;
              </li>
              <li>
                “Calendar Month” means a full month commencing on the 1st day of
                a calendar month and ending on the last day of that calendar
                month; and
              </li>
              <li>
                “meowcademy”, means any entity which runs tuition / enrichment /
                academic programmes / workshops / seminars / all other
                programmes or events under the brand “meowcademy”, “meowcademy
                Learning Centre”, names or any of their variations thereof in
                Singapore.
              </li>
            </ul>
          </ul>
          <p className="font-bold">Conditions of Registration & Enrolment</p>
          <ul className="list-decimal pl-10">
            <li>
              The enrolment of the Student in the course(s) indicated on the
              Course Registration Form (the “Registered Course(s)” is
              conditional upon and includes the following:
            </li>
            <li>
              Payment of a registration fee (where applicable);
              <ul className="list-decimal pl-10">
                <li>
                  Payment of a deposit equivalent to 1 month of course fees per
                  subject, unless otherwise specified, for the Registered
                  Course(s) (the “Deposit”), together with the applicable Goods
                  & Services Tax (“GST”) or any other tax that may be levied by
                  the Government of Singapore from time to time, upon the
                  registration of the Student’s enrolment in the Registered
                  Course(s). For the avoidance of doubt, and subject to these
                  General Terms, the Deposit shall be used to pay for any
                  outstanding amounts owed to meowcademy, which shall include
                  but is not limited to the course fees for the final month of
                  the Registered Course(s), if applicable;
                </li>
                <li>
                  In the event that course fee(s) remain(s) unpaid at the end of
                  the Calendar Month in which they are due for payment, we
                  reserve the right to disallow the Student from attending any
                  class(es) in the Registered Course(s) from the following
                  month.
                </li>
              </ul>
            </li>
            <li>
              Notwithstanding anything in these General Terms, the Student in
              not entitled to receive any meowcademy curriculum materials (in
              whatever form on whatever media) for any Registered Courses which
              he or she has not paid for. In the event that the Student is
              registered for any of the Registered Course(s) after an Academic
              Year / term has begun, the Student shall be entitled to receive
              the curriculum materials only from the date which he or she begins
              attending the Registered Course(s).
            </li>
            <li>
              Tuition fees will be pro-rated according to the number of lessons
              in the month.
            </li>
            <li>
              Classes will not be held on the eve of Chinese New Year and any
              public holiday which may be gazette by the Government of Singapore
              from time to time.
            </li>
          </ul>
          <p className="font-bold">Make-up Classes</p>
          <ul className="list-decimal pl-10">
            <li>
              In the event that the Student fails to attend a class in any of
              our courses (with the exception of Phonics and Reading courses
              offered under meowcademy Learning Centre), meowcademy may at its
              sole discretion, allow the Student to make-up the missed lesson by
              attending another on-going class within the same Centre during the
              same academic week (i.e. from Monday to Sunday), PROVIDED THAT:
              <ul className="list-decimal pl-10">
                <li>
                  there is more than 1 class of the same level and subject
                  within that Centre;
                </li>
                <li>
                  there is a vacancy in the class that the Student intends to
                  attend as the make-up class;
                </li>
                <li>
                  the Student has not attended more than 2 make-up classes for
                  the relevant Registered Course within the same Calendar Month.
                </li>
              </ul>
            </li>
            <li>
              Please give us a call to check for availability of make-up classes
              as slots are limited. Students who turn up for make-up lessons
              without prior notice will not be permitted to enter the classroom.
            </li>
            <li>
              There will be no make-up classes or refund of fees if the Centre
              closes or there is a closure of classes due to an outbreak of
              contagious diseases (e.g. SARS) or other unforeseen circumstances
              beyond our control.
            </li>
          </ul>
          <p className="font-bold">Non-Attendance & Credit Notes</p>
          <ul className="list-decimal pl-10">
            <li>
              We will apply a credit note in his or her following calendar
              month’s bill, only for the following reasons:
              <ul className="list-decimal pl-10">
                <li>
                  Medical. Students who fall sick on the date of the lesson will
                  have to produce a Medical Certificate to our counter
                  administrative staff for processing.
                </li>
                <li>
                  School Activities. Students not being able to attend the
                  lesson due to school activities; please produce the school’s
                  letter (consent form, letter of notice, etc) to our counter
                  administrative staff for processing.
                </li>
                <li>
                  Travelling for 5 days or more. Students traveling overseas for
                  an extended period will have to provide the relevant travel
                  documents to our counter administrative staff for processing.
                </li>
              </ul>
            </li>
            <li>
              Requests for credit notes will not be entertained without relevant
              documents as per the abovementioned produced; however the
              worksheets can still be collected from the counter accordingly in
              the event of a missed lesson. There will be a maximum of two
              lessons of credit notes per subject allowed every three months
              (Jan-March, April-June, Jul-Sep & Oct-Dec).
            </li>
          </ul>

          <p className="font-bold">Withdrawals</p>
          <ul className="list-decimal pl-10">
            <li>
              A notice of withdrawal must be given at least one Calendar Month
              before the Student’s withdrawal from any of the Registered
              Course(s), and the Deposit shall be used to offset the course fees
              due for the relevant notice period or the last 4 lessons’ tuition
              fees. In the event that less than one Calendar Month notice is
              given, no part of the Deposit will be refunded.
            </li>
            <li>
              In the event that the accrued amount of the last 4 lessons&apos;
              tuition fees are not enough to offset the Deposit, the remaining
              amount shall be used to offset lessons&apos; charges till exhausted.
            </li>
            <li>
              Unless otherwise stated, all monies paid are non-refundable and
              non-transferrable to another student or course, regardless of
              whether the Registered Course(s) has/have commenced.
            </li>
          </ul>
          <p className="font-bold">Transfers</p>
          <ul className="list-decimal pl-10">
            <li>
              A written request for transfer must be given at least one Calendar
              Month before the transfer from one course to another, or from one
              meowcademy centre to another. Any transfer can only take effect on
              the first lesson of the following calendar month. In the event
              that we are unable to accommodate this request due to operational
              reasons or otherwise, and the Parent decides to withdraw the
              Student from the relevant Registered Course(s) or centre, the
              aforementioned written request for transfer shall not constitute
              the written notice of withdrawal described in Clause 11.
            </li>
          </ul>
          <p className="font-bold">Intellectual Property</p>
          <ul className="list-decimal pl-10">
            <li>
              The Student and the Parent are prohibited from copying,
              reproducing, modifying, distributing or transmitting in any form
              or by any means whatsoever (including mechanical, electronic,
              recording, photocopying, photographing or otherwise) any of
              meowcademy’s curriculum material (be they worksheets, notes, study
              materials or other material in whatever form or medium)
              (Prohibited Act&apos;&apos;). The Student or Parent shall also not
              instigate, encourage or instruct anyone to carry out the
              Prohibited Act.
            </li>
            <li>
              meowcademy may copy, reproduce, display, distribute and use any
              work / material produced by the Student as part of the Registered
              Course(s).
            </li>
          </ul>
          <p className="font-bold">Other Conditions</p>
          <ul className="list-decimal pl-10">
            <li>
              The Parent hereby warrants that the Student is registered for the
              Registered Course(s) at the same level at which the Student is
              currently enrolled for in his / her formal education [e.g. if the
              Student is in P2 at a MOE government primary school, the Student
              must register for P2 course(s) at meowcademy]. meowcademy does not
              allow any skipping of levels under any circumstances.
            </li>
            <li>
              We reserve the right and the sole discretion to, (a) transfer,
              combine or dissolve a class and change teachers, and/or (b)
              terminate the Student&apos;s place in any of the Registered Course(s).
            </li>
            <li>
              While meowcademy will take reasonable precautions to ensure the
              safety of the Student, meowcademy assumes no liability for
              personal injury, loss or damage to property or any loss or damage
              of any kind whatsoever which might be sustained by the Student in
              undertaking any activity or anything during the Registered
              Course(s), whether under the direction of meowcademy or otherwise,
              and generally for any such injury, loss or damage however caused
              except by the wilful default of meowcademy, its servants or
              agents.
            </li>
            <li>
              The Parent hereby releases meowcademy, its servants and agents
              from all liability for such injury, loss or damage of any other
              kind whatsoever which might be sustained by the Student in
              undertaking any activity or anything during the Registered
              Course(s) or I and in the Centre, whether under the direction of
              meowcademy or otherwise, and generally for any such injury, loss
              or damage howsoever caused except by the wilful default of
              meowcademy, its servants and agents.
            </li>
            <li>
              meowcademy shall not be liable for any default or closure of
              classes due to any act of God, war, strike, lockout, industrial
              action, fire, flood, drought, tempest or other event beyond
              meowcademy’s reasonable control.
            </li>
            <li>
              It is the Parent&apos;s responsibility to monitor the health of their
              children before they come to the meowcademy Learning Centre for
              lessons. If the Student is not feeling well, we reserve the right
              to put the Student in the office/administration area of the centre
              or send him home. The fees in respect of the lesson for that day
              will not be refunded. Attendance in any make-up classes is
              subjected to class seating availability for the day.
            </li>
            <li>
              The Course Registration Form and these General Terms contain the
              whole agreement between the Parent, Student and meowcademy
              Learning Centre and supersedes any prior written or oral agreement
              amongst them relating to the Student&apos;s enrolment in the Registered
              Course(s) and the parties confirm that they have not entered into
              this agreement on the basis of any representations that are not
              expressly incorporated in the Course Registration Form and these
              General Terms.
            </li>
            <li>
              meowcademy Learning Centre reserves the right to use students&apos;
              information including, but not limited to, their names, level,
              school, results, photographs & video footages as part of our
              marketing purposes.
            </li>
          </ul>
          <p>
            The Parent hereby also consents to the collection, use and
            disclosure of his / her personal data as well as the personal data
            of the Student in accordance with the purposes specified in the
            meowcademy Personal Data Protection Policy listed below.
          </p>
          <p>
            The acceptance by the parent/guardian of these general terms is
            deemed to be acknowledged, understood and accepted when the
            registration form is filled in at the respective centre&apos;s premises
            and acknowledged by means of a verbal acceptance or written or both.
          </p>
          <p className="font-bold">
            MEOWCADEMY PERSONAL DATA PROTECTION POLICY
          </p>
          <p>
            meowcademy Learning Centre, which consists of any entity operating
            under “meowcademy” names or any of their variations thereof in
            Singapore (hereinafter referred to as “meowcademy”) is committed to
            ensuring that your personal data is protected.
          </p>
          <p>
            The purpose of this document is to explain how the meowcademy
            Learning Centre manages personal data which is subject to the
            Singapore Personal Data Protection Act 2012. All references in this
            Policy to “client”, “you” and “your” refer to the individual(s) who
            accepted or proposes to accept products or services by meowcademy.
          </p>
          <p className="font-bold">Types of Personal Data Collected</p>
          <p>
            We collect personal data so that we can provide an experience that
            is customised / responsive to your needs and enables us to carry out
            our business activities. Examples of such personal data collected
            include:
          </p>
          <p>
            Personal information about you and your family members, which may
            include names, identification particulars, contact details,
            preferences, educational information, demographic data, general
            photos/videos of classroom activities/meowcademy events (in which a
            student may be enrolled in) organised by us, payment details and
            transaction history; Information and data generated in the course of
            any continual relationship with meowcademy, for example,
            instructions given by you to arrange class enrolments, transfers,
            make-up (if any), withdrawals, and other information and records you
            choose to provide by various modes of communication such as email,
            telephone, SMS, social media and the internet; and Information from
            cookies, technologies deployed by meowcademy for the analysis of
            website usage or other information technology applications (learning
            platforms or otherwise) used by meowcademy in delivering or
            communicating its services.
          </p>
          <p className="font-bold">
            Purpose of Collection Use and Disclosure of Personal Data
          </p>
          <p>
            We collect personal data from you, your family members, your
            authorised representatives, our website and social media, internet,
            mobile services, emails, SMS, phone conversations, face-to-face
            interactions with any meowcademy employee/officer/director and
            publicly available sources.
          </p>
          <p>
            The purposes (“Permitted Purposes”) for which meowcademy collects,
            uses and discloses the personal data include:
          </p>
          <p className="font-bold">
            Verifying your identity (including the making of copies of NRIC for
            our records);
          </p>
          <p>Discharging our contractual obligations;</p>
          <p>Providing you better service;</p>
          <p>
            Informing you of our value-added workshops, seminars, study trips,
            events or holiday workshops; Responding to, processing and handling
            your queries, requests, inter-centre transfers within the meowcademy
            Learning Centre, feedback and suggestions;
          </p>
          <p>
            Managing the administrative and operational aspects of the
            meowcademy Learning Centre and complying with internal policies and
            procedures;
          </p>
          <p>
            Facilitating operational processes, which includes, but not limited
            to student profile assessments, class and student management,
            payment administration and statistical analysis;
          </p>
          <p>
            Requesting feedback or participation in surveys (on teachers, staff
            etc), market research and / or analysis for statistical profiling or
            other purposes for us to design our products and services;
          </p>
          <p>
            For our marketing, branding, communications and corporate affairs
            purposes which include publication in our printed materials, social
            media, website and / or electronic media;
          </p>
          <p>
            and Managing the safety and security of our premises and services
            (including but not limited to carrying out CCTV surveillance and
            conducting investigations);
          </p>
          <p>
            Providing you product-related services and support, including the
            provision of administrative support, technical assistance and
            customer alerts;
          </p>
          <p>
            Monitoring and recording calls and electronic communications with
            clients for record-keeping, quality control, training and case
            investigations;
          </p>
          <p>
            and Enforcing or defending the rights of meowcademy, its employees,
            officers and directors to our full-time teachers and independent
            contract teachers for them to effectively discharge their teaching
            and tutoring obligations;
          </p>
          <p>
            to third party service providers whom we engage or collaborate with
            to organise/conduct our enrichment programmes, events, workshops,
            talks, seminars;
          </p>
          <p>
            any person or entity which part of meowcademy is, to the extent
            necessary to fulfill the Permitted Purposes;
          </p>
          <p>
            to professional advisors, third party service providers, agents or
            contractors whom we engage to manage / support our business
            operations;
          </p>
          <p>
            and any person, entity or authority to whom disclosure is required
            under applicable laws or regulations;{" "}
            <Link href="/terms-and-conditions" >
              https://www.meowcademy.com/terms-and-condition)
            </Link>
            .
          </p>
          <p>
            The use or continued use of any of our services shall be deemed as
            your agreement and consent to be bound by our Personal Data
            Protection Policy.
          </p>
          <p className="font-bold">For Questions and Feedback</p>
          <p>
            For any queries, you may email us at{" "}
            <a href="mailto:cscat@meowcademy.com" className="underline">
              cscat@meowcademy.com
            </a>
          </p>
          <p>
            By providing to us your personal data, you declare that you have
            read, understood and accepted the provisions herein and do hereby
            consent to the processing of your personal data in accordance with
            all the foregoing. You acknowledge that the use or continued use of
            our services shall be deemed as your agreement and consent to be
            bound by our Personal Data Protection Policy.
          </p>
        </div>
      </div>
    </>
  )
}

export default TermsAndCond