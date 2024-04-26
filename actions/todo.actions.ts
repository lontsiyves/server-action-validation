"use server";
import { z } from "zod";

import { revalidatePath } from "next/cache";

const createPostSchema = z.object({
  title: z.string().min(1).max(191),
  body: z.string().min(1),
});

type FormState = {
  message: string;
};

export const addTodo = async (formState: FormState, formData: FormData) => {
  const params = createPostSchema.parse({
    title: formData.get("title"),
    body: formData.get("body"),
  });
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        ...params,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (error) {
    return {
      message: "Something went wrong",
    };
  }
  return {
    message: "Message created",
  };
  revalidatePath("/");
};
