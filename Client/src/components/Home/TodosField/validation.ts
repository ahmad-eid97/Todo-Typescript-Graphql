import { z } from 'zod';

const TodoValidation = z.object({
  content: z.string({
    required_error: "Todo content can't be empty!",
  }).min(6)
})

export default TodoValidation;