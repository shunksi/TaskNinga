export type Status = "backlog" | "todo" | "inprogress" | "done" | "canceled";
export type Priority = "low" | "medium" | "high" | "urgent";

export interface Task {
  id: string;
  title: string;
  label: string;
  status: Status;
  priority: Priority;
  starred: boolean;
  dateAdded: string;
}

export const tasks: Task[] = [
  {
    id: "1",
    title: "Design homepage",
    label: "Design",
    status: "inprogress",
    priority: "high",
    starred: true,
    dateAdded: "2025-04-23",
  },
  {
    id: "2",
    title: "Fix login bug",
    label: "Bug",
    status: "todo",
    priority: "urgent",
    starred: false,
    dateAdded: "2025-04-20",
  },
  {
    id: "3",
    title: "Write blog post",
    label: "Content",
    status: "backlog",
    priority: "medium",
    starred: false,
    dateAdded: "2025-04-10",
  },
];

