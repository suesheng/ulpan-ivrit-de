import { getCollection } from "astro:content";

export async function courseStaticPaths() {
  const courses = await getCollection("courses");
  return courses.map((course) => ({
    params: { slug: course.id },
    props: { course },
  }));
}

export async function jobStaticPaths() {
  const jobs = await getCollection("jobs");
  return jobs.map((job) => ({
    params: { slug: job.id },
    props: { job },
  }));
}
