import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/components/project-card";
import { DataVisionCaseStudy } from "@/components/datavision-case-study";
import { GymOSCaseStudy } from "@/components/gym-os-case-study";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Projeto", description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (slug === "datavision") return <DataVisionCaseStudy />;
  if (slug === "gym-os") return <GymOSCaseStudy />;
  notFound();
}
