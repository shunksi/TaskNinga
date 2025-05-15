'use client'

import { tasks } from '@/components/data/task-data';
import { tasksColumns } from "@/components/task-area/task-columns";
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Star, StarOff, Clock, CheckCircle, XCircle, ListTodo, Loader2, Archive } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const statusIcons = {
  backlog: <Archive className="h-4 w-4 text-muted-foreground" />,
  todo: <ListTodo className="h-4 w-4 text-blue-500" />,
  inprogress: <Loader2 className="h-4 w-4 text-yellow-500 animate-spin" />,
  done: <CheckCircle className="h-4 w-4 text-green-500" />,
  canceled: <XCircle className="h-4 w-4 text-red-500" />,
}

const priorityColors = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  urgent: 'bg-red-500',
}


export default function TaskTable() {
  const [starredTasks, setStarredTasks] = useState<string[]>([])

  const toggleStar = (id: string) => {
    setStarredTasks(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const table = useReactTable({
    data: tasks,
    columns: tasksColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className=" rounded-md border mt-2 bg-background">
      <Table>
          <TableHeader>
  {table.getHeaderGroups().map((headerGroup) => (
    <TableRow key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <TableHead key={header.id}>
          {header.isPlaceholder
            ? null
            : flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
        </TableHead>
      ))}
    </TableRow>
  ))}
</TableHeader>

        <TableBody>
          {tasks.map(task => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.label}</TableCell>
              <TableCell className="flex items-center gap-2">
                {statusIcons[task.status]}
                <span className="capitalize">{task.status}</span>
              </TableCell>
                <TableCell>
                <Badge className={`${priorityColors[task.priority]} text-white`}>
                  {task.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <Button onClick={() => toggleStar(task.id)}>
                  {starredTasks.includes(task.id) || task.starred ? (
                    <Star className="h-4 w-4 text-yellow-400" />
                  ) : (
                    <StarOff className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </TableCell>
              <TableCell>{task.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

