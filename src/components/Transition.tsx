import { timingSafeEqual } from "crypto";
import { Avatar } from "./Avatar";
import { useState, useTransition } from "react";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
}

const member = {
  a: 'A',
  b: 'B',
  c: 'C',
}

const generateDummyTasks = (): Task[]=>{
  return Array(1000).fill('').map((_, index)=> {
    const addedIndex = index +1;
    return {
      id: addedIndex,
      title: `task${addedIndex}`,
      assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 2 === 0 ? member.b : member.c
    }
  })
}

const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks;
  return tasks.filter((task)=> task.assignee === assignee);
}

export const Transition = () => {
  const [selectedAssignee, setSeletedAssignee] = useState<string>('')
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  // const [isPending, startTransition] = useTransition();

  const onClickAssignee = (assignee: string) => {
    setSeletedAssignee(assignee);
    // startTransition(()=> {
      setTaskList(filteringAssignee(assignee));
    // })
  }
  return (
    <div>

    <div>Transaction</div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Avatar onClick={onClickAssignee} isSelected={selectedAssignee === member.a}>{member.a}</Avatar>
    <Avatar onClick={onClickAssignee} isSelected={selectedAssignee === member.b}>{member.b}</Avatar>
    <Avatar onClick={onClickAssignee} isSelected={selectedAssignee === member.c}>{member.c}</Avatar>
    </div>
    <br />
    <button onClick={()=> onClickAssignee('')}>reset</button>
<TaskList taskList={taskList} />
      </div>
  )
}
