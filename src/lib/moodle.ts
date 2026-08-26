/**
 * Moodle Web Services — phase 2/3 only.
 * Token stays in Vercel env. Do not call from the browser.
 *
 * Phase 2 (catalog at build): core_course_get_courses
 * Phase 3 (enrol after Aufnahme): core_user_create_users, enrol_manual_enrol_users
 */
const MOODLE_URL = import.meta.env.MOODLE_URL as string | undefined;
const MOODLE_WSTOKEN = import.meta.env.MOODLE_WSTOKEN as string | undefined;

type MoodleParams = Record<string, string | number>;

export async function moodleCall<T>(
  wsfunction: string,
  params: MoodleParams = {},
): Promise<T> {
  if (!MOODLE_URL || !MOODLE_WSTOKEN) {
    throw new Error("Moodle env is not configured");
  }

  const body = new URLSearchParams({
    wstoken: MOODLE_WSTOKEN,
    wsfunction,
    moodlewsrestformat: "json",
  });

  for (const [key, value] of Object.entries(params)) {
    body.set(key, String(value));
  }

  const response = await fetch(`${MOODLE_URL}/webservice/rest/server.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    throw new Error(`Moodle HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}
