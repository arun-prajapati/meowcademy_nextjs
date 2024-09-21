import Accordion from "@/components/Accordion";
import React from "react";

const Faq = () => {
  return (
    <>
      <div className="pt-24">
        <h1 className="text-center text-2xl font-semibold mt-10">FAQs</h1>
        <div className="container mt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <Accordion
              title={"What fees do I have to pay when joining meowcademy?"}
              desc={`For new students  we offer a paid trial of 4 lessons with minimal risk. ,😊


This means:

1) You pay only for 4 lessons when you enrol. No upfront registration fees OR deposit is required at this point in time.

2) Only when you decide to continue with the lessons then we’ll itemize the registration fees & deposit in your next bill. ,


The joining fees applicable are :

1) A one-time registration fee

2) 1 month of course fees as a deposit for each subject (used to offset your last 4 lessons’ tuition fees)

3) Fees are pro-rated according to how many lessons are left within the month,


*No material fees EVER.`}
            />
            <Accordion
              title={
                "What should I do if my child is unable to attend a lesson?"
              }
              desc={`At meowcademy we have the 2 solutions for students who are unable to attend their lessons:,
            1) Make-Up Classes: 


You may approach the staff at meowcademy to arrange for a make-up class within the same academic week.,


Do note that we will only allow students who have informed the staff of a make-up lesson to enter the class. meowcademy reserves the rights to turn away students if the make-up class that he/she is going to is already full.,

 

We strongly encourage students to go for make-up classes so to not miss any content taught in that week.

 

For other class schedules, please visit meowcademy.com/basket,
2) Credit Note


Lesson fees can be waived off in the form of a credit note if the proper documentation/proof is submitted for the following reasons:,


- Medical Reasons (Medical Certificate from clinic required)
,
- School Activities (School Letter/Consent Form required),

- Travelling for 5 days or more (Any form of proof of travel e.g. plane tickets hotel booking etc.)

Do note that only a maximum of 2 credit notes is allowed per 3 months (Dec-Feb | Mar-May | Jun-Aug | Sept-Oct). 

meowcademy reserves the rights to not issue any credit notes if no proper documentation/proof is submitted to us.
            `}
            />
            <Accordion
              title={"What happens if there is a 5th lesson in the month?"}
              desc="Fees stated on the class schedule are for 4 lessons. As such if there is a 5th lesson in the month fees will be pro-rated. Similarly in the event when your lesson falls on a public holiday fees will also be pro-rated accordingly."
            />
            <Accordion
              title={"What should I do if my child wants to stop classes?"}
              desc="A student who wishes to terminate his or her class will have to give the centre one month’s notice by submitting a withdrawal form one month prior to the withdrawal date. Your deposit will be used to offset the forthcoming month’s tuition fees accordingly (provided that there are lessons).,Please also note that your deposit can only be used to offset your last 4 lessons' tuition fees & not refunded in any circumstance."
            />
            <Accordion
              title={
                "What will my child go through or receive in an meowcademy lesson?"
              }
              desc="Lesson duration at meowcademy is 1.5 hours long.,Following our meowcademy Curriculum Structure a worksheet will be completed during every week's lesson.,meowcademy worksheets are specially crafted by a full-time in-house Curriculum Team that includes Education Experts trained in NIE with a 'Master's in Education (Teaching & Curriculum)'.

,Our curriculum is constantly vetted and updated to ensure that the worksheets that our students receive are according to MOE syllabus and always the most up-to-date version.
,Apart from normal worksheets depending on levels and subjects we do have manipulatives cheat sheets concept maps to enhance every student's learning and understanding in class.

"
            />
            <Accordion
              title={
                "What equipment is used to deliver the lessons in meowcademy?"
              }
              desc="Less than 5% (yes really) of tuition centres islandwide have equal or better infrastructure as meowcademy.,ALL meowcademy classrooms are equipped with the latest Smart-Board technology so that our students can engage in interactive and efficient learning!


"
            />
            <Accordion
              title={
                "Why should I enrol my child in meowcademy or any tuition services?"
              }
              desc="Tuition serves as a complementary role to the school system for students.

,At meowcademy we teach about 3-4 weeks ahead of the school's syllabus.,Research has shown that multiple reviews improve the understanding and memory retention of students.

,Our students learn content in meowcademy first before they learn in it school again - students understand better remember better and most importantly apply what they have learnt better in examinations.


"
            />
            <Accordion
              title={
                "Why do I have to pay for a one-month deposit for each subject?"
              }
              desc="Upon your enrollment meowcademy commits a seat for the chosen class & timing to you. That means that in the event that the class is full (12 students) we turn away every student that is interested in enrolling as the seat is reserved for you.

,Without a deposit - we have no way of guaranteeing your spot as we will not know whom to commit the spots to accordingly.

,*We only collect the one-month deposit fees AFTER your trial package is completed.


"
            />
            <Accordion
              title={"How many students are allowed in one class?"}
              desc="We take in a maximum of 12 students although the classroom can sit up to 15 students. This is to provision for the occasional student from another class attending a make-up class.

"
            />
            <Accordion
              title={
                "How do I know if my child is suitable for the meowcademy Programme?"
              }
              desc="The meowcademy curriculum is specially designed and curated for students in the 50+ 60+ and 70+ marks range.,This is because our materials are pegged slightly above the school's standard and the pace of teaching is slightly faster than average.

,If you're unsure of whether your child is suitable for our lessons take the 4-lessons trial package to test it out in the lowest-risk manner possible!

,For more details visit www.meowcademy.com


"
            />
            <Accordion
              title={
                "How come meowcademy doesn’t display students’ results like other centres?"
              }
              desc="We obtain real and genuine in-person video testimonies from many parents as well as have hundreds of reviews on public platforms like Facebook & Google.
We believe parents' video testimonials do provide credibility as it sums up their experience with us in just a few minutes.,
That said we refrain from promising (directly or indirectly) results as “your mileage may vary” - an idiom to convey the fact that every student is different in terms of background level of fundamentals at the point of joining and have varying levels of support at home too.,
We encourage you to peruse our materials (worksheets) teachers’ profiles and supporting resources like our EverLoop Improvement System thoroughly to judge for yourself if we are indeed a legitimate and suitable centre for your family.

"
            />
            <Accordion
              title={"Can I get a refund for the lesson that I have missed?"}
              desc="We offer “Credit Notes” for missed lessons in your following month’s invoice (accompanied with proper documentation) for the following reasons:,
- Medical Reasons (Medical Certificate from clinic required),

- School Activities (School Letter/Consent Form required),

- Travel (Any form of proof of travel e.g. plane tickets hotel booking etc.),
Do note that only a maximum of 2 credit notes is allowed every 3 months (Jan-Mar | Apr-Jun | Jul-Sep | Oct-Dec).,
meowcademy reserves the rights to not issue any credit notes if the reason of absence is not any of the three reasons stated above and/or no proper documentation/proof is submitted to us.



"
            />
            <Accordion
              title={"Are the teachers at meowcademy qualified?"}
              desc={`Yes of course!,
All our experienced teachers are either:,
1) NIE-Trained/Ex-School Teachers,
2) In-House Subject Specialists,

3) Graduate Full-Time Tutors,

Even better all our teachers are equipped with an elaborately annotated 'Teachers' Copy' prepared by the Curriculum Team.,

This ensures quality and accuracy of the lessons that your child receives minimizing the chances of teachers "teaching wrongly".


`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
