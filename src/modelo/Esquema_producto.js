const zod = require("zod");

const product = zod.object({
    id: zod.string().optional(),
    name: zod.string(),
    description: zod.string(),
    price: zod.number(),
    stock: zod.number(),
    category: zod.string(),
    rating: zod.object({
       rate: zod.number(),
       count: zod.number()
    }),
    images: zod.array(zod.string()).optional()
})

module.exports = product