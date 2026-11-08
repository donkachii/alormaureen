import { courses, education } from "@/content/experience";

export function EducationList() {
  return (
    <>
      <ul>
        {education.map((item) => (
          <li key={item.award} className="border-t border-rule py-5 last:border-b">
            <h3 className="font-sans text-h3 font-bold">{item.award}</h3>
            <p className="mt-1 text-ink-muted">
              {item.institution}, {item.year}
              {item.note && `, ${item.note}`}
            </p>
          </li>
        ))}
      </ul>
      <h3 className="mt-12 text-h3">Courses</h3>
      <ul className="mt-4">
        {courses.map((course) => (
          <li key={course.title} className="py-2">
            {course.title}
            <span className="text-ink-muted">
              , {course.provider}, {course.year}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
