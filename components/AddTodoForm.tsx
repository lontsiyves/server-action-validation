'use client'
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { addTodo } from "@/actions/todo.actions";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { useRef } from "react";

export default function AddTodoForm() {
    const [formState, action] = useFormState(addTodo, {
        message: '',
      });
      const ref = useRef(null)
  return (
    <div>
      <form ref= {ref} action={action} className="flex flex-col gap-y-2">
        <Input type="text" name="title" placeholder="Title" />
        <Textarea name="body" placeholder="Description" />

        <SubmitButton  label="Create" loading="Creating ..." />
        <span className="font-bold">{formState.message}</span>
      </form>
    </div>
  );
}
