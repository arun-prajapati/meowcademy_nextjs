import apihandler from "@/lib/apihandler";
import Level from "@/pagesContain/Levels"
import { StandardType } from "@/types/type";
import { Metadata } from "next";

export async function generateMetadata({params}:{params:{level_details:string}}): Promise<Metadata> {
    // Fetch the data
    const subData: { data: StandardType[] } = await apihandler({
      path: "/api/standard_list",
      apiConfig: {
        method: "POST",
        body: JSON.stringify({ slug: params.level_details }),
        headers: {
          "content-type": "application/json",
        },
      },
    });
  
  return {
    title: subData?.data[0]?.meta_title ,
    description: subData?.data[0]?.meta_description,
    alternates: {
      canonical: `/levels/${params.level_details}`,
    },
  };
}


const page = ({params}:{params:{level_details:string}}) => {
  return (
   
        <Level params={params.level_details}/>
    
  )
}

export default page
