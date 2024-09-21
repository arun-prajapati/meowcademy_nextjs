"use client";
import SubjectGRoadmap from "@/components/SubjectGRoadmap";
import { roadmap } from "@/types/type";
import Link from "next/link";
import React, { useState } from "react";

const SubjectGroupRoadmap = ({ group }: { group: roadmap[] }) => {
  return (
    <>
      {group?.map((roadmap) => (
        <SubjectGRoadmap roadmap={roadmap} key={roadmap?.id}/>
      ))}
    </>
  );
};

export default SubjectGroupRoadmap;
