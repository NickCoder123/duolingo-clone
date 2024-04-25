import { getCourses } from "~/server/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const courses = await getCourses();

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourseId={1} />
    </div>
  );
};

export default CoursesPage;
