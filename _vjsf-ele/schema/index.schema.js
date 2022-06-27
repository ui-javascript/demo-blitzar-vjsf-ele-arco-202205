import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const mySchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  date: z.date()
    // .default(new Date().toString())
    .optional(),
  select: z.enum(['hello', 'hi', 'how are you'])
    // .default(null)
    .optional(),

  age: z.number(),
  isOk: z.boolean().default(false),


  // enumName这样的字段不支持 
  select2: z.nativeEnum({
    a: 'a1',
    b: 'b1'
  }),

  // password: z.password(),

  // @todo
  // id: z.bigint(),
  // @todo 联合类型的支持  
  // myUnion: z.union([z.number(), z.boolean()]),
});


const jsonSchema = zodToJsonSchema(mySchema, {
  // name: 'zod',
  // target: 'openApi3'
});


for (let key in jsonSchema.properties) {
    console.log("key", key)
  
    // 添加title字段
    if (!jsonSchema.properties[key].title) {
      jsonSchema.properties[key].title = key
    }
  }

export default jsonSchema;