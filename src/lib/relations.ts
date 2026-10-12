import { portfolioProjects, Project } from "@/content/projects";
import { serviceGroups, ServiceGroup } from "@/content/services";

export function getRelatedProjectsForService(serviceSlug: string): Project[] {
  return portfolioProjects.filter((project) =>
    project.serviceSlugs.includes(serviceSlug)
  );
}

export function getRelatedProjectsForIndustry(industry: string): Project[] {
  return portfolioProjects.filter((project) =>
    project.industry.toLowerCase().includes(industry.toLowerCase())
  );
}

export function getRelatedServicesForIndustry(_industrySlug: string): ServiceGroup[] {
  // Returns service groups relevant to a given industry
  return serviceGroups;
}

export function getLiveProjects(): Project[] {
  return portfolioProjects;
}
