<template>
  <VueForm
    v-model="formData"
    :schema="schema"
    @submit="submit"
  >
  </VueForm>
</template>

<script>
import VueForm from '@lljj/vue3-form-element';

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

// {
//   "$schema": "http://json-schema.org/draft-07/schema#",
//   "$ref": "#/definitions/zod",
//   "definitions": {
//     "zod": {
//       "type": "object",
//       "properties": {
//         "myString": {
//           "type": "string",
//           "minLength": 5
//         },
//         "myUnion": {
//           "type": ["number", "boolean"]
//         }
//       },
//       "additionalProperties": false,
//       "required": ["myString", "myUnion"]
//     }
//   }
// }


for (let key in jsonSchema.properties) {
  console.log("key", key)

  // 添加title字段
 if (!jsonSchema.properties[key].title) {
    jsonSchema.properties[key].title = key
  } 
}

console.log(jsonSchema)


export default {
  name: 'App',
  
  components: {
    VueForm
  },

  methods: {
    submit(item) {
      console.log(item)
    }
  },

  data() {
    return {
        formData: {},
        // schema: {
        //     type: 'object',
        //     required: [
        //         'userName',
        //         'age',
        //     ],
        //     properties: {
        //         userName: {
        //             type: 'string',
        //             title: '用户名',
        //             default: 'Liu.Jun',
        //         },
        //         age: {
        //             type: 'number',
        //             title: '年龄'
        //         },
        //         bio: {
        //             type: 'string',
        //             title: '签名',
        //             minLength: 10,
        //             default: '知道的越多、就知道的越少',
        //             'ui:options': {
        //                 placeholder: '请输入你的签名',
        //                 type: 'textarea',
        //                 rows: 1
        //             }
        //         }
        //     }
        // },

        schema: jsonSchema
    };
  }

}
</script>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
