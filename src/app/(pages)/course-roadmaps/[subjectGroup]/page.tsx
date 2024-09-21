import apihandler from "@/lib/apihandler";
import SubjectGroup from "@/pagesContain/SubjectGroup";
import { Metadata } from "next";

export async function generateMetadata({params}:{params:{subjectGroup:string}}): Promise<Metadata> {
  // --get Subject Group data--
   const GroupData= await apihandler({
    path: "/api/group_list",
    apiConfig: { method: "POST",
      body: JSON.stringify({ slug: params.subjectGroup }),
      headers: {
        "content-type": "application/json",
      },
     },
  });
 
  return {
    title: GroupData?.data[0]?.meta_title ,
    description: GroupData?.data[0]?.meta_description,
    alternates: {
      canonical: `/course-roadmaps/${params.subjectGroup}`,
    },
  };
}

const page = ({ params }: { params: { subjectGroup: string } }) => {

  return (<>
  <SubjectGroup params={params.subjectGroup}/>
  </>)
};

export default page;
